import CompanyPage from "@/components/CompanyPage";

export const metadata = {
  title: "Media | Pet Care",
  description: "Media information for the Pet Care Website project.",
};

export default function MediaPage() {
  return (
    <CompanyPage
      eyebrow="Media"
      title="Media resources"
      intro="This demo does not currently provide a press kit or media library."
      sections={[
        {
          heading: "Project materials",
          body: "This page is a sample layout for media resources.",
        },
        {
          heading: "Media enquiries",
          body: "No media contact is listed in this demo.",
        },
      ]}
    />
  );
}
