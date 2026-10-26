import { Database } from "@/types/database.types";

export type Client = Database["public"]["Tables"]["clients"]["Row"];

export type NewClient = Database["public"]["Tables"]["clients"]["Insert"];

export type ClientUpdate = Database["public"]["Tables"]["clients"]["Update"];
