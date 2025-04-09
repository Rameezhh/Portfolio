import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
// import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";
import { AnimatedPinDemo } from "../components/card";
import List from "../components/TechTag/tag";
import BackToTop from "../components/BackTop/btn";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name} ☕︎</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="mt-20 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="my-8 tablet:m-8 mt-[30px] text-3xl uppercase poppins-bold  opacity-80">
            Services.
          </h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        <div className="mt-20 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          {/* <h1 className="text-2xl text-bold">Work.</h1> */}
          <h1 className="my-8 mb-0 tablet:m-8 ta mt-[30px] text-3xl uppercase poppins-bold  opacity-80">
            Projects
          </h1>

          {/* <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-2"> */}
          <div className="mt-5 tablet:px-10 flex flex-wrap gap-2 laptop:gap-x-5 desktop:gap-x-2 justify-center items-center">
            {data.projects.map((project) => (
              <AnimatedPinDemo
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
                projectUrl={project.url}
              />
            ))}
          </div>
        </div>

        {/* This button should not go into production */}
        {/* {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit" className="cursor-none link">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )} */}
        <BackToTop />
        <div
          className="mt-[50px] laptop:mt-[80px] p-2 flex flex-col items-center laptop:p-0"
          ref={aboutRef}
        >
          <h1 className="m-8 mt-[30px] text-3xl uppercase poppins-bold text-center opacity-80">
            About.
          </h1>
          <p className="tablet:m-auto  text-sm tablet:text-lg laptop:text-xl opacity-50 poppins-light text-center w-fit tablet:w-[calc(90%-30px)]">
            {data.aboutpara}
          </p>

          <div className="flex flex-wrap mt-8 tablet:w-[calc(70%-30px)] justify-center gap-3">
            {[
              ...(data.resume.languages || []),
              ...(data.resume.frameworks || []),
              ...(data.resume.others || []),
            ].map((item, index) => (
              <List key={index} text={item} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
