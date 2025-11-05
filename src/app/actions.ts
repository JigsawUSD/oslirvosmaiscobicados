"use server";

import { suggestAdditionalBook } from "@/ai/flows/suggest-additional-book";
import { books } from "@/lib/data";

export async function getAISuggestion(interests: string) {
  const availableBookTitles = books.map((book) => book.title);

  const suggestion = await suggestAdditionalBook({
    availableBooks: availableBookTitles,
    interests: interests,
  });

  return suggestion;
}
