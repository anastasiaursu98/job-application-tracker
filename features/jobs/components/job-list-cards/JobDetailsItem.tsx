import { LucideIcon } from "lucide-react";

interface JobDetailsItemProps {
  icon: LucideIcon;
  children: React.ReactNode;
}
export default function JobDetailsItem({
  icon: Icon,
  children,
}: JobDetailsItemProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Icon className="w-4 h-4 text-gray-500 shrink-0" />
      <span className="text-gray-600">{children}</span>
    </div>
  );
}
