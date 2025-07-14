import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ title, icon: Icon, children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-16", className)}>
      <div className="flex items-center gap-4 mb-8">
        <Icon className="w-8 h-8 text-primary" />
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-foreground">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
