import SignUpForm from "@/components/form/SignUpForm";

export default function NewUserForm() {
  return <SignUpForm redirectToSignIn={true} redirectPath="/dashboard/users" />;
}
