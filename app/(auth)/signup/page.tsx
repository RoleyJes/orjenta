"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName.trim(),
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        throw error;
      }

      if (data.session) {
        setMessage("Account created successfully. You are signed in.");
      } else {
        setMessage(
          "Signup submitted. Check your email for a confirmation link if required.",
        );
      }
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to create your account.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-7">
      <form onSubmit={handleSignup} className="w-full max-w-md space-y-5">
        <div>
          <h1 className="text-3xl font-bold">Create your Orjenta account</h1>
          <p className="mt-2 text-gray-600">Sign up to get started.</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            required
            disabled={loading}
            value={fullName}
            autoComplete="name"
            onChange={(event) => setFullName(event.target.value)}
            className="w-full rounded-md border p-3"
            placeholder="John Doe"
          />
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
            autoComplete="new-password"
            minLength={8}
            required
            disabled={loading}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-md border p-3"
            placeholder="At least 8 characters"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-black p-3 text-white disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Create account"}
        </button>

        {message && (
          <p role="status" aria-live="polite" className="text-sm">
            {message}
          </p>
        )}

        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-black underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
