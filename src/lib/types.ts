import type { ExtractResumeDataOutput } from '@/ai/flows/extract-resume-data';

export type ResumeData = ExtractResumeDataOutput;
export type Experience = ExtractResumeDataOutput['experience'][0];
export type Education = ExtractResumeDataOutput['education'][0];
export type Project = ExtractResumeDataOutput['projects'][0];
