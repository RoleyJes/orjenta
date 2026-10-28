"use client";

import { useForm } from "react-hook-form";
import Modal from "@/components/Modal";
import InputField from "@/components/InputField";
import TextareaField from "@/components/TextareaField";
import { ButtonLink } from "@/components/ButtonLink";
import { clientFormSchema, type ClientFormData } from "../validations";
import { zodResolver } from "@/lib/zodResolver";
import { useAddNewClient } from "../hooks/useAddNewClient";
import { useAuthUser } from "@/components/providers/authProvider";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

interface AddNewClientProps {
  onClose: () => void;
  isOpen?: boolean;
}

export default function AddNewClient({
  onClose,
  isOpen = true,
}: AddNewClientProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ClientFormData>({
    resolver: zodResolver(clientFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      industry: "",
      notes: "",
    },
    mode: "onTouched",
  });

  const { addClient, isPending } = useAddNewClient();
  const { user } = useAuthUser();

  const onSubmit = (data: ClientFormData) => {
    if (user) {
      addClient(
        { ...data, owner_id: user.id },
        {
          onSuccess: (newClient) => {
            console.log(newClient);
            reset();
            onClose();
            toast.success("Client added successfully");
          },
          onError: (error) => {
            toast.error(error.message);
          },
        },
      );
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="New Client"
      description="Add the details below to get started."
      maxWidth="lg"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Client name"
          required
          disabled={isPending}
          placeholder="e.g. Olivia Martin"
          error={errors.name?.message}
          {...register("name")}
        />

        <InputField
          label="Company name"
          disabled={isPending}
          placeholder="e.g. Northstar Studio"
          error={errors.company?.message}
          {...register("company")}
        />

        <InputField
          label="Email address"
          required
          type="email"
          disabled={isPending}
          placeholder="name@company.com"
          error={errors.email?.message}
          {...register("email")}
        />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <InputField
            label="Industry"
            type="text"
            disabled={isPending}
            placeholder="e.g. Technology"
            error={errors.industry?.message}
            {...register("industry")}
          />

          <InputField
            label="Phone number"
            type="tel"
            disabled={isPending}
            placeholder="+1 (555) 000-0000"
            error={errors.phone?.message}
            {...register("phone")}
          />
        </div>

        <TextareaField
          label="Notes"
          disabled={isPending}
          placeholder="Add any helpful context about this client..."
          rows={3}
          error={errors.notes?.message}
          {...register("notes")}
        />

        <div className="flex items-center justify-end gap-3 pt-3">
          <ButtonLink
            variant="secondary"
            type="button"
            onClick={handleClose}
            className="h-9 px-4 text-sm font-medium"
          >
            Cancel
          </ButtonLink>
          <ButtonLink
            variant="primary"
            type="submit"
            disabled={isPending}
            className="h-9 px-4 text-sm font-medium"
          >
            {isPending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              "Create Client"
            )}
          </ButtonLink>
        </div>
      </form>
    </Modal>
  );
}
