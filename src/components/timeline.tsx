import { Badge } from "@/components/ui/badge";

interface TimelineItem {
  title: string;
  subtitle: string;
  dates: string;
  description: string | string[];
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative pl-8 after:absolute after:inset-y-0 after:w-px after:bg-border after:left-0">
      {items.map((item, index) => (
        <div key={index} className="relative grid md:grid-cols-[1fr_auto] gap-x-12 pb-12 last:pb-0">
          <div className="flex flex-col items-start">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[18px] mt-1.5" />
            <h3 className="text-xl font-bold font-headline text-primary-foreground">{item.title}</h3>
            <p className="text-lg text-primary">{item.subtitle}</p>
            {Array.isArray(item.description) ? (
              <ul className="mt-2 list-disc pl-5 space-y-1 text-muted-foreground">
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            )}
          </div>
          <div className="pt-2 md:pt-0 justify-self-start md:justify-self-end">
            <Badge variant="outline">{item.dates}</Badge>
          </div>
        </div>
      ))}
    </div>
  );
}
