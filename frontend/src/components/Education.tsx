const Education = () => {
  return (
    <section className="m-auto flex h-screen max-w-xl snap-start flex-col bg-white p-12 md:max-w-6xl md:flex-row">
      <div className="m-auto flex justify-center  md:w-1/2">
        <h1 className="text-3xl font-bold">Education</h1>
      </div>
      <div className="m-auto flex flex-col text-center md:w-3/5 md:text-left">
        <div className="">
          <h1 className="text-2xl font-bold">
            Bachelor of Engineering in Information Technology and Software
            Engineering
          </h1>
          <hr className="mx-auto my-2 h-0.5 w-5/6 bg-gradient-to-r from-slate-50 via-slate-300 to-slate-50 md:mx-0 md:from-slate-300 md:via-slate-300" />
          <p className="flex flex-1 md:text-left">
            Tampere University of Applied Sciences, 2020 -
          </p>
          <p className="mt-2 flex flex-1 md:text-left">
            Majoring in software engineering as well as telecommunications and
            networks. The degree contains courses in software development,
            information security, databases, networks, software testing,
            data-analysis and AI, project management etc.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-bold">
            Vocational Qualification in Information and Telecommunications
            Technology
          </h1>
          <hr className="mx-auto my-2 h-0.5 w-5/6 bg-gradient-to-r from-slate-50 via-slate-300 to-slate-50 md:mx-0 md:from-slate-300 md:via-slate-300" />
          <p className="flex flex-1 md:text-left">Sataedu, 2015 - 2018</p>
          <p className="mt-2 flex flex-1 md:text-left">
            The degree contained courses in networks, servers, virtualization,
            telecommunications and other IT related topics.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Education;
