import { Briefcase } from "lucide-react";

export default function JobListEmpty() {
    return (
        <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Briefcase className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No applications yet</h3>
            <p className="text-sm text-gray-500 mb-6">
                Start tracking your job applications by adding your first one
            </p>

        </div>
    );
}