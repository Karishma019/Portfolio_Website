import { FiMail } from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="py-10">
      <div className="container">
        <h2 className="text-2xl font-semibold text-primary leading-loose -sm:text-xl">
          Contact
        </h2>
        <p className="text-3xl font-bold text-slate-600 -sm:text-2xl">
          Feel Free to React Out!
        </p>
        <div className="flex items-center gap-2 pt-10">
          <p className="text-primary text-5xl rounded-full shadow-lg">
            <FiMail className="p-3" />
          </p>
          <ul>
            <li className="text-lg font-bold text-slate-600 -sm:text-base">
              Mail
            </li>
            <li className="text-lg text-slate-600 hover:text-primary -sm:text-base">
              <a href="mailto:karishmaacharya63@gmail.com">
                karishmaacharya63@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
