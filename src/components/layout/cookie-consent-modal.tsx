"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('common');

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) {
      setTimeout(() => {
        setIsOpen(true);
      }, 800);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsOpen(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/25 backdrop-blur-[2px] sm:items-center"
        >
          <Card className="absolute left-0 bottom-4 mx-4 w-auto md:w-full max-w-md rounded-2xl shadow-xl">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Cookie className="h-5 w-5" />
              </div>
              <CardTitle>{t("cookiePolicy")}</CardTitle>
            </CardHeader>

            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              {t("cookieConsent")}
            </CardContent>

            <CardFooter className="flex flex-col gap-2 sm:flex-row sm:justify-end">
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={rejectCookies}
              >
                {t("decline")}
              </Button>

              <Button
                className="w-full sm:w-auto"
                onClick={acceptCookies}
              >
                {t("accept")}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
