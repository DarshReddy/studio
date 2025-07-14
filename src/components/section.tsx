
"use client";

import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface SectionProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ title, icon: Icon, children, className, id }: SectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -100px 0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={cn(
        "py-12 md:py-16 transition-all duration-700 ease-out", 
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
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
