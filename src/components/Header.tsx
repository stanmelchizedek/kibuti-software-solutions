import { Reveal } from "./Reveal";

export default function Header() {
  return (
    <section className="header flex">
      <div className="container text-blue-950 mx-auto px-4 lg:px-8 py-10 flex items-center justify-between flex-col sm:flex-row">
        <div className="text-center sm:text-left">
          <Reveal>
            <h1 className="text-2xl lg:text-3xl font-bold">
              {/* AUTO TYPE */}
            Your Vision, Our Code: Building the Future Together
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-8 mb-12 text-normal">
            Elevating Experiences Through Innovative Software Solutions. Empowering Businesses with Cutting-Edge Technology
            </p>
          </Reveal>
          <button className="text-blue-950 border-2 border-blue-950 rounded-lg font-semibold py-2 px-4 hover:bg-slate-300 transition ease-in duration-100">Book a meeting</button>
        </div>
        <img className="sm:w-1/2 mx-auto" src="/assets/images/computer-header.svg" alt="" />
      </div>
    </section>
  );
}
