'use server';
/**
 * @fileOverview An AI agent that suggests optimal layouts for A4 pages in logistics proposals.
 *
 * - aiLayoutOptimizer - A function that optimizes the layout of a given A4 page.
 * - AILayoutOptimizerInput - The input type for the aiLayoutOptimizer function.
 * - AILayoutOptimizerOutput - The return type for the aiLayoutOptimizer function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AILayoutOptimizerInputSchema = z.object({
  proposalText: z.string().describe('The full text content for the current A4 page.'),
  attachedImages: z.array(
    z.string().describe(
      "A data URI for an image. Expected format: 'data:<mimetype>;base64,<encoded_data>'"
    )
  ).optional().describe('An array of images to be considered for placement on this page.'),
  pageNumber: z.number().int().positive().describe('The current page number (1-indexed).'),
  totalPageCount: z.number().int().positive().describe('The total number of pages in the document.'),
  documentType: z.string().describe('The type of document, e.g., "logistics proposal".'),
  designGoals: z.array(z.string()).optional().describe('Specific design goals or constraints for the layout, e.g., ["emphasize section A", "image heavy page"].'),
});
export type AILayoutOptimizerInput = z.infer<typeof AILayoutOptimizerInputSchema>;

const AILayoutOptimizerOutputSchema = z.object({
  suggestedLayoutDescription: z.string().describe('A textual description of the suggested layout.'),
  pageElements: z.array(
    z.object({
      type: z.enum(['text', 'image']).describe('The type of content element.'),
      content: z.string().describe('The text content or the data URI of the image.'),
      placement: z.string().describe('Description of where the element should be placed on the A4 page (e.g., "top-left", "full-width-center", "below-image").'),
      size: z.string().optional().describe('Suggested size or aspect ratio for the element (e.g., "large", "half-page-width", "2:3 aspect ratio").'),
    })
  ).describe('An array describing the placement and content of each element on the page.'),
  layoutReasoning: z.string().describe('Explanation of why this layout was chosen, considering design principles and input content.'),
});
export type AILayoutOptimizerOutput = z.infer<typeof AILayoutOptimizerOutputSchema>;

export async function aiLayoutOptimizer(input: AILayoutOptimizerInput): Promise<AILayoutOptimizerOutput> {
  return aiLayoutOptimizerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiLayoutOptimizerPrompt',
  input: { schema: AILayoutOptimizerInputSchema },
  output: { schema: AILayoutOptimizerOutputSchema },
  prompt: `You are an expert layout designer specializing in professional logistics proposals for A4 pages. Your goal is to suggest an optimal visual layout for a given page, ensuring readability, professional aesthetics, and effective communication, particularly for the 'Envíos DosRuedas' brand.

The document type is: {{{documentType}}}

This is page {{{pageNumber}}} out of {{{totalPageCount}}}.

Here is the text content for this page:
{{{proposalText}}}

{{#if attachedImages.length}}
Images attached for this page:
{{#each attachedImages}}
  Image {{add @index 1}}: {{media url=this}}
{{/each}}
{{/if}}

{{#if designGoals.length}}
Specific design goals for this page:
{{#each designGoals}}
  - {{{this}}}
{{/each}}
{{/if}}

Considering the text, any attached images, and the context of an A4 page within a logistics proposal, generate a JSON object representing the optimal layout. Focus on clear hierarchy, visual balance, and ease of reading. For 'Envíos DosRuedas', prioritize a sleek, modern, and professional look, with clear emphasis on key information.

The output JSON MUST strictly conform to the AILayoutOptimizerOutputSchema.`,
});

const aiLayoutOptimizerFlow = ai.defineFlow(
  {
    name: 'aiLayoutOptimizerFlow',
    inputSchema: AILayoutOptimizerInputSchema,
    outputSchema: AILayoutOptimizerOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate layout optimization output.');
    }
    return output;
  }
);
