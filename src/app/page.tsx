
import { Github, Mail, Briefcase, GraduationCap, Lightbulb, Wrench, Linkedin, Instagram } from "lucide-react";
import type { ResumeData } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { Timeline } from "@/components/timeline";
import { ProjectShowcase } from "@/components/project-showcase";
import { Badge } from "@/components/ui/badge";

const portfolioData: ResumeData = {
  experience: [
    {
      title: "Software Engineer 3",
      company: "Artium Academy",
      dates: "Aug 2024 - Present",
      description: [
        "Updated all the libraries, plugins, kotlin and gradle versions in the app. Moved from Groovy to kotlin build scripts",
        "Improved the crash-free rate to 98.8% from 91.2%",
        "Revamped the architecture to make all APIs robust and crash-proof with proper error handling",
        "Planned, implemented and released the changes for Artium 2.0 Globally Recognised Music Program",
      ],
    },
    {
      title: "Software Engineer 2 & 1",
      company: "Scaler by InterviewBit",
      dates: "Dec 2021 - Aug 2024",
      description: [
        "Built the foundations for a server-driven UI architecture for a fast and flexible app.",
        "Built CI/CD pipeline for the Android app using Jenkins, Docker, Danger, Fastlane and Supply",
        "Built a video experience of Scaler topics in a mobile app with features like playback speed, video quality, autoplay, offline downloads and reactive modules and lessons",
        "Added Jetpack compose support, along with Server-Driven UI support and interoperability with old SDUI components",
        "Integrated third-party services like AppsFlyer, WebEngage, mixpanel, FB ad deeplinks SDK, Freshchat",
      ],
    },
    {
      title: "Software Engineer 1 & Intern",
      company: "Practo",
      dates: "Feb 2021 - Nov 2021",
      description: [
        "Worked on the patient side app along with the API aggregator.",
        "Built product features and fixed a few critical bugs.",
        "Was an integral part of the Practo Care - surgeries launch.",
      ],
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
    "Kotlin",
    "Java",
    "C++",
    "Android",
    "Jetpack Compose",
    "Android Studio",
    "Git",
    "Jenkins",
  ],
  projects: [
    {
      name: "Practo",
      description: "A healthcare platform connecting patients with doctors, offering online consultations, appointment booking, and health record management.",
      link: "https://play.google.com/store/apps/details?id=com.practo.fabric&hl=en_IN",
    },
    {
      name: "Artium",
      description: "A music learning platform offering live one-on-one classes with celebrity instructors and certified teachers.",
      link: "https://play.google.com/store/apps/details?id=com.artiumacademy.mobile.app&hl=en_IN",
    },
    {
      name: "Scaler",
      description: "An ed-tech platform providing upskilling courses for tech professionals, with a focus on practical skills and career growth.",
      link: "https://play.google.com/store/apps/details?id=com.scaler.app&hl=en_IN",
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
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  );

  const SocialLinks = () => (
    <Section title="Contact" icon={Mail} id="contact">
      <div className="flex justify-center gap-4">
        <Button asChild variant="outline" size="icon">
          <a href="mailto:darshreddy14@gmail.com" aria-label="Email">
            <Mail />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon">
          <a href="https://www.github.com/darshreddy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon">
          <a href="https://linkedin.com/in/darshreddy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon">
          <a href="https://www.instagram.com/eddy__shan/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram />
          </a>
        </Button>
      </div>
    </Section>
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
        <SocialLinks />
      </main>
    </div>
  );
}
