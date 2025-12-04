export const getStatusClass = (status: string) => {
    const statusMap: Record<string, string> = {
        "applied": "bg-blue-100 text-blue-700 border border-blue-200",
        "interview": "bg-yellow-100 text-yellow-700 border border-yellow-200",
        "offer": "bg-green-100 text-green-700 border border-green-200",
        "rejected": "bg-red-100 text-red-700 border border-red-200",
    };
    return statusMap[status.toLowerCase()] || "bg-gray-100 text-gray-700 border border-gray-200";
};