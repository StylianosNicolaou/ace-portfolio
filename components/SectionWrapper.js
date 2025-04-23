export default function SectionWrapper({ children, id }) {
  return (
    <section id={id} className="w-full py-32 px-6 max-w-7xl mx-auto">
      {children}
    </section>
  );
}
