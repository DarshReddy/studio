
'use server';
/**
 * @fileOverview A flow to generate an image for a project based on its description.
 *
 * - generateProjectImage - A function that handles the image generation.
 * - GenerateProjectImageOutput - The return type for the generateProjectImage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateProjectImageOutputSchema = z.object({
  imageUrl: z.string().describe("The data URI of the generated image."),
});

export type GenerateProjectImageOutput = z.infer<typeof GenerateProjectImageOutputSchema>;

export async function generateProjectImage(description: string): Promise<GenerateProjectImageOutput> {
  return generateProjectImageFlow(description);
}

const generateProjectImageFlow = ai.defineFlow(
  {
    name: 'generateProjectImageFlow',
    inputSchema: z.string(),
    outputSchema: GenerateProjectImageOutputSchema,
  },
  async (description) => {
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: `Generate a visually interesting, abstract, professional tech-themed background image that represents the following software project concept: "${description}". The style should be modern, sleek, and suitable for a professional portfolio. Use a dark theme with vibrant accent colors. Do not include any text in the image.`,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media.url) {
      throw new Error('Image generation failed.');
    }

    return {
      imageUrl: media.url,
    };
  }
);
