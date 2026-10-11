"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

export default function LoginToast() {
  const { data: session, isPending } = authClient.useSession();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (isPending) return;

    if (searchParams.get("login") === "success" && session) {
      toast.success("সফলভাবে সাইন ইন হয়েছে!");

      router.replace("/");
    }
  }, [session, isPending, searchParams, router]);

  return null;
}
