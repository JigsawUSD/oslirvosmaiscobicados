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
  purchasedBooks: z
    .array(z.string())
    .describe('List of books the user has already purchased.'),
  interests: z
    .string()
    .optional()
    .describe('The user interests separated by commas.'),
});
export type SuggestAdditionalBookInput = z.infer<
  typeof SuggestAdditionalBookInputSchema
>;

const SuggestAdditionalBookOutputSchema = z.object({
  suggestedBook: z.string().describe('The title of the suggested book, which must be a real, well-known book.'),
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
  prompt: `You are a book recommendation expert. Based on the books the user has already purchased and their described interests, suggest one additional book they might like.

The suggested book must be a real, popular, and well-regarded book. Do not invent a book title.

Make sure the suggested book is different from the purchased books.

Purchased Books: {{purchasedBooks}}
User Interests: {{interests}}

Suggest a book and explain why the user might like it, connecting it to their stated interests.`,
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
