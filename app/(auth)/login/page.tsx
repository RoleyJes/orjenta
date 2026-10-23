"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo_light_full.png";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      router.replace("/dashboard");
      router.refresh();
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to sign in. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-7">
      <form onSubmit={handleLogin} className="max-w-md space-y-5">
        <div>
          <h1 className="text-3xl font-bold">Welcome back to Orjenta</h1>
          <p className="mt-2 text-gray-600">Sign in to manage your clients.</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            disabled={loading}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-md border p-3"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            disabled={loading}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-md border p-3"
            placeholder="Your password"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-brand hover:bg-brand-hover w-full rounded-md p-3 text-white transition disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>

        {message && (
          <p role="alert" className="text-sm text-red-600">
            {message}
          </p>
        )}

        <p className="text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-black underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
