import { Input } from "@/components/ui/input";

import { SearchIcon } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative">
      <div className="relative">
        <SearchIcon className="w-4 h-4 text-gray-500 absolute left-2 top-1/2 -translate-y-1/2" />

        <Input
          type="text"
          placeholder="Search"
          className="w-full pl-9"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
