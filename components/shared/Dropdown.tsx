"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type DropdownOption = {
  key: number | string;
  label: string;
  value: string;
};

type DropdownProps = {
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  id?: string;
};

export function Dropdown({
  value,
  onChange,
  options,
  placeholder = "Select an option",
  disabled = false,
  error = false,
  id,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll focused item into view
  useEffect(() => {
    if (focusedIndex >= 0 && listRef.current) {
      const item = listRef.current.children[focusedIndex] as HTMLElement;
      item?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [focusedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else if (focusedIndex >= 0) {
          onChange(options[focusedIndex].value);
          setIsOpen(false);
          setFocusedIndex(-1);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex((prev) =>
            prev < options.length - 1 ? prev + 1 : prev
          );
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        }
        break;
      case "Home":
        e.preventDefault();
        if (isOpen) setFocusedIndex(0);
        break;
      case "End":
        e.preventDefault();
        if (isOpen) setFocusedIndex(options.length - 1);
        break;
    }
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        id={id}
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={id}
        className={cn(
          "w-full px-3 py-2.5 text-left border rounded-lg bg-white text-sm flex items-center justify-between transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 hover:border-gray-400",
          disabled && "opacity-50 cursor-not-allowed bg-gray-50",
          !disabled && "hover:shadow-sm"
        )}
      >
        <span
          className={
            selectedOption ? "text-gray-900 font-medium" : "text-gray-500"
          }
        >
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-gray-400 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <ul
          ref={listRef}
          role="listbox"
          aria-activedescendant={
            focusedIndex >= 0
              ? `option-${options[focusedIndex].key}`
              : undefined
          }
          className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 overflow-auto animate-fade-in"
        >
          {options.map((option, index) => (
            <li
              key={option.key}
              id={`option-${option.key}`}
              role="option"
              aria-selected={option.value === value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
                setFocusedIndex(-1);
              }}
              onMouseEnter={() => setFocusedIndex(index)}
              className={cn(
                "px-3 py-2.5 text-sm cursor-pointer transition-all duration-150",
                "first:rounded-t-lg last:rounded-b-lg",
                option.value === value &&
                  "bg-primary/10 font-semibold text-primary",
                focusedIndex === index && "bg-gray-100",
                option.value === value &&
                  focusedIndex === index &&
                  "bg-primary/20"
              )}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
