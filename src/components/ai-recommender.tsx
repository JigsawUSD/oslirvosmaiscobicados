"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getAISuggestion } from "@/app/actions";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2, Wand2 } from "lucide-react";
import type { SuggestAdditionalBookOutput } from "@/ai/flows/suggest-additional-book";

const formSchema = z.object({
  interests: z.string().min(3, {
    message: "Por favor, descreva seus interesses.",
  }),
});

export default function AiRecommender() {
  const [suggestion, setSuggestion] = useState<SuggestAdditionalBookOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestion(null);
    try {
      const result = await getAISuggestion(values.interests);
      setSuggestion(result);
    } catch (error) {
      console.error("Error getting AI suggestion:", error);
      // Here you could use a toast to show an error message to the user
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-recommender" className="py-12 sm:py-20 bg-white dark:bg-card">
      <div className="container max-w-3xl">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Wand2 className="h-8 w-8 text-primary" />
              <div>
                <CardTitle className="text-2xl text-primary">Não sabe o que ler a seguir?</CardTitle>
                <CardDescription>Use nossa IA para obter uma recomendação de livro personalizada!</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quais são seus interesses? (ex: finanças, produtividade, ficção científica)</FormLabel>
                      <FormControl>
                        <Input placeholder="Descreva aqui..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sugerindo...
                    </>
                  ) : (
                    "Obter Sugestão"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
          {suggestion && (
            <CardFooter>
              <div className="mt-6 p-4 bg-background rounded-lg border w-full">
                <h4 className="font-bold text-lg">Sugestão para você:</h4>
                <p className="font-semibold text-primary text-xl mt-2">{suggestion.suggestedBook}</p>
                <p className="text-muted-foreground mt-2">{suggestion.reason}</p>
              </div>
            </CardFooter>
          )}
        </Card>
      </div>
    </section>
  );
}
