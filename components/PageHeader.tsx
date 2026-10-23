import { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  description: string;
  actions?: ReactNode;
};

function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <header className="flex w-full flex-col justify-between gap-4 md:flex-row md:items-center">
      <div className="shrink-0 space-y-1">
        <h1 className="text-text-primary text-2xl font-bold md:text-3xl">
          {title}
        </h1>
        <p className="text-sm md:text-base">{description}</p>
      </div>

      {actions && (
        <div className="flex shrink-0 flex-col gap-2.5 md:items-center">
          {actions}
        </div>
      )}
    </header>
  );
}

export default PageHeader;
