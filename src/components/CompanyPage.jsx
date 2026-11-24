import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";

export default function CompanyPage({
  eyebrow,
  title,
  intro,
  sections,
}) {
  return (
    <div className="mx-2 sm:mx-4 lg:mx-8">
      <Header />
      <main className="mx-auto my-8 max-w-5xl rounded-3xl bg-[#f7f8f4] px-5 py-10 sm:px-10 sm:py-14">
        <BackButton />
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
          {eyebrow}
        </p>
        <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-gray-700 sm:text-lg">
          {intro}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {sections.map(({ heading, body }) => (
            <section
              key={heading}
              className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900">{heading}</h2>
              <p className="mt-3 leading-7 text-gray-700">{body}</p>
            </section>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}
