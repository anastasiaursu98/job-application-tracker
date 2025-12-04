"use client";

import { useState } from "react";
import { DropdownCheckbox, CheckboxOption } from "@/components/shared/DropdownCheckbox";

/**
 * Demo page showcasing the DropdownCheckbox component
 * Navigate to this page to see the component in action
 */
export default function DropdownCheckboxDemo() {
    // Status filter example
    const statusOptions: CheckboxOption[] = [
        { key: "all", label: "All", value: "all" },
        { key: "new", label: "New", value: "new" },
        { key: "completed", label: "Completed", value: "completed" },
        { key: "pending", label: "Pending", value: "pending" },
        { key: "canceled", label: "Canceled", value: "canceled" },
    ];

    // Job type filter example
    const jobTypeOptions: CheckboxOption[] = [
        { key: "all", label: "All", value: "all" },
        { key: "full-time", label: "Full-time", value: "full-time" },
        { key: "part-time", label: "Part-time", value: "part-time" },
        { key: "contract", label: "Contract", value: "contract" },
        { key: "internship", label: "Internship", value: "internship" },
    ];

    // Location filter example
    const locationOptions: CheckboxOption[] = [
        { key: "all", label: "All", value: "all" },
        { key: "remote", label: "Remote", value: "remote" },
        { key: "onsite", label: "Onsite", value: "onsite" },
        { key: "hybrid", label: "Hybrid", value: "hybrid" },
    ];

    const [selectedStatuses, setSelectedStatuses] = useState<string[]>(["new"]);
    const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
    const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    DropdownCheckbox Component Demo
                </h1>
                <p className="text-gray-600 mb-8">
                    A reusable dropdown component with checkbox multi-select functionality
                </p>

                {/* Demo Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Status Filter */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <DropdownCheckbox
                            label="Status"
                            options={statusOptions}
                            selectedValues={selectedStatuses}
                            onChange={setSelectedStatuses}
                            placeholder="Select status"
                        />
                    </div>

                    {/* Job Type Filter */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <DropdownCheckbox
                            label="Job Type"
                            options={jobTypeOptions}
                            selectedValues={selectedJobTypes}
                            onChange={setSelectedJobTypes}
                            placeholder="Select job type"
                        />
                    </div>

                    {/* Location Filter */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <DropdownCheckbox
                            label="Location"
                            options={locationOptions}
                            selectedValues={selectedLocations}
                            onChange={setSelectedLocations}
                            placeholder="Select location"
                        />
                    </div>
                </div>

                {/* Selected Values Display */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">
                        Selected Values
                    </h2>

                    <div className="space-y-3">
                        <div>
                            <span className="font-medium text-gray-700">Status: </span>
                            <span className="text-gray-600">
                                {selectedStatuses.length > 0
                                    ? selectedStatuses.join(", ")
                                    : "None"}
                            </span>
                        </div>

                        <div>
                            <span className="font-medium text-gray-700">Job Type: </span>
                            <span className="text-gray-600">
                                {selectedJobTypes.length > 0
                                    ? selectedJobTypes.join(", ")
                                    : "None"}
                            </span>
                        </div>

                        <div>
                            <span className="font-medium text-gray-700">Location: </span>
                            <span className="text-gray-600">
                                {selectedLocations.length > 0
                                    ? selectedLocations.join(", ")
                                    : "None"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Features List */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Features</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Multi-select with checkboxes</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>&quot;Select All&quot; functionality (when &quot;All&quot; option is included)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Click outside to close</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Smooth animations and transitions</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Keyboard accessible</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>TypeScript support with proper types</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Fully customizable and reusable</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
