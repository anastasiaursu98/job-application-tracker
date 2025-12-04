"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnOverlayClick?: boolean;
  className?: string;
  contentClassName?: string;
  maxWidth?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  closeOnOverlayClick = true,
  className,
  contentClassName,
  maxWidth = "calc(100%-2rem)",
}: ModalProps) => {
  const mounted = typeof window !== "undefined";

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-in fade-in-0",
        className
      )}
      onClick={handleOverlayClick}
    >
      {/* Modal Content */}
      <div
        className={cn(
          "relative z-50 w-full max-h-[calc(100%-2rem)] bg-background rounded-lg border shadow-lg animate-in fade-in-0 zoom-in-95 duration-200 flex flex-col",
          contentClassName
        )}
        style={{ maxWidth }}
      >
        {children}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
