import CompanyPage from "@/components/CompanyPage";

export const metadata = {
  title: "Investors | Pet Care",
  description: "Investor information for the Pet Care Website project.",
};

export default function InvestorsPage() {
  return (
    <CompanyPage
      eyebrow="Investor information"
      title="Investors"
      intro="This demo website does not represent a public company or offer investor relations."
      sections={[
        {
          heading: "Financial information",
          body: "No investor materials or financial information are available in this demo.",
        },
        {
          heading: "Project updates",
          body: "This page demonstrates where investor information could appear on a company website.",
        },
      ]}
    />
  );
}
