/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Euro, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Currency = 'EUR' | 'TRY';

interface CurrencyInfo {
  code: Currency;
  symbol: string;
  icon: React.ReactNode;
  names: {
    tr: string;
    en: string;
  };
  flag?: string;
  flag2x?: string;
}

const currencies: Record<Currency, CurrencyInfo> = {
  EUR: {
    code: 'EUR',
    symbol: '€',
    icon: <Euro className="w-4 h-4" />,
    flag: 'https://flagcdn.com/w40/eu.png',
    flag2x: 'https://flagcdn.com/w80/eu.png',
    names: {
      tr: 'Euro',
      en: 'Euro'
    }
  },
  TRY: {
    code: 'TRY',
    symbol: '₺',
    icon: <TrendingUp className="w-4 h-4" />,
    flag: 'https://flagcdn.com/w40/tr.png',
    flag2x: 'https://flagcdn.com/w80/tr.png',
    names: {
      tr: 'Türk Lirası',
      en: 'Turkish Lira'
    }
  }
};

const exchangeRates = {
  EUR: 1,
  TRY: 51.9
};

export default function CurrencySwitcher({ paramsLocale, mobileHiding }: { paramsLocale: string, mobileHiding?: boolean }) {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('EUR');
  const [locale, setLocale] = useState(paramsLocale);

  useEffect(() => {
    const path = window.location.pathname;
    const detectedLocale = path.startsWith('/tr') ? 'tr' : 'en';
    setLocale(detectedLocale);

    const savedCurrency = localStorage.getItem('preferredCurrency') as Currency;
    if (savedCurrency && currencies[savedCurrency]) {
      setSelectedCurrency(savedCurrency);
    } else {
      setSelectedCurrency('EUR');
      localStorage.setItem('preferredCurrency', 'EUR');
    }
  }, []);

  const handleCurrencyChange = (currency: Currency) => {
    setSelectedCurrency(currency);
    localStorage.setItem('preferredCurrency', currency);

    window.dispatchEvent(new CustomEvent('currencyChange', {
      detail: {
        currency,
        symbol: currencies[currency].symbol,
        rate: exchangeRates[currency]
      }
    }));
  };

  const currentCurrency = currencies[selectedCurrency];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`gap-2 mr-0 min-w-20 ${mobileHiding ? 'hidden md:flex' : 'flex flex-1'}`}
        >
          <span className="font-semibold text-base">
            {currentCurrency.symbol}
          </span>
          <span className="hidden sm:inline text-sm font-medium">
            {currentCurrency.code}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-50">
        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
          {locale === 'tr' ? 'Para Birimi Seçin' : 'Select Currency'}
        </div>
        {Object.values(currencies).map((currency) => (
          <DropdownMenuItem
            key={currency.code}
            onClick={() => handleCurrencyChange(currency.code)}
            className={`cursor-pointer ${selectedCurrency === currency.code ? 'bg-accent' : ''
              }`}
          >
            <div className="flex items-center justify-between w-full gap-3">
              <div className="flex items-center gap-3">
                {currency.flag ? (
                  <Image
                    src={currency.flag}
                    alt={currency.code}
                    width={20}
                    height={16}
                    className="rounded w-5 h-4"
                  />
                ) : (
                  <div className="w-5 h-5 flex items-center justify-center">
                    {currency.icon}
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="font-medium text-sm">
                    {currency.code}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {currency.names[locale]}
                  </span>
                </div>
              </div>
              <span className="font-bold text-base">
                {currency.symbol}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function useCurrency() {
  const [currency, setCurrency] = useState<Currency>('EUR');
  const [symbol, setSymbol] = useState('€');
  const [rate, setRate] = useState(1);

  useEffect(() => {
    const savedCurrency = (localStorage.getItem('preferredCurrency') as Currency) || 'EUR';

    if (!localStorage.getItem('preferredCurrency')) {
      localStorage.setItem('preferredCurrency', 'EUR');
    }

    setCurrency(savedCurrency);
    setSymbol(currencies[savedCurrency].symbol);
    setRate(exchangeRates[savedCurrency]);

    const handleCurrencyChange = (event: CustomEvent) => {
      setCurrency(event.detail.currency);
      setSymbol(event.detail.symbol);
      setRate(event.detail.rate);
    };

    window.addEventListener('currencyChange', handleCurrencyChange as EventListener);
    return () => {
      window.removeEventListener('currencyChange', handleCurrencyChange as EventListener);
    };
  }, []);

  const formatPrice = (price: number) => {
    const convertedPrice = price * rate;

    if (convertedPrice % 1 === 0) {
      return `${symbol}${convertedPrice}`;
    }

    const formatted = convertedPrice.toFixed(1).replace(/\.?0+$/, '');
    return `${symbol}${formatted}`;
  };

  return { currency, symbol, rate, formatPrice };
}
