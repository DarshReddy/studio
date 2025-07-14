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
          <div className="relative pl-10">
            <div className="absolute w-4 h-4 bg-primary rounded-full left-[10px] top-1/2 -translate-y-1/2 ring-4 ring-background" />
            <AccordionTrigger className="w-full py-6 text-left hover:no-underline">
              <div className="grid md:grid-cols-[1fr_auto] gap-x-12 w-full pr-4">
                <div className="flex flex-col items-start pl-8">
                  <h3 className="text-xl font-bold font-headline text-primary-foreground">{item.title}</h3>
                  <p className="text-lg text-primary">{item.subtitle}</p>
                </div>
                <div className="pt-2 md:pt-0 justify-self-start md:justify-self-end pl-8 md:pl-0">
                  <Badge variant="outline">{item.dates}</Badge>
                </div>
              </div>
            </AccordionTrigger>
          </div>
          <AccordionContent>
            <div className="pl-18 pr-4 pb-4 ml-10">
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
