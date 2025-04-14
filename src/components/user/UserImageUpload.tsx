"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Upload, X, User } from 'lucide-react';

interface UserImageUploadProps {
  initialImage?: string | null;
  onImageChange: (file: File | null) => void;
  size?: 'sm' | 'md' | 'lg';
}

export default function UserImageUpload({ 
  initialImage, 
  onImageChange,
  size = 'md'
}: UserImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(initialImage || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Determine dimensions based on size prop
  const dimensions = {
    sm: { height: 'h-24', width: 'w-24', iconSize: 'h-6 w-6' },
    md: { height: 'h-32', width: 'w-32', iconSize: 'h-8 w-8' },
    lg: { height: 'h-40', width: 'w-40', iconSize: 'h-10 w-10' }
  }[size];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    if (file) {
      // Check file size (2MB max)
      if (file.size > 2 * 1024 * 1024) {
        alert('File size exceeds 2MB limit');
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
    <div className="flex flex-col items-center space-y-3">
      {preview ? (
        <div className={`relative ${dimensions.height} ${dimensions.width} rounded-full overflow-hidden border border-gray-200 dark:border-gray-700`}>
          <Image 
            src={preview} 
            alt="User profile" 
            fill 
            className="object-cover"
          />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            onClick={handleRemoveImage}
            className="absolute bottom-0 right-0 h-6 w-6 rounded-full"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      ) : (
        <div 
          onClick={() => fileInputRef.current?.click()}
          className={`${dimensions.height} ${dimensions.width} rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center cursor-pointer hover:border-gray-400 dark:hover:border-gray-600 transition-colors`}
        >
          {initialImage ? (
            <div className="relative h-full w-full">
              <Image 
                src={initialImage} 
                alt="User profile" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Upload className="h-6 w-6 text-white" />
              </div>
            </div>
          ) : (
            <User className={`${dimensions.iconSize} text-gray-400 dark:text-gray-600`} />
          )}
        </div>
      )}
      
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => fileInputRef.current?.click()}
        className="text-xs"
      >
        {preview ? 'Change Photo' : 'Upload Photo'}
      </Button>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/jpg, image/webp"
        className="hidden"
      />
      
      <p className="text-xs text-gray-500 dark:text-gray-400">
        PNG, JPG, WEBP up to 2MB
      </p>
    </div>
  );
} 