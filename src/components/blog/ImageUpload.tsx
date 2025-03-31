"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  initialImage?: string;
  onImageChange: (file: File | null, preview: string | null) => void;
}

export default function ImageUpload({ initialImage, onImageChange }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(initialImage || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imagePreview = reader.result as string;
        setPreview(imagePreview);
        onImageChange(file, imagePreview);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
      onImageChange(null, null);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    onImageChange(null, null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Blog Image
        </label>
        {preview && (
          <Button 
            type="button" 
            variant="outline" 
            size="sm" 
            onClick={handleRemoveImage}
            className="text-red-500 hover:text-red-700"
          >
            <X className="h-4 w-4 mr-1" /> Remove
          </Button>
        )}
      </div>
      
      {preview ? (
        <div className="relative h-64 w-full rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
          <Image 
            src={preview} 
            alt="Blog preview" 
            fill 
            className="object-cover"
          />
        </div>
      ) : (
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="h-64 w-full border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
        >
          <Upload className="h-10 w-10 text-gray-400 dark:text-gray-600 mb-2" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Click to upload an image
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