import CompanyPage from "@/components/CompanyPage";

export const metadata = {
  title: "Press releases | Pet Care",
  description: "News and announcements for the Pet Care Website project.",
};

export default function PressReleasesPage() {
  return (
    <CompanyPage
      eyebrow="Newsroom"
      title="Press releases"
      intro="There are no press releases or announcements in this demo."
      sections={[
        {
          heading: "Announcements",
          body: "This page is a sample newsroom layout for the demo website.",
        },
        {
          heading: "Project updates",
          body: "No public announcements are currently available.",
        },
      ]}
    />
  );
}
