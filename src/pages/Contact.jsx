import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

function Contact() {
  return (
    <div>
      <div className="pt-10 text-3xl text-center border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="flex flex-col justify-center gap-10 my-10 lg:flex-row mb-28 ">
        <img
          src={assets.contact_img}
          className="w-full lg:max-w-[550px]"
          alt=""
        />
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-2xl font-semibold text-gray-600">Our Store</p>
          <p className="text-lg text-gray-500">
          Mangle, Shirala <br /> Sangli
          </p>
          <p className="text-lg text-gray-500">
            Tel: +91-91681 57092 <br /> Email: abhosle637@gmail.com
          </p>
          <p className="text-2xl font-semibold text-gray-600">
            Careers at Baba
          </p>
          <p className="text-lg text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="px-8 py-4 transition-all duration-500 border border-black hover:bg-black hover:text-white">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
}

export default Contact;
