'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type EnquiryModalContextType = {
  isOpen: boolean;
  openEnquiryModal: (presetSubject?: string) => void;
  closeEnquiryModal: () => void;
  presetSubject: string | undefined;
};

const EnquiryModalContext = createContext<EnquiryModalContextType | null>(null);

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetSubject, setPresetSubject] = useState<string | undefined>(undefined);

  const openEnquiryModal = useCallback((subject?: string) => {
    setPresetSubject(subject);
    setIsOpen(true);
  }, []);

  const closeEnquiryModal = useCallback(() => {
    setIsOpen(false);
    setPresetSubject(undefined);
  }, []);

  return (
    <EnquiryModalContext.Provider
      value={{ isOpen, openEnquiryModal, closeEnquiryModal, presetSubject }}
    >
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx) {
    throw new Error('useEnquiryModal must be used within EnquiryModalProvider');
  }
  return ctx;
}
