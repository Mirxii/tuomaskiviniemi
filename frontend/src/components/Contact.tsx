import email from '../assets/email.svg';
import phone from '../assets/phone.svg';

const Contact = () => {
  return (
    <section className="m-auto flex h-screen max-w-xl snap-start flex-col justify-center bg-white p-12 md:max-w-6xl md:flex-row">
      <div className="mx-auto flex justify-center md:my-auto md:w-1/2">
        <h1 className="text-3xl font-bold">Contact Me</h1>
      </div>
      <div className="mx-auto mt-12 flex flex-col text-center md:my-auto md:w-3/5 md:text-left">
        <div className="">
          <h1 className="text-xl">
            <img className="inline-block h-6 w-6" src={email} />{' '}
            tuomas.kiviniemi@gmail.com
          </h1>
          <hr className="mx-auto my-2 h-0.5 w-5/6 bg-gradient-to-r from-slate-50 via-slate-300 to-slate-50 md:mx-0 md:from-slate-300 md:via-slate-300" />
          <h1 className="text-xl">
            <img className="inline-block h-6 w-6" src={phone} /> +358 404 192718
          </h1>
        </div>
      </div>
    </section>
  );
};
export default Contact;
