"use client";

import { useState } from "react";
import { Github, Mail, Loader, UploadCloud, Briefcase, GraduationCap, Lightbulb, Wrench } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { extractResumeData } from "@/ai/flows/extract-resume-data";
import type { ResumeData } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/logo";
import { Section } from "@/components/section";
import { Timeline } from "@/components/timeline";
import { ProjectShowcase } from "@/components/project-showcase";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a resume file to upload.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      try {
        const resumeDataUri = reader.result as string;
        const result = await extractResumeData({ resumeDataUri });
        setResumeData(result);
      } catch (error) {
        console.error("Error parsing resume:", error);
        toast({
          title: "Error Parsing Resume",
          description: "There was an issue processing your resume. Please try another file.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    reader.onerror = (error) => {
      console.error("Error reading file:", error);
      toast({
        title: "Error Reading File",
        description: "Could not read the selected file. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    };
  };

  const Header = () => (
    <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-4">
          <a href="mailto:darshreddy14@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </a>
          <a href="https://www.github.com/darshreddy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );

  const Footer = () => (
    <footer className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 py-8 border-t border-border">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Resume Refined. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:darshreddy14@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
          <a href="https://www.github.com/darshreddy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );

  const UploadScreen = () => (
    <div className="flex-grow flex items-center justify-center">
      <Card className="w-full max-w-lg mx-4">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-center">Generate Your Portfolio</CardTitle>
          <CardDescription className="text-center">
            Upload your resume (PDF, DOCX) to instantly create a beautiful, shareable portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="resume-upload" className="sr-only">Upload Resume</label>
              <Input id="resume-upload" type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" className="file:text-primary-foreground" />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <UploadCloud className="mr-2 h-4 w-4" />
                  Generate Portfolio
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
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
        <Section title="Projects" icon={Lightbulb}>
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
      <Header />
      <main className="flex-grow flex flex-col">
        {resumeData ? <PortfolioScreen data={resumeData} /> : <UploadScreen />}
      </main>
      <Footer />
    </div>
  );
}
