export interface AddJobFormData {
    title: string;
    company: string;
    description: string;
    status: string;
    type: string;
    location: string;
    category: string;
    appliedDate: Date;
}

export const defaultAddJobFormData: AddJobFormData = {
    title: "",
    company: "",
    description: "",
    status: "",
    type: "",
    location: "",
    category: "",
    appliedDate: new Date(),
};
