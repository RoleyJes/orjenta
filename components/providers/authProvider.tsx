"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { User } from "@supabase/supabase-js";

import { supabase } from "@/lib/supabase/client";
import { AppUser } from "@/types/auth";

type AuthContextValue = {
  user: AppUser | null;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function mapSupabaseUser(user: User | null): AppUser | null {
  if (!user) {
    return null;
  }

  const fullName = user.user_metadata?.full_name;

  return {
    id: user.id,
    email: user.email ?? null,
    fullName:
      typeof fullName === "string" && fullName.trim()
        ? fullName.trim()
        : "User",
    avatarUrl:
      typeof user.user_metadata?.avatar_url === "string"
        ? user.user_metadata.avatar_url
        : null,
  };
}

type AuthProviderProps = {
  initialUser: AppUser | null;
  children: ReactNode;
};

export function AuthProvider({ initialUser, children }: AuthProviderProps) {
  const [user, setUser] = useState<AppUser | null>(initialUser);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(mapSupabaseUser(session?.user ?? null));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export function useAuthUser() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
