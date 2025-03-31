"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, Upload } from "lucide-react";
import { toast } from "sonner";

interface BlogFormProps {
  redirectToPage?: boolean;
  redirectPath?: string;
  blogId?: string;
  existingData?: {
    title: string;
    content: string;
    authorId: string;
    excerpt?: string;
    tags?: string;
    readTime?: number;
    featured?: boolean;
    published?: boolean;
    imagePath?: string | null;
  };
}

export default function BlogForm({
  redirectToPage = false,
  redirectPath = "/",
  blogId,
  existingData,
}: BlogFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(
    existingData?.imagePath || null
  );
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    title: existingData?.title || "",
    content: existingData?.content || "",
    excerpt: existingData?.excerpt || "",
    tags: existingData?.tags || "",
    readTime: existingData?.readTime || 5,
    featured: existingData?.featured || false,
    published: existingData?.published || false,
  });
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleRemoveImage = () => {
    setImagePreview(null);
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("content", formData.content);
      formDataToSend.append("excerpt", formData.excerpt);
      formDataToSend.append("tags", formData.tags);
      formDataToSend.append("readTime", formData.readTime.toString());
      formDataToSend.append("featured", formData.featured.toString());
      formDataToSend.append("published", formData.published.toString());
      
      if (imageFile) {
        formDataToSend.append("image", imageFile);
      }
      
      const url = blogId ? `/api/blogs/${blogId}` : "/api/blogs";
      const method = blogId ? "PUT" : "POST";
      
      const response = await fetch(url, {
        method,
        body: formDataToSend,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to save blog");
      }
      
      toast.success(blogId ? "Blog updated successfully" : "Blog created successfully");
      
      if (redirectToPage) {
        router.push(redirectPath);
      }
    } catch (error) {
      console.error("Error saving blog:", error);
      toast.error(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto p-6">
      <div className="space-y-6">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            placeholder="Brief summary of the blog post"
            rows={3}
          />
        </div>
        
        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your blog content here"
            rows={10}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="tags">Tags</Label>
          <Input
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Enter tags separated by commas"
          />
        </div>
        
        <div>
          <Label htmlFor="readTime">Read Time (minutes)</Label>
          <Input
            id="readTime"
            name="readTime"
            type="number"
            value={formData.readTime}
            onChange={handleChange}
            min={1}
          />
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="block text-sm font-medium">
              Blog Image
            </Label>
            {imagePreview && (
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
          
          {imagePreview ? (
            <div className="relative h-64 w-full rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
              <Image 
                src={imagePreview} 
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
            onChange={handleImageChange}
            accept="image/png, image/jpeg, image/jpg, image/webp"
            className="hidden"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch
            id="featured"
            checked={formData.featured}
            onCheckedChange={(checked: boolean) => handleSwitchChange("featured", checked)}
          />
          <Label htmlFor="featured">Featured Post</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch
            id="published"
            checked={formData.published}
            onCheckedChange={(checked: boolean) => handleSwitchChange("published", checked)}
          />
          <Label htmlFor="published">Published</Label>
        </div>
      </div>
      
      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : blogId ? "Update Blog" : "Create Blog"}
        </Button>
      </div>
    </form>
  );
}
