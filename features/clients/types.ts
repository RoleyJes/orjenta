export type ClientStatus = "lead" | "active" | "inactive";

export interface Client {
  id: string;
  owner_id: string;
  name: string;
  company: string | null;
  email: string | null;
  phone: string | null;
  status: ClientStatus;
  notes: string | null;
  industry: string | null;
  created_at: string;
  updated_at: string;
}
