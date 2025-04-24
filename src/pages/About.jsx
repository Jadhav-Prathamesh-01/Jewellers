import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

function About() {
  return (
    <div>
      <div className="pt-8 text-4xl text-center border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col gap-16 my-10 lg:flex-row">
        <img
          src={assets.about_img}
          alt=""
          className="w-full lg:max-w-[500px]"
        />
        <div className="flex flex-col justify-center w-full gap-6 text-lg text-gray-700">
          <p>
            Baba Gold Shop Serves its Clients Since 1998 with the finest
            collection of gold and diamond Jewellery. We Have all types of Rings
            , Necklace , Braslats , Bangles etc in both gold and White gold
            Collections.
          </p>
          <p>
            Since Last four decades the company stands out in the industry
            through its impeccable approcah towards the collection, marketing
            and services to its clientele. The company is well known for keeping
            the uniquely carfted pieces of Jewellery and best quality White Gold
            Jewellery. This company has categorized its collections as Rings ,
            Bangles , Necklaces etc in both gold & white Gold designs.
          </p>
          <b className="text-xl text-gray-800">Our Mission</b>
          <p>
            Our mission at Baba Jewellers is to empower customers with choice,
            convenience, and confidence. We&apos;re dedicated to providing a
            seamless shopping experience that exceeds expectations, from
            browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div className="py-4 text-3xl">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col mb-20 text-lg md:flex-row">
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Quality Assurance:</b>
          <p className="text-base text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Convenience:</b>
          <p className="text-base text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Exceptional Customer Service:</b>
          <p className="text-base text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
}

export default About;
