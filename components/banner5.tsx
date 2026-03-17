"use client";

import { Cookie } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const COOKIE_KEY = "intec_cookie_consent";

const Banner5 = ({ className }: { className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-4 left-0 right-0 z-[100] mx-auto max-w-5xl px-4",
        className,
      )}
    >
      <div className="w-full rounded-xl border-2 border-border bg-background/90 p-4 shadow-lg backdrop-blur-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Cookie className="mt-0.5 size-5 shrink-0 text-primary" />
            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-semibold">We use cookies</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We use cookies to enhance your experience, analyze site traffic,
                and for marketing. By clicking &quot;Accept&quot;, you consent
                to our use of cookies.{" "}
                <a href="/privacy" className="underline hover:text-foreground transition-colors">
                  Learn more
                </a>
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 sm:flex-none sm:w-auto"
              onClick={handleDecline}
            >
              Decline
            </Button>
            <Button
              size="sm"
              className="flex-1 sm:flex-none sm:w-auto"
              onClick={handleAccept}
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Banner5 };
