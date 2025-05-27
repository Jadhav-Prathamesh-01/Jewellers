import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-base">
        <div>
          <img src={assets.logo} className="w-32 mb-5 " alt="" />
          <p className="w-full text-gray-600 md:w-2/3">
            Moreover, enhancing the reputation of India around the world through
            its representation in diamonds, gold Jewellery and white gold
            Jewellery.
          </p>
        </div>
        <div>
          <p className="mb-5 text-xl font-medium ">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <a href="/">Home</a>
            <a href="/about">About us</a>
            <a href="/cart">Delivery</a>
            <a href="/">Privacy policy</a>
          </ul>
        </div>
        <div>
          <p className="mb-5 text-xl font-medium ">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-91681 57092</li>
            <li>+91-91681 56528</li>
            <a href="mailto:kiransalunkhe9197@gmail.com?subject=Gold Jewelry Inquiry&body=Hello, I am interested in purchasing gold jewelry. Please provide me with details on the latest designs and pricing.">
            kiransalunkhe9197@gmail.com
            </a>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-base text-center">
          Copyright © 2025{" "}
          <a href="https://www.linkedin.com/in/prathamesh-jadhav-4a920725a/">
            @Prathamesh
          </a>{" "}
          - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
