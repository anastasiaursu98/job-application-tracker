"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

export type CheckboxOption = {
  key: string;
  label: string;
  value: string;
};

type DropdownCheckboxProps = {
  label: string;
  options: CheckboxOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  id?: string;
  className?: string;
};

export function DropdownCheckbox({
  label,
  options,
  selectedValues,
  onChange,
  placeholder = "Select options",
  disabled = false,
  id,
  className,
}: DropdownCheckboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  // Set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update dropdown position when opened
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleToggle = (value: string) => {
    if (value === "all") {
      // Toggle all options
      if (
        selectedValues.length ===
        options.filter((opt) => opt.value !== "all").length
      ) {
        onChange([]);
      } else {
        onChange(
          options.filter((opt) => opt.value !== "all").map((opt) => opt.value)
        );
      }
    } else {
      // Toggle individual option
      if (selectedValues.includes(value)) {
        onChange(selectedValues.filter((v) => v !== value));
      } else {
        onChange([...selectedValues, value]);
      }
    }
  };

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      {/* Label */}
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1.5"
      >
        {label}
      </label>

      {/* Dropdown Button */}
      <button
        ref={buttonRef}
        id={id}
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={cn(
          "w-full px-3 py-2 text-left border rounded-md bg-white text-sm flex items-center justify-between transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
          "border-gray-300 hover:border-gray-400",
          disabled && "opacity-50 cursor-not-allowed bg-gray-50",
          !disabled && "hover:bg-gray-50"
        )}
      >
        <span
          className={
            selectedValues.length > 0 ? "text-gray-900" : "text-gray-500"
          }
        >
          {selectedValues.length > 0 ? selectedValues.join(", ") : placeholder}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-gray-400 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {mounted &&
        isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            className="fixed bg-white border border-gray-200 rounded-md shadow-lg animate-fade-in"
            style={{
              top: `${dropdownPosition.top + 4}px`,
              left: `${dropdownPosition.left}px`,
              width: `${dropdownPosition.width}px`,
              zIndex: 9999,
              position: "fixed",
            }}
          >
            <ul className="py-1 max-h-60 overflow-auto">
              {options.map((option) => {
                const isChecked = selectedValues.includes(option.value);

                return (
                  <li
                    key={option.key}
                    onClick={() => handleToggle(option.value)}
                    className={cn(
                      "px-3 py-2 text-sm cursor-pointer transition-colors duration-150 flex items-center gap-2.5",
                      "hover:bg-gray-50"
                    )}
                  >
                    <Checkbox
                      checked={isChecked}
                      onCheckedChange={() => handleToggle(option.value)}
                      className="pointer-events-none"
                    />
                    <span className="text-gray-700 select-none">
                      {option.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>,
          document.body
        )}
    </div>
  );
}
