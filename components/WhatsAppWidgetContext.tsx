"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface WhatsAppWidgetContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const WhatsAppWidgetContext = createContext<WhatsAppWidgetContextValue | null>(
  null
);

export function WhatsAppWidgetProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <WhatsAppWidgetContext.Provider value={{ open, setOpen }}>
      {children}
    </WhatsAppWidgetContext.Provider>
  );
}

export function useWhatsAppWidget() {
  const context = useContext(WhatsAppWidgetContext);
  if (!context) {
    throw new Error(
      "useWhatsAppWidget must be used within a WhatsAppWidgetProvider"
    );
  }
  return context;
}
