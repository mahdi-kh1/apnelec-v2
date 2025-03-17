"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AccessDenied from "./AccessDenied";

export default function AdminRoute({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session?.user?.isAdmin) {
    return <AccessDenied />;
  }

  return <>{children}</>;
}