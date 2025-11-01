"use client";

import { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';

const names = [
  "Miguel", "Helena", "Arthur", "Alice", "Heitor", "Laura", "Bernardo", "Manuela", 
  "Davi", "Valentina", "Théo", "Sophia", "Lorenzo", "Isabella", "Gabriel", "Heloísa",
  "Pedro", "Luiza", "Benjamin", "Júlia", "Matheus", "Maria Luiza", "Lucas", "Lorena"
];

const cities = [
  "São Paulo-SP", "Rio de Janeiro-RJ", "Belo Horizonte-MG", "Salvador-BA", "Fortaleza-CE", 
  "Curitiba-PR", "Manaus-AM", "Recife-PE", "Porto Alegre-RS", "Brasília-DF", "Goiânia-GO",
  "Belém-PA", "São Luís-MA", "Maceió-AL", "Campo Grande-MS", "Teresina-PI", "João Pessoa-PB",
  "Natal-RN", "Aracaju-SE", "Florianópolis-SC", "Vitória-ES", "Cuiabá-MT"
];

const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

export function SocialProof() {
  const [isVisible, setIsVisible] = useState(false);
  const [purchase, setPurchase] = useState({ name: '', city: '' });

  useEffect(() => {
    const showRandomPurchase = () => {
      const name = getRandomItem(names);
      const city = getRandomItem(cities);
      setPurchase({ name, city });
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Notification stays visible for 5 seconds
    };

    // Show first notification after a short delay
    const initialTimeoutId = setTimeout(showRandomPurchase, 7000);

    const intervalId = setInterval(() => {
      // Don't show a new notification if one is already visible
      if (!isVisible) {
        showRandomPurchase();
      }
    }, Math.random() * (15000 - 8000) + 8000); // Show new notification every 8-15 seconds

    return () => {
      clearTimeout(initialTimeoutId);
      clearInterval(intervalId);
    };
  }, [isVisible]); // Rerun effect logic when isVisible changes

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ease-in-out
                  ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
    >
      <div className="bg-card shadow-lg rounded-lg p-4 flex items-center gap-4 border max-w-sm">
        <div className="p-2 bg-primary/10 rounded-full">
          <ShoppingCart className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="font-bold text-sm text-foreground">
            {purchase.name} de {purchase.city}
          </p>
          <p className="text-xs text-muted-foreground">acabou de adquirir o pacote!</p>
        </div>
      </div>
    </div>
  );
}
