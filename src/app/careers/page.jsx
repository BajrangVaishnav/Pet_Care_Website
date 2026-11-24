import CompanyPage from "@/components/CompanyPage";

export const metadata = {
  title: "Careers | Pet Care",
  description: "Career information for the Pet Care Website project.",
};

export default function CareersPage() {
  return (
    <CompanyPage
      eyebrow="Careers"
      title="Careers"
      intro="This is a demo website and is not currently recruiting."
      sections={[
        {
          heading: "Open roles",
          body: "There are no job openings listed on this demo site.",
        },
        {
          heading: "For demonstration purposes",
          body: "This page shows where career information could appear on a pet-care website.",
        },
      ]}
    />
  );
}
