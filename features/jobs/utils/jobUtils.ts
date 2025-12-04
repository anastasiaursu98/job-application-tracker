export const getStatusClass = (status: string) => {
    const statusMap: Record<string, string> = {
        "Applied": "status-applied",
        "Interview": "status-interview",
        "Offer": "status-offer",
        "Rejected": "status-rejected",
        "Accepted": "status-accepted",
    };
    return statusMap[status] || "bg-gray-100 text-gray-700 border border-gray-200";
};