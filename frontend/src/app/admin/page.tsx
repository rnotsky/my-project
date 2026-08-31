"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import AdminDashboard from "@/components/admin/AdminDashboard";

export default function AdminPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.replace("/");
      return;
    }

    if (!user.is_admin) {
      router.replace("/");
      return;
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (!user || !user.is_admin) {
    return null;
  }

  return <AdminDashboard />;
}