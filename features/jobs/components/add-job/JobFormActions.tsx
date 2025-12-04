import { Button } from "@/components/ui/button";

interface JobFormActionsProps {
  onCancel: () => void;
  isSubmitting?: boolean;
  isEdit: boolean | undefined;
}

export function JobFormActions({
  onCancel,
  isSubmitting = false,
  isEdit,
}: JobFormActionsProps) {
  const submitLabel = isEdit ? "Update Job Application" : "Add Job Application";

  return (
    <footer className="flex justify-end gap-3 pt-4 border-t border-gray-200">
      <Button
        type="button"
        variant="outline"
        onClick={onCancel}
        className="min-w-[100px]"
        disabled={isSubmitting}
      >
        Cancel
      </Button>
      <Button
        type="submit"
        className="min-w-[140px] bg-gradient-primary hover:opacity-90 transition-opacity"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : submitLabel ? submitLabel : "Add"}
      </Button>
    </footer>
  );
}
