'use server';

/**
 * @fileOverview A flow to suggest an additional book to the user based on their purchase history.
 *
 * - suggestAdditionalBook - A function that suggests an additional book.
 * - SuggestAdditionalBookInput - The input type for the suggestAdditionalBook function.
 * - SuggestAdditionalBookOutput - The return type for the suggestAdditionalBook function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestAdditionalBookInputSchema = z.object({
  availableBooks: z
    .array(z.string())
    .describe('List of available books for the AI to choose from.'),
  interests: z
    .string()
    .optional()
    .describe('The user interests separated by commas.'),
});
export type SuggestAdditionalBookInput = z.infer<
  typeof SuggestAdditionalBookInputSchema
>;

const SuggestAdditionalBookOutputSchema = z.object({
  suggestedBook: z.string().describe('The title of the suggested book, which must be from the available books list.'),
  reason: z
    .string()
    .describe('The reason why this specific book is a good recommendation for the user based on their interests.'),
});
export type SuggestAdditionalBookOutput = z.infer<
  typeof SuggestAdditionalBookOutputSchema
>;

export async function suggestAdditionalBook(
  input: SuggestAdditionalBookInput
): Promise<SuggestAdditionalBookOutput> {
  return suggestAdditionalBookFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestAdditionalBookPrompt',
  input: {schema: SuggestAdditionalBookInputSchema},
  output: {schema: SuggestAdditionalBookOutputSchema},
  prompt: `You are a book recommendation expert for a specific book package. Your task is to recommend ONE book from the list of available books that best matches the user's interests.

You MUST choose one of the books from the 'Available Books' list. Do not suggest any book that is not on this list.

Available Books:
{{#each availableBooks}}
- {{{this}}}
{{/each}}

User Interests: {{interests}}

Based on the user's interests, select the most relevant book from the list and explain why it's a good fit for them.`,
});

const suggestAdditionalBookFlow = ai.defineFlow(
  {
    name: 'suggestAdditionalBookFlow',
    inputSchema: SuggestAdditionalBookInputSchema,
    outputSchema: SuggestAdditionalBookOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
