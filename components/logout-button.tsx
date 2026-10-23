"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogout() {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signOut();

    if (error) {
      setMessage("Unable to sign out. Please try again.");
      setLoading(false);
      return;
    }

    router.replace("/login");
    router.refresh();
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleLogout}
        disabled={loading}
        className="rounded-md border px-4 py-2 text-sm font-medium disabled:opacity-50">
        {loading ? "Signing out..." : "Sign out"}
      </button>

      {message && (
        <p role="alert" className="mt-2 text-sm text-red-600">
          {message}
        </p>
      )}
    </div>
  );
}
