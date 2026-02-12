'use client';

import { useCurrency } from "./currency-switcher";


interface PriceDisplayProps {
  amount: number;
  className?: string;
  showCode?: boolean;
}

export function PriceDisplay({ amount, className = '', showCode = false }: PriceDisplayProps) {
  const { formatPrice, currency } = useCurrency();

  return (
    <span className={className}>
      {formatPrice(amount)}
      {showCode && <span className="text-muted-foreground ml-1">{currency}</span>}
    </span>
  );
}
