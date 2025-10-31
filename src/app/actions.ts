"use server";

import { suggestAdditionalBook } from "@/ai/flows/suggest-additional-book";
import { books } from "@/lib/data";

export async function getAISuggestion(interests: string) {
  const purchasedBookTitles = books.map((book) => book.title);

  const suggestion = await suggestAdditionalBook({
    purchasedBooks: purchasedBookTitles,
    interests: interests,
  });

  return suggestion;
}
