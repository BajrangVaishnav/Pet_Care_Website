import CompanyPage from "@/components/CompanyPage";

export const metadata = {
  title: "About | Pet Care",
  description: "Explore the Pet Care demonstration website.",
};

export default function AboutPage() {
  return (
    <CompanyPage
      eyebrow="About"
      title="A friendly place to explore pet care"
      intro="This demo brings sample pet-care services, doctor profiles, appointments, and product ideas together in one website."
      sections={[
        {
          heading: "What you can explore",
          body: "Browse the project’s sample pages for pet-care services, doctor profiles, appointments, and a product store concept.",
        },
        {
          heading: "Demo features",
          body: "Sign-in and registration are local browser demos. Appointments, purchases, and service availability are not connected to live services.",
        },
      ]}
    />
  );
}
