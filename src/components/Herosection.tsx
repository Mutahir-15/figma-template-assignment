import Image from "next/image";
import React from "react";

function Herosection() {
  return (
    <main className="max-w-[1280px] mx-auto p-0 md:p-10 px-0 md:px-5 mt-2 md:mt-10">
      <section className="grid grid-rows-2 md:grid-cols-2 justify-center items-center">
        {/* Text & Button Section */}
        <div className="text-left">
          <h1 className="text-black text-[44px] font-bold">
            Welcome To Our Website
          </h1>
          <p className="text-[32px] font-normal mt-2 md:mt-5">
            Lorem Ipsum is simply dummy text of
            <br /> the printing and typesetting industry.
            <br /> Lorem Ipsum has been the industry`&apos;`s standard
          </p>
          <button className="text-[28px] bg-black text-white p-1 md:p-3 px-0 md:px-12 mt-5 md:mt-10">
            Contact US
          </button>
        </div>
        {/* Image Section */}
        <div>
          <Image
            src={"/images/image.png"}
            alt="Sample Image"
            width={500}
            height={500}
          />
        </div>
      </section>
    </main>
  );
}

export default Herosection;
