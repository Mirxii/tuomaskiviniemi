import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Contact = () => {
  return (
    <section className="m-auto flex h-screen max-w-xl snap-start flex-col justify-center bg-white p-12 md:max-w-6xl md:flex-row">
      <div className="mx-auto flex justify-center md:my-auto md:w-1/2">
        <h1 className="text-2xl font-bold lg:text-3xl">Contact Me</h1>
      </div>
      <div className="mx-auto mt-4 flex flex-col items-center text-center md:my-auto md:w-3/5 md:text-left">
        <AiOutlineMail size="36" className="mb-1" />
        <h1 className="lg:text-xl">tuomas.kiviniemi@gmail.com</h1>
        <AiOutlinePhone size="36" className="mb-1 mt-4" />
        <h1 className="lg:text-xl">+358 404 192718</h1>
      </div>
    </section>
  );
};
export default Contact;
