import { Button } from "@/components/ui/button";

interface JobFormActionsProps {
    onCancel: () => void;
    submitLabel?: string;
    cancelLabel?: string;
    isSubmitting?: boolean;
}

export function JobFormActions({
    onCancel,
    submitLabel = "Add Job Application",
    cancelLabel = "Cancel",
    isSubmitting = false,
}: JobFormActionsProps) {
    return (
        <footer className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                className="min-w-[100px]"
                disabled={isSubmitting}
            >
                {cancelLabel}
            </Button>
            <Button
                type="submit"
                className="min-w-[140px] bg-gradient-primary hover:opacity-90 transition-opacity"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Submitting..." : submitLabel}
            </Button>
        </footer>
    );
}
