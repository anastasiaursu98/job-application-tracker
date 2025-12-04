import AddJobPage from "@/features/jobs/components/add-job/AddJobPage";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Home } from "lucide-react";
import { ROUTES } from "@/constnats/routes";

export default function AddJobRoute() {
  return (
    <div>
      <Breadcrumb
        items={[
          {
            label: "Dashboard",
            href: ROUTES.HOME,
            icon: <Home className="h-4 w-4" />
          },
          { label: "Applications", href: ROUTES.HOME },
          { label: "Add New" },
        ]}
        className="mb-6"
      />

      <div className="mb-6">
        <h1 className="text-heading-xl text-gray-900">Add New Job Application</h1>
      </div>
      <AddJobPage />
    </div>);
}
