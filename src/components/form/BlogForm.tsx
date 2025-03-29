"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import * as Select from "@radix-ui/react-select";

const FormSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(255, "Title must not exceed 255 characters"),
  content: z.string().optional(),
  authorId: z.string().min(1, "Author is required"),
});

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

type BlogFormProps = {
  blogId?: string;
  existingData?: { title: string; content?: string; authorId: string };
  redirectToPage?: boolean;
  redirectPath?: string;
};

export default function BlogForm({
  blogId,
  existingData,
  redirectToPage = false,
  redirectPath = "/dashboard/blogs",
}: BlogFormProps) {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: existingData || {
      title: "",
      content: "",
      authorId: "",
    },
  });
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, []);

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const url = blogId ? `/api/blogs/${blogId}` : "/api/blog";
    const method = blogId ? "PUT" : "POST";

    console.log("Submitting data to:", url); // اضافه کردن این خط برای بررسی URL

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      toast.success(
        blogId
          ? "Blog post updated successfully"
          : "Blog post created successfully"
      );
      if (redirectToPage) {
        setTimeout(() => {
          router.push(redirectPath);
        }, 1000);
      }
    } else {
      const errorData = await response.json();
      toast.error(errorData.message || "Operation failed");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter post title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write your content here..."
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="authorId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Select.Root onValueChange={field.onChange} value={field.value}>
                  <Select.Trigger className="w-full px-3 py-2 border rounded-md bg-white text-sm text-left">
                    <Select.Value placeholder="Select a User" />
                  </Select.Trigger>
                  <Select.Content className="w-full bg-white border rounded-md shadow-md">
                    <Select.Viewport className="w-full">
                      {users.map((user) => (
                        <Select.Item
                          value={user.id}
                          className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                          key={user.id}
                        >
                          <Select.ItemText>{`${user.firstName} ${user.lastName}`}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Root>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg"
        >
          {blogId ? "Update Post" : "Create Post"}
        </Button>
      </form>
    </Form>
  );
}
