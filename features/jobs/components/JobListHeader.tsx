
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";

export default function JobListHeader() {
    const router = useRouter();

    const handleOpenModal = () => {
        router.push(ROUTES.ADD_JOB);
    };
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-heading-xl text-gray-900">Job Applications</h1>
                <p className="text-sm text-gray-500 mt-1">
                    Track and manage your job application journey
                </p>
            </div>
            <Button
                onClick={handleOpenModal}
                className="bg-gradient-primary hover:opacity-90 transition-opacity gap-2 shadow-lg hover:shadow-xl"
            >
                <Plus className="h-4 w-4" />
                Add New Job
            </Button>
        </div>
    );
}