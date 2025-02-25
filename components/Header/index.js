import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save the new theme in localStorage
  };
  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name} ☕︎
              </h1>

              <div className="flex items-center">
                {mounted && theme && data.darkMode && (
                  <Button
                    onClick={() =>
                      // setTheme(theme === "dark" ? "light" : "dark")
                      toggleTheme()
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "sun.svg" : "moon.svg"
                        // `{toggleImg}`
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  {mounted && theme && data.darkMode && (
                    <img
                      className="h-5"
                      src={`/images/${
                        !open
                          ? theme === "dark"
                            ? "menu-white.svg"
                            : "menu.svg"
                          : theme === "light"
                          ? "cancel.svg"
                          : "cancel-white.svg"
                      }`}
                    ></img>
                  )}
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {/* {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )} */}
                  {showResume && (
                    <Button onClick={() => router.push("/resume")}>
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:hello@chetanverma.com")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {/* {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )} */}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:hello@chetanverma.com")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between  
          dark:text-white top-0 z-10 tablet:flex`}
        // sticky
        //   ${
        //   theme === "light" && "bg-white"
        // }
      >
        <h1
          onClick={() => router.push("/")}
          // we can add cursor-pointer init
          className="font-medium mob:p-2 laptop:p-0 link"
        >
          {name} ☕︎
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {/* {showBlog && (
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  return router.push("/blog");
                }}
              >
                Blog
              </Button>
            )} */}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
              Contact
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                onClick={() => toggleTheme()}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "sun.svg" : "moon.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {/* {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )} */}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                onClick={() => toggleTheme()}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "sun.svg" : "moon.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
