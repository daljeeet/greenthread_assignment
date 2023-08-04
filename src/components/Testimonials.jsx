import React from "react";

const Testimonials = () => {
  const boxStyle =
    "border-[1px] border-black rounded-[10px] flex flex-col justify-center items-center p-10 w-[450px] mx-[20px] gap-10";
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <h4 className="font-semibold text-4xl">Testimonials</h4>
      <div>
        <div className="flex my-10">
          <div className={boxStyle}>
            <div>100%</div>
            <p>of influencers reported a boost in their links.</p>
          </div>
          <div className={boxStyle}>
            <div></div>
            <p>
              Whether it's my latest YouTube videos, course links, or social
              media profiles, brings it all together in one place, allowing my
              audience a seamless browsing experience.
            </p>
          </div>
          <div className={boxStyle}>
            <div></div>
            <p>
              customizable features allow me to showcase my work in an enticing
              manner. No more boring links in bio lists!.
            </p>
            <div>
              <div></div>
              <h4>Amit Singh</h4>
              <p>Tech Creator</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex my-10">
          <div className={boxStyle}>
            <p>
              My Wall truly feels like an extension of my personal brand with so
              many link options to add. The statistics provided by add valuable
              insights into my audience's preferences, enabling me to deliver
              exactly what they crave. 
            </p>
            <div>
              <div></div>
              <h4>Vidhi Kumar</h4>
              <p>Lifestyle Creator</p>
            </div>
          </div>
          <div className={boxStyle}>
            <div></div>
            <p>
              I must say this was a life-changing course for me. Understanding
              the things which TRULY make me happy helped me identify the tasks
              that I should be focusing on for achieving.
            </p>
            <div>
              <div></div>
              <h4>Shalini Verma</h4>
              <p>Lifestyle Creator</p>
            </div>
          </div>
          <div className={boxStyle}>
            <p>
              With a single link, I can effortlessly add my latest trends, tips,
              and behind-the-scenes glimpses into my social world. The
              customization options provided by Faym allow me to create an
              attractive landing page that truly reflects my taste.
            </p>
            <div>
              <h4>Vikash Singh</h4>
              <p>Beauty Creator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
