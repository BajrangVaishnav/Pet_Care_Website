import CompanyPage from "@/components/CompanyPage";

export const metadata = {
  title: "Management | Pet Care",
  description: "Management information for the Pet Care demonstration website.",
};

export default function ManagementPage() {
  return (
    <CompanyPage
      eyebrow="Management"
      title="Management"
      intro="This demo website does not represent a company or publish a management team."
      sections={[
        {
          heading: "About this section",
          body: "This page is a sample layout for management information.",
        },
        {
          heading: "Team information",
          body: "No company or team details are available in this demo.",
        },
      ]}
    />
  );
}
