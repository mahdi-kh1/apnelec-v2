"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Upload, X } from 'lucide-react';

interface SubscriptionImageUploadProps {
  initialImage?: string | null;
  onImageChange: (file: File | null) => void;
  label: string;
  required?: boolean;
}

export default function SubscriptionImageUpload({ 
  initialImage, 
  onImageChange, 
  label,
  required = false 
}: SubscriptionImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(initialImage || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    if (file) {
      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit');
        return;
      }
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      // Pass file to parent component
      onImageChange(file);
    } else {
      setPreview(null);
      onImageChange(null);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    onImageChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {preview && (
          <Button 
            type="button" 
            variant="outline" 
            size="sm" 
            onClick={handleRemoveImage}
            className="h-8 px-2 text-xs"
          >
            <X className="h-4 w-4 mr-1" /> Remove
          </Button>
        )}
      </div>
      
      {preview ? (
        <div 
          className="relative h-48 w-full border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <Image 
            src={preview} 
            alt={label}
            fill
            className="object-contain"
          />
        </div>
      ) : (
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-md p-6 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
        >
          <Upload className="h-10 w-10 text-gray-400 dark:text-gray-500 mb-2" />
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            Click to upload {label.toLowerCase()}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            PNG, JPG, WEBP up to 5MB
          </p>
        </div>
      )}
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/jpg, image/webp"
        className="hidden"
      />
    </div>
  );
} 