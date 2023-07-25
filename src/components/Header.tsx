import { Reveal } from "./Reveal";

export default function Header() {
  return (
    <section className="header min-h-[90vh] flex">
      <div className="container mx-auto px-4 lg:px-8 py-10 flex items-center justify-between flex-col sm:flex-row">
        <div className="text-white text-center sm:text-left">
          <Reveal>
            <h1 className="text-3xl lg:text-4xl font-bold">
              We Transform Business Into the Digital Age
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-8 mb-12 text-normal lg:text-lg">
              At Kibuti Software Solutions, we craft awesome software that
              inspires innovation and elevates user experiences. Our dedicated
              team of skilled engineers and designers work collaboratively to
              turn ideas into reality, delivering seamless digital solutions
              tailored to your specific needs.
            </p>
          </Reveal>
        </div>
        <img className="sm:w-1/2 mx-auto" src="/assets/coding-2.svg" alt="" />
      </div>
    </section>
  );
}
