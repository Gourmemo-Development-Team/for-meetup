"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <button onClick={handleLogout} className="flex items-center text-sm font-medium hover:text-primary-600 transition-colors text-stone-600">
      <LogOut className="w-4 h-4 mr-1" />
      ログアウト
    </button>
  );
}
