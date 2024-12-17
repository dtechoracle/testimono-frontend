import React from "react";
// import avatar1 from "../../public/avatar-2.png";
// // import avatar2 from "@/assets/avatar-2.png";
// import avatar3 from "@/assets/avatar-3.png";
// import avatar4 from "@/assets/avatar-4.png";
// import avatar5 from "@/assets/avatar-5.png";
// import avatar6 from "@/assets/avatar-6.png";
// import avatar7 from "@/assets/avatar-7.png";
// import avatar8 from "@/assets/avatar-8.png";
// import avatar9 from "@/assets/avatar-9.png";
import { motion } from "framer-motion"

import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    // imageSrc: avatar1,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    // imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    // imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    // imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    // imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    // imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    // imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },

];

const firstColomn = testimonials.slice(0, 3);
const secondColomn = testimonials.slice(3, 6);
const thirdColomn = testimonials.slice(6, 9);

export const TestimonialsCol = (props) => {
  return (
    <div className={twMerge(props.className)}>
      <motion.div
              animate={{
                translateY:"-50%"
              }}
              transition={{
                duration:props.duration || 10,
                ease:'linear',
                repeat:Infinity,
                repeatType:'loop',
              }}
      className={twMerge("flex flex-col gap-6 ",props.className)}>
      {[...new Array(2)].fill(0).map((_,index)=>(
        <React.Fragment key={index}>
             {props.testimonials.map(({  text, username, name }) => (
        <div key={username} className='p-8 border border-[#F1F1F1] rounded-lg shadow-[0_7px_14px_#EAEAEA]'>
          {/* <img src={imageSrc} alt={name} width={50} height={50} /> */}
          <div className="mt-4">{text}</div>
          <div className="mt-2 font-semibold">{name}</div>
          <div className="text-sm text-gray-500">{username}</div>
        </div>
      ))}
        </React.Fragment>
      ))}
   
    </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <div className="bg-white">
      <div className="container  py-24">
        <div className='justify-center flex flex-col text-center items-center'>
          <div className="max-w-[545px] mx-auto">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Testimonials</div>
            <h1 className="text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter  mt-6">What our users say</h1>
            <p className="text-[16px] leading-[30px] text-[#010D3E] tracking-tight ">From intuitive design to powerful features, our app has become an essential tool for users around the world.</p>
          </div>
        </div>
        <div className="flex justify-center overflow-hidden gap-6 items-center mt-10 max-h-[678px]   [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
        <motion.div 
  
>
<TestimonialsCol duration={15} testimonials={firstColomn} />

          </motion.div>

          <TestimonialsCol duration={19}  className="hidden md:block" testimonials={secondColomn} />
          <TestimonialsCol duration={14}  className="hidden lg:block" testimonials={thirdColomn} />
        </div>
      </div>
    </div>
  );
};
