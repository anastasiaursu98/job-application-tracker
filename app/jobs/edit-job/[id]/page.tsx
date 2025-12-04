import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ROUTES } from "@/constants/routes";
import JobFormPage from "@/features/jobs/components/add-job/JobFormPage";

export default async function EditJobPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Dashboard", href: ROUTES.HOME },
          { label: "Applications", href: ROUTES.HOME },
          { label: "Edit Job", href: ROUTES.EDIT_JOB },
        ]}
      />
      <div className="mb-6 mt-6">
        <h1 className="text-heading-xl text-gray-600">Edit Job</h1>
      </div>
      <JobFormPage isEdit={true} />
    </div>
  );
}
