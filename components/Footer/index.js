import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import data from "../../data/portfolio.json";
const Footer = ({}) => {
  const { name } = data;
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <Link
              href={data.socials[2].link}
              target="_blank"
              rel="no"
              className="link cursor-none"
            >
              {" "}
              <Button type="primary">Schedule a call</Button>
            </Link>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm w-fit text-bold mt-2  laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="/edit" className="link cursor-none">
          <p className="underline underline-offset-1">{name}</p>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
