// src/ai/flows/extract-resume-data.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for extracting key information from a resume file using AI.
 *
 * - `extractResumeData`: A function that takes a resume file as input and returns extracted information.
 * - `ExtractResumeDataInput`: The input type for the `extractResumeData` function, which is a data URI of the resume file.
 * - `ExtractResumeDataOutput`: The output type for the `extractResumeData` function, which contains the extracted resume data.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExtractResumeDataInputSchema = z.object({
  resumeDataUri: z
    .string()
    .describe(
      "A resume file (PDF, DOCX) as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ExtractResumeDataInput = z.infer<typeof ExtractResumeDataInputSchema>;

const ExtractResumeDataOutputSchema = z.object({
  experience: z.array(z.object({
    title: z.string().describe('The job title.'),
    company: z.string().describe('The company name.'),
    dates: z.string().describe('The start and end dates of the job.'),
    description: z.string().describe('A description of the job responsibilities.'),
  })).describe('A list of work experiences.'),
  education: z.array(z.object({
    institution: z.string().describe('The name of the educational institution.'),
    degree: z.string().describe('The degree obtained.'),
    dates: z.string().describe('The start and end dates of the education.'),
    description: z.string().describe('A description of the course of study.'),
  })).describe('A list of educational experiences.'),
  skills: z.array(z.string()).describe('A list of skills.'),
  projects: z.array(z.object({
    name: z.string().describe('The name of the project.'),
    description: z.string().describe('A description of the project.'),
    link: z.string().describe('A link to the project.'),
  })).describe('A list of projects.'),
});
export type ExtractResumeDataOutput = z.infer<typeof ExtractResumeDataOutputSchema>;

export async function extractResumeData(input: ExtractResumeDataInput): Promise<ExtractResumeDataOutput> {
  return extractResumeDataFlow(input);
}

const extractResumeDataPrompt = ai.definePrompt({
  name: 'extractResumeDataPrompt',
  input: {schema: ExtractResumeDataInputSchema},
  output: {schema: ExtractResumeDataOutputSchema},
  prompt: `You are a resume parsing expert. You will extract key information from the resume provided, including work experience, education, skills, and projects.  The resume is provided as a data URI.

Resume:
{{media url=resumeDataUri}}

Extract the following information:

*   **Experience** (job title, company, dates, description)
*   **Education** (institution, degree, dates, description)
*   **Skills** (list of skills)
*   **Projects** (name, description, link)

Return the information in JSON format.
`,
});

const extractResumeDataFlow = ai.defineFlow(
  {
    name: 'extractResumeDataFlow',
    inputSchema: ExtractResumeDataInputSchema,
    outputSchema: ExtractResumeDataOutputSchema,
  },
  async input => {
    const {output} = await extractResumeDataPrompt(input);
    return output!;
  }
);
