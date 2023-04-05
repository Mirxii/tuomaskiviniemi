const Bio = () => {
  return (
    <section className="m-auto flex h-screen max-w-xl snap-start flex-col bg-white p-12 md:max-w-6xl md:flex-row">
      <div className="m-auto flex justify-center md:w-1/2">
        <img
          className="h-64 w-64 rounded-full border-2 border-slate-800 shadow-lg ring-2 ring-sky-200 drop-shadow-lg"
          src="https://avatars.githubusercontent.com/u/91017924?v=4"
          alt="avatar"
        />
      </div>
      <div className="m-auto flex flex-col text-center md:w-3/5 md:text-left">
        <h1 className="text-3xl font-bold">Tuomas Kiviniemi</h1>
        <hr className="mx-auto my-2 h-0.5 w-5/6 bg-gradient-to-r from-slate-50 via-slate-300 to-slate-50 md:mx-0 md:from-slate-300 md:via-slate-300" />
        <p className="flex flex-1 md:text-left">
          I am an aspiring software developer from Tampere, Finland. I am
          currently studying software engineering at Tampere University of
          Applied Sciences. My main interests lie in web development, machine
          learning as well as cyber security.
        </p>
        <p className="mt-2 flex flex-1 md:text-left">
          I am very detail-oriented and passionate about learning new things. I
          love to spend time in nature, especially hiking. I also enjoy lifting
          weights, reading and playing video games.
        </p>
      </div>
    </section>
  );
};
export default Bio;
