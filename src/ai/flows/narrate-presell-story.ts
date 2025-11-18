'use server';
/**
 * @fileOverview A flow to narrate a given text using Text-to-Speech.
 *
 * - narratePresellStory - A function that converts text to speech.
 * - NarratePresellStoryInput - The input type for the narratePresellStory function.
 * - NarratePresellStoryOutput - The return type for the narratePresellStory function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import wav from 'wav';

// Define the input schema for the flow
const NarratePresellStoryInputSchema = z.object({
  story: z.string().describe('The text content to be converted to speech.'),
});
export type NarratePresellStoryInput = z.infer<
  typeof NarratePresellStoryInputSchema
>;

// Define the output schema for the flow
const NarratePresellStoryOutputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      "The generated audio as a data URI in WAV format. Expected format: 'data:audio/wav;base64,<encoded_data>'."
    ),
});
export type NarratePresellStoryOutput = z.infer<
  typeof NarratePresellStoryOutputSchema
>;

// Export a wrapper function to be called from the frontend
export async function narratePresellStory(
  input: NarratePresellStoryInput
): Promise<NarratePresellStoryOutput> {
  return narratePresellStoryFlow(input);
}

// Helper function to convert PCM audio buffer to WAV base64 string
async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    const bufs: any[] = [];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}

// Define the Genkit flow
const narratePresellStoryFlow = ai.defineFlow(
  {
    name: 'narratePresellStoryFlow',
    inputSchema: NarratePresellStoryInputSchema,
    outputSchema: NarratePresellStoryOutputSchema,
  },
  async ({ story }) => {
    const { media } = await ai.generate({
      model: googleAI.model('gemini-2.5-flash-preview-tts'),
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Algenib' },
          },
        },
      },
      prompt: story,
    });

    if (!media?.url) {
      throw new Error('Audio generation failed: no media returned.');
    }

    // Extract base64 PCM data from the data URI
    const pcmBase64 = media.url.substring(media.url.indexOf(',') + 1);
    const audioBuffer = Buffer.from(pcmBase64, 'base64');

    // Convert PCM to WAV
    const wavBase64 = await toWav(audioBuffer);

    return {
      audioDataUri: `data:audio/wav;base64,${wavBase64}`,
    };
  }
);
