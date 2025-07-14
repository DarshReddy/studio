"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge";

interface TimelineItem {
  title: string;
  subtitle: string;
  dates: string;
  description: string | string[];
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <div className="relative pl-8 after:absolute after:inset-y-0 after:w-px after:bg-border after:left-0">
            <div className="absolute w-3 h-3 bg-primary rounded-full left-[-2px] mt-1.5" />
            <AccordionTrigger className="w-full py-4 text-left hover:no-underline">
              <div className="grid md:grid-cols-[1fr_auto] gap-x-12 w-full pr-4">
                <div className="flex flex-col items-start pl-6">
                  <h3 className="text-xl font-bold font-headline text-primary-foreground">{item.title}</h3>
                  <p className="text-lg text-primary">{item.subtitle}</p>
                </div>
                <div className="pt-2 md:pt-0 justify-self-start md:justify-self-end">
                  <Badge variant="outline">{item.dates}</Badge>
                </div>
              </div>
            </AccordionTrigger>
          </div>
          <AccordionContent>
            <div className="pl-14 pr-4 pb-4">
              {Array.isArray(item.description) ? (
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">{item.description}</p>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}