"use client";

import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type DatePickerProps = {
    value?: Date | string;
    onChange: (date: Date | null) => void;
    placeholder?: string;
    error?: boolean;
    disabled?: boolean;
    format?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD';
    minDate?: Date;
    maxDate?: Date;
};

export function DatePicker({
    value,
    onChange,
    placeholder = "Select a date",
    error,
    disabled,
    format = 'DD/MM/YYYY',
    minDate,
    maxDate,
}: DatePickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const datePickerRef = useRef<HTMLDivElement>(null);

    // Parse value
    const selectedDate = value instanceof Date ? value : value ? new Date(value) : null;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                datePickerRef.current &&
                !datePickerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Format date pentru display
    const formatDate = (date: Date): string => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        switch (format) {
            case 'MM/DD/YYYY':
                return `${month}/${day}/${year}`;
            case 'YYYY-MM-DD':
                return `${year}-${month}-${day}`;
            default:
                return `${day}/${month}/${year}`;
        }
    };

    // Generează zilele din calendar
    const generateCalendarDays = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        // Prima zi a lunii
        const firstDay = new Date(year, month, 1);
        // Ultima zi a lunii
        const lastDay = new Date(year, month + 1, 0);

        // Ziua săptămânii pentru prima zi (0 = Duminică, 1 = Luni, etc.)
        let startingDayOfWeek = firstDay.getDay();
        // Ajustăm să înceapă de la Luni (0 = Luni, 6 = Duminică)
        startingDayOfWeek = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1;

        const days: (Date | null)[] = [];

        // Adaugă zilele din luna precedentă
        for (let i = 0; i < startingDayOfWeek; i++) {
            const prevDate = new Date(year, month, -startingDayOfWeek + i + 1);
            days.push(prevDate);
        }

        // Adaugă zilele lunii curente
        for (let day = 1; day <= lastDay.getDate(); day++) {
            days.push(new Date(year, month, day));
        }

        // Adaugă zilele din luna următoare să completăm grid-ul
        const remainingDays = 42 - days.length; // 6 săptămâni x 7 zile = 42
        for (let i = 1; i <= remainingDays; i++) {
            days.push(new Date(year, month + 1, i));
        }

        return days;
    };

    const handleDateSelect = (date: Date) => {
        onChange(date);
        setIsOpen(false);
    };

    const isDateDisabled = (date: Date): boolean => {
        if (minDate && date < minDate) return true;
        if (maxDate && date > maxDate) return true;
        return false;
    };

    const isToday = (date: Date): boolean => {
        const today = new Date();
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    };

    const isSelected = (date: Date): boolean => {
        if (!selectedDate) return false;
        return (
            date.getDate() === selectedDate.getDate() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getFullYear() === selectedDate.getFullYear()
        );
    };

    const isCurrentMonth = (date: Date): boolean => {
        return date.getMonth() === currentMonth.getMonth();
    };

    const goToPreviousMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const goToNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return (
        <div className="relative" ref={datePickerRef}>
            {/* Input Field */}
            <button
                type="button"
                onClick={() => !disabled && setIsOpen(!isOpen)}
                className={cn(
                    "w-full px-3 py-2 text-left border border-solid rounded-md bg-white text-sm flex items-center justify-between gap-2",
                    error
                        ? "border-destructive focus:outline-none focus:ring-2 focus:ring-red-500/20"
                        : "border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500/50",
                    disabled && "opacity-50 cursor-not-allowed"
                )}
                disabled={disabled}
            >
                <div className="flex items-center gap-2 flex-1">
                    <Calendar className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className={!selectedDate ? "text-gray-500" : "text-black"}>
                        {selectedDate ? formatDate(selectedDate) : placeholder}
                    </span>
                </div>
            </button>

            {/* Calendar Popup */}
            {isOpen && (
                <div className="absolute z-50 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-[280px]">
                    {/* Header - Month Navigation */}
                    <div className="flex items-center justify-between mb-3">
                        <button
                            type="button"
                            onClick={goToPreviousMonth}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                        >
                            <ChevronLeft className="h-5 w-5 text-gray-600" />
                        </button>

                        <div className="font-semibold text-sm text-gray-900">
                            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </div>

                        <button
                            type="button"
                            onClick={goToNextMonth}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                        >
                            <ChevronRight className="h-5 w-5 text-gray-600" />
                        </button>
                    </div>

                    {/* Week Days */}
                    <div className="grid grid-cols-7 gap-1 mb-2">
                        {weekDays.map((day) => (
                            <div
                                key={day}
                                className="text-center text-xs font-medium text-gray-500 py-1"
                            >
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1">
                        {generateCalendarDays().map((date, index) => {
                            if (!date) return <div key={index} />;

                            const disabled = isDateDisabled(date);
                            const selected = isSelected(date);
                            const today = isToday(date);
                            const currentMonthDay = isCurrentMonth(date);

                            return (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => !disabled && handleDateSelect(date)}
                                    disabled={disabled}
                                    className={cn(
                                        "h-8 w-8 text-sm rounded-md transition-all",
                                        "hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400",
                                        !currentMonthDay && "text-gray-300",
                                        currentMonthDay && "text-gray-900",
                                        selected && "bg-blue-600 text-white hover:bg-blue-700 font-semibold",
                                        today && !selected && "border border-blue-500 font-semibold",
                                        disabled && "opacity-30 cursor-not-allowed hover:bg-transparent"
                                    )}
                                >
                                    {date.getDate()}
                                </button>
                            );
                        })}
                    </div>

                    {/* Footer - Quick Actions */}
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200">
                        <button
                            type="button"
                            onClick={() => handleDateSelect(new Date())}
                            className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                        >
                            Today
                        </button>
                        {selectedDate && (
                            <button
                                type="button"
                                onClick={() => {
                                    onChange(null);
                                    setIsOpen(false);
                                }}
                                className="text-xs text-gray-500 hover:text-gray-700"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
