import Image from "next/image";

export default function ProfilePage() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold  mb-4">About Newsino Limited</h1>

      {/* Intro with image */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <Image
          src="/image/company-office.jpg"
          alt="Company Office"
          height={200}
          width={100}
          className="w-full h-auto rounded-xl shadow-md object-cover"
        />
        <p className="text-base leading-7 text-gray-700">
          Newsino Limited is a control system components company located in Guangzhou, Guangdong Province, China.
          We specialize in providing world-renowned brands such as Allen Bradley, ABB, Bently Nevada, GE, Honeywell,
          Emerson, Triconex, Hima, and even some discontinued ones.
        </p>
      </div>

      {/* Mission & Services */}
      <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
        <Image
          src="/image/industry-parts.jpg"
          alt="Industrial Parts"
          width={200}
          height={200}
          className="rounded-xl shadow-md object-cover"
        />
        <p className="text-base leading-7 text-gray-700">
          We pride ourselves on being a leading provider of industrial automation parts and solutions. Our extensive
          inventory, competitive pricing, fast delivery, and global reach enable us to serve a wide range of industries.
          All our products come with a 12-month warranty. Contact us today to learn how we can support your business needs.
        </p>
      </div>

      {/* Product and Warranty Info */}
      <section className="text-gray-700">
        <p>
          <strong>Main Products:</strong> Distributed Control System (DCS), Programmable Logic Controller (PLC),
          Large Servo Control System.
        </p>
        <p>
          The spare parts we sell are guaranteed for one year and are rigorously tested and certified.
        </p>
        <p>
          We are now a global manufacturer of industrial automation spare parts and components.
        </p>
      </section>

      {/* Company Info - One line each */}
<section className="space-y-2 text-sm text-gray-700">
  <div><strong>Main Market:</strong> North America, South America, Europe, Asia, Middle East, Africa, Oceania</div>
  <div><strong>Business Type:</strong> Distributor / Wholesaler / Exporter / Trading Company / Seller</div>
  <div><strong>Brands:</strong> Omron, Proface, Fuji, Mitsubishi</div>
  <div><strong>No. of Employees:</strong> 10–20</div>
  <div><strong>Annual Sales:</strong> 500–1000</div>
  <div><strong>Year Established:</strong> 2014</div>
  <div><strong>Export Percentage:</strong> 80%–90%</div>
</section>

    </main>
  );
}
