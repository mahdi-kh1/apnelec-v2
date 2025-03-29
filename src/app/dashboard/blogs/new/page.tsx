import BlogForm from "@/components/form/BlogForm";

export default function NewUserForm() {
  return <BlogForm redirectToPage={true} redirectPath="/dashboard/blogs" />;
}
