"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import AddNewClient from "./AddNewClient";

export default function AddNewClientBtn() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ButtonLink onClick={() => setOpen(true)}>
        <PlusCircle />
        <span>Add client</span>
      </ButtonLink>
      {open && <AddNewClient onClose={() => setOpen(false)} />}
    </>
  );
}
