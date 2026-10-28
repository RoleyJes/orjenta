import { Resolver } from "react-hook-form";
import { z } from "zod";

export function zodResolver<T extends z.ZodTypeAny>(schema: T): Resolver<z.infer<T>> {
  return async (values) => {
    const result = await schema.safeParseAsync(values);
    if (result.success) {
      return { values: result.data, errors: {} };
    }

    const errors: Record<string, any> = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] ? String(issue.path[0]) : "root";
      if (!errors[field]) {
        errors[field] = {
          type: issue.code,
          message: issue.message,
        };
      }
    }

    return { values: {}, errors };
  };
}
