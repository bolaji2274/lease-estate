import React from "react";
import { Link } from "react-router-dom";

import circle from '../assets/circle.png'
import client1 from '../assets/person-1.jpg'
import client2 from '../assets/person-2.jpg'
import sideImg from '../assets/sideImg.png'
import sideImg1 from '../assets/sideImg1.png'
import sideImg2 from '../assets/sideImg2.png'



const Hero = () => {
  return (
    <section className="max-padd-container mt-16 xl:mt-10">
      <div className="flex flex-col xl:flex-row gap-16 ">
        {/* Left  */}
        <div className="flex justify-center flex-1 flex-col gap-y-8 xl:max-w-[555px] relative">
            <h1 className="h1"> Invest in <span className="text-secondary">Your Future</span> with confidence</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque culpa deserunt, repellendus perspiciatis autem sed, incidunt ipsam omnis quisquam dolore illo harum aut placeat animi recusandae dicta aspernatur iusto?</p>
            <div className="flex gap-3">
                <a href="#listing" className="btn-dark flexCenter rounded-full">Explore Properties </a>
                <Link to={''} className="btn-secondary flexCenter rounded-full"> <span className="font-medium pr-1">+</span> Add Property </Link>
            </div>
            <div className="flex relative">
                {/* CLients images  */}
                <img src={circle} alt=""  className="rounded-full h-[99px] z-30"/>
                <img src={client1} alt="" className="rounded-full h-[80px] shadow-sm absolute left-16 z-20"/>
                <img src={client2} alt="" className="rounded-full h-[80px] shadow-sm absolute left-32 z-10"/>
            </div>
        </div>
        {/* Right  */}
        <div className="flex flex-1 flex-col gap-4">
            <div className="rounded-2xl h-[266px] overflow-hidden">
                <img src={sideImg} alt="" className="rounded-xl object-cover"/>
            </div>
            <div className="flexBetween gap-4 ">
                <div className="flex flex-1 rounded-xl"><img src={sideImg1} alt="" className="rounded-xl object-cover aspect-square"/></div>
                <div className="flex flex-1 rounded-xl"><img src={sideImg2} alt="" className="rounded-xl object-cover aspect-square"/></div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
