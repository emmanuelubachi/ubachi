import Image from "next/image";
import Link from "next/link";
import React from "react";

const project = ({ params }: { params: String }) => {
  const bannerLink =
    "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg";
  const bannerAuthor = "";
  const bannerAlt = "";

  return (
    <section>
      {/* <hr className="h-px my-0 bg-gray-200 border-0" />
      <div className="relative h-[60vh] overflow-hidden bg-fixed">
        <Image
          className="bg-fixed"
          src={bannerLink}
          alt={bannerAlt}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
      </div>
      {/* <div className="flex flex-col">
        <Image
          src={bannerLink}
          alt={bannerAlt}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div> */}

      {/* <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      Jese Leos
                    </a>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      Graphic Designer, educator & CEO Flowbite
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                Best practices for successful prototypes
              </h1>
            </header>
            <p className="lead">
              Flowbite is an open-source library of UI components built with the
              utility-first classes from Tailwind CSS. It also includes
              interactive elements such as dropdowns, modals, datepickers.
            </p>
            <p>
              Before going digital, you might benefit from scribbling down some
              ideas in a sketchbook. This way, you can think things through
              before committing to an actual design project.
            </p>
            <p>
              But then I found a{" "}
              <a href="https://flowbite.com">
                component library based on Tailwind CSS called Flowbite
              </a>
              . It comes with the most commonly used UI components, such as
              buttons, navigation bars, cards, form elements, and more which are
              conveniently built with the utility classes from Tailwind CSS.
            </p>
            <figure>
              <Image
                src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                alt="image alt"
                width={500}
                height={500}
              />
              <figcaption>Digital art by Anonymous</figcaption>
            </figure>
            <h2>Getting started with Flowbite</h2>
            <p>
              First of all you need to understand how Flowbite works. This
              library is not another framework. Rather, it is a set of
              components based on Tailwind CSS that you can just copy-paste from
              the documentation.
            </p>
            <p>
              It also includes a JavaScript file that enables interactive
              components, such as modals, dropdowns, and datepickers which you
              can optionally include into your project via CDN or NPM.
            </p>
          </article>
        </div>
      </main> */}
    </section>
  );
};

export default project;
