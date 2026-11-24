import CompanyPage from "@/components/CompanyPage";

export const metadata = {
  title: "Contact | Pet Care",
  description: "Contact information for the Pet Care demonstration website.",
};

export default function ContactPage() {
  return (
    <CompanyPage
      eyebrow="Contact"
      title="Contact"
      intro="This demo does not currently have a live contact or customer-support service."
      sections={[
        {
          heading: "About this page",
          body: "The contact page is a sample page for the website design. Messages cannot currently be sent from this demo.",
        },
        {
          heading: "Using the demo",
          body: "Do not enter private or sensitive information into the sample forms.",
        },
      ]}
    />
  );
}
