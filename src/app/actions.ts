"use server";

import { suggestAdditionalBook } from "@/ai/flows/suggest-additional-book";
import { narratePresellStory } from "@/ai/flows/narrate-presell-story";
import { books } from "@/lib/data";

export async function getAISuggestion(interests: string) {
  const availableBookTitles = books.map((book) => book.title);

  const suggestion = await suggestAdditionalBook({
    availableBooks: availableBookTitles,
    interests: interests,
  });

  return suggestion;
}

export async function getNarratedStory(story: string) {
    const narration = await narratePresellStory({ story });
    return narration;
}
