const Education = () => {
  return (
    <section className="m-auto flex h-screen max-w-xl snap-start flex-col justify-center bg-white p-12 md:max-w-6xl md:flex-row">
      <div className="mx-auto flex justify-center md:my-auto md:w-1/2">
        <h1 className="text-2xl font-bold lg:text-3xl">Education</h1>
      </div>
      <div className="mx-auto mt-4 flex flex-col text-center md:my-auto md:mt-12 md:w-3/5 md:text-left">
        <div className="">
          <h1 className="font-bold lg:text-2xl">
            BE in Information Technology and Software Engineering
          </h1>
          <hr className="mx-auto my-2 h-0.5 w-5/6 bg-gradient-to-r from-slate-50 via-slate-300 to-slate-50 md:mx-0 md:from-slate-300 md:via-slate-300" />
          <p className="flex flex-1 text-sm lg:text-left lg:text-base">
            Tampere University of Applied Sciences, 2020 -
          </p>
          <p className="mt-2 flex flex-1 text-sm lg:text-left lg:text-base">
            Majoring in software engineering, telecommunications and networks.
            The degree contains courses in software development and testing,
            information security, databases, networks, data-analysis and AI,
            project management etc.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="font-bold lg:text-2xl">
            Vocational Qualification in ICT
          </h1>
          <hr className="mx-auto my-2 h-0.5 w-5/6 bg-gradient-to-r from-slate-50 via-slate-300 to-slate-50 md:mx-0 md:from-slate-300 md:via-slate-300" />
          <p className="flex flex-1 justify-center text-sm lg:text-left lg:text-base">
            Sataedu, 2015 - 2018
          </p>
          <p className="mt-2 flex flex-1 text-sm lg:text-left lg:text-base">
            The degree contained courses in networks, servers, virtualization,
            telecommunications and other IT related topics.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Education;
