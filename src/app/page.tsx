
"use client";

import { Github, Mail, Briefcase, GraduationCap, Lightbulb, Wrench, Linkedin, Instagram, Phone, Code, Smartphone, Layout, GitFork, Server, HardDrive } from "lucide-react";
import type { ResumeData } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { Timeline } from "@/components/timeline";
import { Badge } from "@/components/ui/badge";
import dynamic from "next/dynamic";
import Image from "next/image";

const ProjectShowcase = dynamic(() => import('@/components/project-showcase').then(mod => mod.ProjectShowcase), {
  ssr: false,
});


const portfolioData: ResumeData = {
  experience: [
    {
      title: "Software Engineer 3",
      company: "Artium Academy",
      dates: "Aug 2024 - Present",
      logoUrl: "/images/artium.png",
      description: [
        "Updated all the libraries, plugins, kotlin and gradle versions in the app. Moved from Groovy to kotlin build scripts",
        "Improved the crash-free rate to 98.8% from 91.2%",
        "Revamped the architecture to make all APIs robust and crash-proof with proper error handling",
        "Planned, implemented and released the changes for Artium 2.0 Globally Recognised Music Program",
      ],
    },
    {
      title: "Software Engineer 2",
      company: "Scaler by InterviewBit",
      dates: "Jan 2023 - Aug 2024",
      logoUrl: "/images/scaler.png",
      description: [
        "Built the foundations for a server-driven UI architecture for a fast and flexible app.",
        "Built CI/CD pipeline for the Android app using Jenkins, Docker, Danger, Fastlane and Supply",
        "Built a video experience of Scaler topics in a mobile app with features like playback speed, video quality, autoplay, offline downloads and reactive modules and lessons",
        "Added Jetpack compose support, along with Server-Driven UI support and interoperability with old SDUI components",
        "Integrated third-party services like AppsFlyer, WebEngage, mixpanel, FB ad deeplinks SDK, Freshchat",
      ],
    },
    {
        title: "Software Engineer 1",
        company: "Scaler by InterviewBit",
        dates: "Dec 2021 - Dec 2022",
        logoUrl: "/images/scaler.png",
        description: [
            "Built the foundations for a server-driven UI architecture for a fast and flexible app.",
            "Built CI/CD pipeline for the Android app using Jenkins, Docker, Danger, Fastlane and Supply",
            "Built a video experience of Scaler topics in a mobile app with features like playback speed, video quality, autoplay, offline downloads and reactive modules and lessons",
            "Added Jetpack compose support, along with Server-Driven UI support and interoperability with old SDUI components",
            "Integrated third-party services like AppsFlyer, WebEngage, mixpanel, FB ad deeplinks SDK, Freshchat",
        ]
    },
    {
      title: "Software Engineer 1",
      company: "Practo",
      dates: "Aug 2021 - Nov 2021",
      logoUrl: "/images/practo.png",
      description: [
        "Worked on the patient side app along with the API aggregator.",
        "Built product features and fixed a few critical bugs.",
        "Was an integral part of the Practo Care - surgeries launch.",
      ],
    },
    {
        title: "Intern",
        company: "Practo",
        dates: "Feb 2021 - Jul 2021",
        logoUrl: "/images/practo.png",
        description: [
            "Worked on the patient side app along with the API aggregator.",
            "Built product features and fixed a few critical bugs.",
            "Was an integral part of the Practo Care - surgeries launch.",
        ]
    }
  ],
  education: [
    {
      institution: "University Visvesvaraya College of Engineering",
      degree: "Bachelor of Engineering in Computer Science",
      dates: "2017 - 2021",
      logoUrl: "/images/uvce.png",
      description: "Focused on software engineering, algorithms, and data structures. Active member of the IEEE club and Runner up in TechRoadies and Kagathon. Core member and advisor for Adhamya and Tatva - cultural clubs",
    },
  ],
  skills: [
    { name: "Kotlin", icon: Code },
    { name: "Java", icon: Code },
    { name: "C++", icon: Code },
    { name: "Android", icon: Smartphone },
    { name: "Jetpack Compose", icon: Layout },
    { name: "Git", icon: GitFork },
    { name: "Jenkins", icon: Server },
    { name: "Docker", icon: HardDrive },
  ],
  projects: [
    {
      name: "Practo",
      description: "A leading healthcare platform connecting patients with doctors and offering online consultations.",
      link: "https://play.google.com/store/apps/details?id=com.practo.fabric&hl=en_IN",
      imageUrl: "/images/practo_work.webp",
    },
    {
      name: "Artium",
      description: "An innovative music learning platform with live one-on-one online classes with celebrity instructors.",
      link: "https://play.google.com/store/apps/details?id=com.artiumacademy.mobile.app&hl=en_IN",
      imageUrl: "/images/artium_work.webp",
    },
    {
      name: "Scaler",
      description: "A premier ed-tech platform for upskilling tech professionals, leading to significant career growth.",
      link: "https://play.google.com/store/apps/details?id=com.scaler.app&hl=en_IN",
      imageUrl: "/images/scaler_work.webp",
    },
  ],
};


export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <div 
        className="min-h-screen flex flex-col bg-cover bg-center bg-fixed selection:bg-primary/20"
        style={{backgroundImage: "url('/images/bg.jpg')"}}
      >
        <div className="min-h-screen flex flex-col bg-background/95 backdrop-blur-sm">
          <main className="flex-grow flex flex-col">
            <Hero />
            <PortfolioScreen data={portfolioData} />
          </main>
        </div>
      </div>
    </div>
  );
}

const Hero = () => (
  <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center transition-all duration-1000 ease-out opacity-100 translate-y-0">
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
            <Badge key={skill.name} variant="secondary" className="text-base px-4 py-2 flex items-center gap-2">
              <skill.icon className="w-4 h-4" />
              {skill.name}
            </Badge>
          ))}
        </div>
      </Section>
    )}
    <Section title="Contact" icon={Mail} id="contact">
      <div className="flex justify-center gap-4">
        <Button asChild variant="outline" size="icon">
          <a href="mailto:darshreddy14@gmail.com" aria-label="Email" className="transition-transform hover:scale-110 active:scale-100">
            <Mail />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon">
          <a href="tel:+917899746088" aria-label="Phone" className="transition-transform hover:scale-110 active:scale-100">
            <Phone />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon">
          <a href="https://www.github.com/darshreddy" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-transform hover:scale-110 active:scale-100">
            <Github />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon">
          <a href="https://linkedin.com/in/darshreddy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-transform hover:scale-110 active:scale-100">
            <Linkedin />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon">
          <a href="https://www.instagram.com/eddy__shan/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-transform hover:scale-110 active:scale-100">
            <Instagram />
          </a>
        </Button>
      </div>
    </Section>
  </div>
);

    