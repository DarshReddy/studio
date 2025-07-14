import { Github, Mail, Briefcase, GraduationCap, Lightbulb, Wrench } from "lucide-react";
import type { ResumeData } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { Timeline } from "@/components/timeline";
import { ProjectShowcase } from "@/components/project-showcase";
import { Badge } from "@/components/ui/badge";

const portfolioData: ResumeData = {
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Innovate Inc.",
      dates: "2020 - Present",
      description: "Leading development of a new-gen platform using React and TypeScript. Architected and implemented a scalable microservices backend, improving system performance by 40%. Mentored junior developers, fostering a culture of code quality and continuous learning.",
    },
    {
      title: "Software Engineer",
      company: "Tech Solutions",
      dates: "2018 - 2020",
      description: "Developed and maintained features for a large-scale e-commerce application. Collaborated with cross-functional teams to deliver high-quality software on schedule. Optimized application performance, reducing page load times by 25%.",
    },
  ],
  education: [
    {
      institution: "University of Technology",
      degree: "B.S. in Computer Science",
      dates: "2014 - 2018",
      description: "Graduated with honors. Focused on software engineering, algorithms, and data structures. Active member of the coding club and participated in several hackathons.",
    },
  ],
  skills: [
    "TypeScript", "React", "Next.js", "Node.js", "GraphQL", "PostgreSQL", "Docker", "Kubernetes", "AWS", "CI/CD",
  ],
  projects: [
    {
      name: "Practo",
      description: "A healthcare platform connecting patients with doctors, offering online consultations, appointment booking, and health record management.",
      link: "https://play.google.com/store/apps/details?id=com.practo.fabric&hl=en_IN",
    },
    {
      name: "Scaler",
      description: "An ed-tech platform providing upskilling courses for tech professionals, with a focus on practical skills and career growth.",
      link: "https://play.google.com/store/apps/details?id=com.scaler.app&hl=en_IN",
    },
    {
      name: "Artium",
      description: "A music learning platform offering live one-on-one classes with celebrity instructors and certified teachers.",
      link: "https://play.google.com/store/apps/details?id=com.artiumacademy.mobile.app&hl=en_IN",
    },
  ],
};


export default function Home() {

  const Hero = () => (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-headline tracking-tight text-primary-foreground">
        Darsh Reddy
      </h1>
      <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
        A passionate and creative Senior Software Engineer with a knack for building beautiful, scalable, and user-friendly applications.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button asChild size="lg">
          <a href="#projects">View My Work</a>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a href="mailto:darshreddy14@gmail.com">Get in Touch</a>
        </Button>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 py-8 border-t border-border">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Resume Refined. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon">
            <a href="mailto:darshreddy14@gmail.com" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="https://www.github.com/darshreddy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );

  const PortfolioScreen = ({ data }: { data: ResumeData }) => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {data.experience && data.experience.length > 0 && (
        <Section title="Experience" icon={Briefcase}>
          <Timeline items={data.experience.map(exp => ({ ...exp, subtitle: exp.company }))} />
        </Section>
      )}
      {data.education && data.education.length > 0 && (
        <Section title="Education" icon={GraduationCap}>
          <Timeline items={data.education.map(edu => ({ title: edu.degree, subtitle: edu.institution, ...edu }))} />
        </Section>
      )}
      {data.projects && data.projects.length > 0 && (
        <Section title="Work" icon={Lightbulb} id="projects">
          <ProjectShowcase projects={data.projects} />
        </Section>
      )}
      {data.skills && data.skills.length > 0 && (
        <Section title="Skills" icon={Wrench}>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-base px-4 py-2">{skill}</Badge>
            ))}
          </div>
        </Section>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <main className="flex-grow flex flex-col">
        <Hero />
        <PortfolioScreen data={portfolioData} />
      </main>
      <Footer />
    </div>
  );
}
