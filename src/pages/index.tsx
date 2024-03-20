import Link from "@docusaurus/Link";
import NavbarSearch from "../theme/Navbar/Search";
import SearchBar from "@theme/SearchBar";
import React from "react";
import { Tooltip } from "react-tooltip";
import { TypeAnimation } from "react-type-animation";
import BlogComponent from "../components/BlogComponent";

export default function Home(): JSX.Element {
  const [showNavMobile, setShowNavMobile] = React.useState(false);
  const [blogFeed, setBlogFeed] = React.useState<BlogFeed>();
  const [newContent, setNewContent] = React.useState();

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://lutfiikbalmajid.netlify.app/blog/feed.json"
      );
      if (response.ok) {
        const data = (await response.json()) as BlogFeed;
        setBlogFeed(data);

        // const htmlElements = parser(data?.items[2]?.content_html.slice(0, 3));
        // // const firstThreeElements = parser(htmlElements.slice(0, 3));
        // console.log(htmlElements)
      } else {
        console.error("Failed to fetch blog feed:", response.status);
      }
    } catch (error) {
      console.error("Error fetching blog feed:", error);
    }
  };

  return (
    <div
      id="home"
      className="bg-zinc-800 flex flex-col items-center pt-4 pb-12 px-16 max-md:px-5"
    >
      <div className="self-stretch max-w-full max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-full max-md:ml-0">
            <div className="items-stretch flex gap-0 my-auto max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cf51d4614b9df3de0b1afa110d29f9e9e58cabc5721e8169aaf817138c300f87?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf51d4614b9df3de0b1afa110d29f9e9e58cabc5721e8169aaf817138c300f87?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf51d4614b9df3de0b1afa110d29f9e9e58cabc5721e8169aaf817138c300f87?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf51d4614b9df3de0b1afa110d29f9e9e58cabc5721e8169aaf817138c300f87?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf51d4614b9df3de0b1afa110d29f9e9e58cabc5721e8169aaf817138c300f87?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf51d4614b9df3de0b1afa110d29f9e9e58cabc5721e8169aaf817138c300f87?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf51d4614b9df3de0b1afa110d29f9e9e58cabc5721e8169aaf817138c300f87?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf51d4614b9df3de0b1afa110d29f9e9e58cabc5721e8169aaf817138c300f87?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                className="aspect-[1.53] object-contain object-center w-12 lg:w-28 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-md lg:text-2xl font-bold leading-8 tracking-wide self-center grow whitespace-nowrap my-auto">
                Lutfi Ikbal Majid
              </div>
              <button
                className="sm:hidden bg-gray-700 border-none rounded-md text-white"
                onClick={() => setShowNavMobile(!showNavMobile)}
              >
                Menu
              </button>
            </div>
          </div>
          <div className="hidden sm:flex w-full justify-between items-center">
            <NavbarSearch className="flex items-center space-x-4">
              <a
                href="#home"
                className="text-white text-right text-base font-semibold leading-[81px] tracking-wider"
              >
                Home
              </a>
              <a
                href="#project"
                className="text-neutral-300 text-right text-base font-semibold leading-[81px] tracking-wider"
              >
                Projects
              </a>
              <Link
                href="docs/intro"
                className="text-neutral-300 text-right text-base font-semibold tracking-wider w-36"
              >
                Extras By Author
              </Link>
              <Link
                href="blog"
                className="text-neutral-300 text-right text-base font-semibold leading-[81px] tracking-wider"
              >
                Blog
              </Link>
              <SearchBar />
            </NavbarSearch>
          </div>
          {/* Mobile Nav */}
          {showNavMobile && (
            <NavbarSearch className="items-center flex flex-col space-y-2 lg:hidden w-full flex-wrap justify-center mt-20 bg-gray-600 bg-opacity-75 p-4">
              <a
                href="#home"
                className="text-white text-right text-base font-semibold  tracking-wider"
              >
                Home
              </a>
              <a
                href="#project"
                className="text-neutral-300 text-right text-base font-semibold  tracking-wider"
              >
                Projects
              </a>
              <Link
                href="docs/intro"
                className="text-neutral-300 text-right text-base font-semibold tracking-wider"
              >
                Extras By Author
              </Link>
              <Link
                href="blog"
                className="text-neutral-300 text-right text-base font-semibold  tracking-wider"
              >
                Blog
              </Link>
              <SearchBar />
            </NavbarSearch>
          )}
        </div>
      </div>
      <div className="flex w-full flex-col space-y-4 mb-6 max-md:max-w-full">
        {/* Greeting */}
        <div className="flex flex-col font-bold">
          <TypeAnimation
            sequence={[
              "Hello!", // Types 'One'
              1000, // Waits 1s
              "I'm Lutfi Ikbal Majid",
              2000,
              "Full Stack Developer",
              500,
              "Mobile Developer",
              500,
              "Blockchain Developer",
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-5xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-[56px] tracking-wider ml-1 mt-24 self-start max-md:max-w-full max-md:text-4xl max-md:leading-[52px] max-md:mt-10"
          />
          <TypeAnimation
            sequence={[
              "ReactJS", // Types 'One'
              500, // Waits 1s
              "Typescript", // Deletes 'One' and types 'Two'
              500, // Waits 2s
              "NextJS",
              500,
              "NestJS",
              500,
              "Flutter",
              500,
              "Golang",
              500,
              "Rust",
              500,
              "Quality Assurance",
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent leading-[56px] tracking-wider"
          />
        </div>
        {/* Biography */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="col-span-4">
            <div className="text-green-400 text-4xl font-bold leading-[72px] tracking-wider max-md:max-w-full">
              About
            </div>{" "}
            <div className="text-zinc-300 text-justify text-lg leading-8 tracking-wide max-md:max-w-full">
              I'm a Full Stack Developer who started my journey in college by
              tinkering with Arduino and C++. Originally trained as an
              Electrical Engineer, my career shifted gears in 2020 when I
              decided to focus on web development, especially using Laravel.
              Since joining my current workplace, I wear multiple hats as a
              researcher and lead developer in Full Stack and Blockchain
              projects.I'm well-versed in various programming languages and
              frameworks. Right now, I mainly work with Typescript for projects
              and use Flutter for mobile development. I've also completed a QA
              Bootcamp at Binar, a well-known institution in Indonesia.I'm a
              perpetual learner, always excited to explore new technologies and
              expand my skills.
            </div>
          </div>
          <div className="items-stretch flex flex-col my-auto col-span-2">
            <div className="text-zinc-50 text-3xl font-bold leading-[72px] tracking-wider">
              Lets connect
            </div>{" "}
            <div className="flex gap-4 mt-2 pr-20 items-start max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/679818837b0e74e2ab679b726596cdbd13382a71ed082615fad0dc371910f731?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
              />{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/09b0ed7165b1a9925a7d3585409faa6188b07a915e3f0d81c95a7b82d67779ee?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
              />{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/370d39d2fda77a2b48eebe20b050c178ec33c9a6cf22971645b7378531418d0c?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                className="aspect-square object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full"
              />
            </div>
          </div>
        </div>
        {/* Projects */}
        <div>
          <div
            id="project"
            className="text-green-400 text-4xl font-bold leading-[71.96px] tracking-wider"
          >
            <span className="text-white">Project that i has been </span>
            <span className="text-green-400">done</span>
          </div>{" "}
          {/* top */}
          <div className="flex flex-col">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/30272052496c7f1c9876a47f2d75ba4cf41ba8a5293712019255bb64d8f64175?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/30272052496c7f1c9876a47f2d75ba4cf41ba8a5293712019255bb64d8f64175?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30272052496c7f1c9876a47f2d75ba4cf41ba8a5293712019255bb64d8f64175?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/30272052496c7f1c9876a47f2d75ba4cf41ba8a5293712019255bb64d8f64175?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/30272052496c7f1c9876a47f2d75ba4cf41ba8a5293712019255bb64d8f64175?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30272052496c7f1c9876a47f2d75ba4cf41ba8a5293712019255bb64d8f64175?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/30272052496c7f1c9876a47f2d75ba4cf41ba8a5293712019255bb64d8f64175?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/30272052496c7f1c9876a47f2d75ba4cf41ba8a5293712019255bb64d8f64175?apiKey=b4b8e1120d4040cb8e27288270221f30&"
            />
            <div className="mt-4 flex flex-col">
              <div className="text-neutral-200 text-lg font-bold max-md:max-w-full flex space-x-2 items-center">
                <p>Web Development </p>
                <p data-tooltip-id="info1" className="text-green-400 text-base">
                  detail
                </p>
              </div>{" "}
              <div className="text-white text-2xl font-bold max-md:max-w-full">
                <p>PRIfA CBDC Web suite </p>
                <div className="text-sm">
                  <p>
                    tags:{" "}
                    <span className="text-white bg-blue-700 mr-1">
                      typescript
                    </span>
                    <span className="text-white bg-green-600 mr-1">rust</span>
                    <span className="text-white bg-blue-700 mr-1">react</span>
                    <span className="text-white bg-green-600 mr-1">
                      blockchain
                    </span>
                  </p>
                </div>
              </div>{" "}
              <Tooltip id="info1">
                <div className="w-52">
                  <p className="text-sm">
                    Web application build with react as frontend and nestjs as
                    backend for prototype Central Bank digital currency, there
                    is 5 website including, Central Bank Suite, Core System
                    Suite, Financial Service Provider, Merchant Suite, and
                    Enterprise Suite.
                  </p>
                </div>
              </Tooltip>
            </div>
          </div>
          {/* list */}
          <div className="grid grid-cols-2 gap-4">
            {/* 2nd */}
            <div className="flex flex-col">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7462ccc519660d108566f355f66cf16c7ebab11c68d2d1ffb90763a5bbafde99?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7462ccc519660d108566f355f66cf16c7ebab11c68d2d1ffb90763a5bbafde99?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7462ccc519660d108566f355f66cf16c7ebab11c68d2d1ffb90763a5bbafde99?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7462ccc519660d108566f355f66cf16c7ebab11c68d2d1ffb90763a5bbafde99?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7462ccc519660d108566f355f66cf16c7ebab11c68d2d1ffb90763a5bbafde99?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7462ccc519660d108566f355f66cf16c7ebab11c68d2d1ffb90763a5bbafde99?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7462ccc519660d108566f355f66cf16c7ebab11c68d2d1ffb90763a5bbafde99?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7462ccc519660d108566f355f66cf16c7ebab11c68d2d1ffb90763a5bbafde99?apiKey=b4b8e1120d4040cb8e27288270221f30&"
              />
              <div className="mt-4 flex flex-col">
                <div className="text-neutral-200 text-lg font-bold max-md:max-w-full flex space-x-2 items-center">
                  <p>Mobile Development </p>
                  <p
                    data-tooltip-id="info2"
                    className="text-green-400 text-base"
                  >
                    detail
                  </p>
                </div>{" "}
                <div className="text-white text-2xl font-bold max-md:max-w-full">
                  <p>PRIfA CBDC Mobile App</p>
                  <div className="text-sm">
                    <p>
                      tags:{" "}
                      <span className="text-white bg-blue-700 mr-1">
                        Flutter
                      </span>
                    </p>
                  </div>
                </div>{" "}
                <Tooltip id="info2">
                  <div className="w-52">
                    <p className="text-sm">
                      A mobile app wallet build with flutter for end user to
                      send and receive DIDR money from CBDC and stablecoind.
                    </p>
                  </div>
                </Tooltip>
              </div>
            </div>
            {/* 3rd */}
            <div className="min-h-full  flex flex-col">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f8bb3b528566a352d06413213b8aeca087fd2a9a2d50573c713b49d7cf78a9c6?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bb3b528566a352d06413213b8aeca087fd2a9a2d50573c713b49d7cf78a9c6?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bb3b528566a352d06413213b8aeca087fd2a9a2d50573c713b49d7cf78a9c6?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bb3b528566a352d06413213b8aeca087fd2a9a2d50573c713b49d7cf78a9c6?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bb3b528566a352d06413213b8aeca087fd2a9a2d50573c713b49d7cf78a9c6?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bb3b528566a352d06413213b8aeca087fd2a9a2d50573c713b49d7cf78a9c6?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bb3b528566a352d06413213b8aeca087fd2a9a2d50573c713b49d7cf78a9c6?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bb3b528566a352d06413213b8aeca087fd2a9a2d50573c713b49d7cf78a9c6?apiKey=b4b8e1120d4040cb8e27288270221f30&"
              />
              <div className="mt-4 flex flex-col">
                <div className="text-neutral-200 text-lg font-bold max-md:max-w-full flex space-x-2 items-center">
                  <p>Web Development </p>
                  <p
                    data-tooltip-id="info3"
                    className="text-green-400 text-base"
                  >
                    detail
                  </p>
                </div>{" "}
                <div className="text-white text-2xl font-bold max-md:max-w-full">
                  <p>pChain, Blockchain as a Service</p>
                  <div className="text-sm">
                    <p>
                      tags:{" "}
                      <span className="text-white bg-blue-700 mr-1">
                        Typescript
                      </span>
                      <span className="text-white bg-green-600 mr-1">
                        NextJS
                      </span>
                      <span className="text-white bg-blue-700 mr-1">
                        ReactJS
                      </span>
                      <span className="text-white bg-green-600 mr-1">
                        Blockchain
                      </span>
                      <span className="text-white bg-blue-700 mr-1">
                        Fastify
                      </span>
                    </p>
                  </div>
                </div>{" "}
                <Tooltip id="info3">
                  <div className="w-52">
                    <p className="text-sm">
                      pChain is a SaaS (Software as a Service) build with
                      NextJs, that simplified Blockchain development using
                      various Blockchain network such as Polygon edge,
                      Hyperledger Besu, Avalance, and Ethereum Testnet. pChain
                      is complete package, there is feature for IPFS storage,
                      static storage using s3, wallet management, and smart
                      contract management. User can use our API to implement
                      Solidity API anywhere like Mobile App, Web, Desktop
                      without worrying using ethers or web3 library.
                    </p>
                  </div>
                </Tooltip>
              </div>
            </div>
            {/* 4th */}
            <div className="flex flex-col">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2a499229e359ecfa4603158c7a28e203962b1dda1a4d0ba12725ef3c3e951911?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a499229e359ecfa4603158c7a28e203962b1dda1a4d0ba12725ef3c3e951911?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a499229e359ecfa4603158c7a28e203962b1dda1a4d0ba12725ef3c3e951911?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a499229e359ecfa4603158c7a28e203962b1dda1a4d0ba12725ef3c3e951911?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a499229e359ecfa4603158c7a28e203962b1dda1a4d0ba12725ef3c3e951911?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a499229e359ecfa4603158c7a28e203962b1dda1a4d0ba12725ef3c3e951911?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a499229e359ecfa4603158c7a28e203962b1dda1a4d0ba12725ef3c3e951911?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a499229e359ecfa4603158c7a28e203962b1dda1a4d0ba12725ef3c3e951911?apiKey=b4b8e1120d4040cb8e27288270221f30&"
              />
              <div className="mt-4 flex flex-col">
                <div className="text-neutral-200 text-lg font-bold max-md:max-w-full flex space-x-2 items-center">
                  <p>Web Development </p>
                  <p
                    data-tooltip-id="info4"
                    className="text-green-400 text-base"
                  >
                    detail
                  </p>
                </div>{" "}
                <div className="text-white text-2xl font-bold max-md:max-w-full">
                  <p>Peruri Authenticator Manager</p>
                  <div className="text-sm">
                    <p>
                      tags:{" "}
                      <span className="text-white bg-blue-700 mr-1">
                        Typescript
                      </span>
                      <span className="text-white bg-green-600 mr-1">
                        NextJS
                      </span>
                      <span className="text-white bg-blue-700 mr-1">
                        ReactJS
                      </span>
                    </p>
                  </div>
                </div>{" "}
                <Tooltip id="info4">
                  <div className="w-52">
                    <p className="text-sm">
                      A website platform build with NextJS that work to upload
                      document to the Blockchain and setting up the document
                      format using pdf.js, the output from this file is PDF
                      document with user generated style pdf and qr code.
                    </p>
                  </div>
                </Tooltip>
              </div>
            </div>
            {/* 5th */}
            <div className="flex flex-col">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/46c477cd217afe3561a9c12362b30993ba076d5973a55b3d214f1ab5593d9323?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c477cd217afe3561a9c12362b30993ba076d5973a55b3d214f1ab5593d9323?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c477cd217afe3561a9c12362b30993ba076d5973a55b3d214f1ab5593d9323?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c477cd217afe3561a9c12362b30993ba076d5973a55b3d214f1ab5593d9323?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c477cd217afe3561a9c12362b30993ba076d5973a55b3d214f1ab5593d9323?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c477cd217afe3561a9c12362b30993ba076d5973a55b3d214f1ab5593d9323?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c477cd217afe3561a9c12362b30993ba076d5973a55b3d214f1ab5593d9323?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c477cd217afe3561a9c12362b30993ba076d5973a55b3d214f1ab5593d9323?apiKey=b4b8e1120d4040cb8e27288270221f30&"
              />
              <div className="mt-4 flex flex-col">
                <div className="text-neutral-200 text-lg font-bold max-md:max-w-full flex space-x-2 items-center">
                  <p>Mobile Development </p>
                  <p
                    data-tooltip-id="info5"
                    className="text-green-400 text-base"
                  >
                    detail
                  </p>
                </div>{" "}
                <div className="text-white text-2xl font-bold max-md:max-w-full">
                  <p>Mobile Peruri Authenticator</p>
                  <div className="text-sm">
                    <p>
                      tags:{" "}
                      <span className="text-white bg-blue-700 mr-1">
                        Kotlin
                      </span>
                      <span className="text-white bg-green-600 mr-1">
                        Image Processing
                      </span>
                      <span className="text-white bg-blue-700 mr-1">
                        React Native
                      </span>
                      <span className="text-white bg-green-600 mr-1">
                        Blockchain
                      </span>
                    </p>
                  </div>
                </div>{" "}
                <Tooltip id="info5">
                  <div className="w-52">
                    <p className="text-sm">
                      A Mobile app build with Kotlin that work to verify
                      document using OpenCV QR scanner or file picker with
                      Blockchain.
                    </p>
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        {/* Blog */}
        <div>
          <div className="text-green-400 text-4xl font-bold leading-[72px] tracking-wider max-md:max-w-full">
            Blog
          </div>
          <div className="flex flex-col space-y-4">
            {blogFeed &&
              blogFeed?.items?.map((item, i) => <BlogComponent item={item} />)}
          </div>
        </div>
        {/* Footer */}
        <div>
          <div className="bg-neutral-600 self-center w-[1140px] shrink-0 max-w-full h-px mt-28 max-md:mt-10" />{" "}
          <div className="self-center flex w-[589px] max-w-full items-stretch justify-between gap-5 mt-24 max-md:flex-wrap max-md:justify-center max-md:mt-10">
            <div className="text-zinc-100 text-sm font-medium self-start">
              Docs
            </div>{" "}
            <div className="text-zinc-100 text-sm font-medium self-start">
              Book Notes
            </div>{" "}
            <div className="text-zinc-100 text-sm font-medium">Polywork</div>{" "}
            <div className="text-zinc-100 text-sm font-medium">
              Starter Template
            </div>{" "}
            <div className="text-zinc-100 text-sm font-medium self-start">
              Statistics
            </div>
          </div>{" "}
          <div className="text-zinc-100 text-sm font-semibold self-center whitespace-nowrap mt-12 max-md:mt-10">
            Reach me out
          </div>{" "}
          <div className="items-stretch self-center flex w-[136px] max-w-full justify-between gap-5 mt-4 max-md:justify-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73f3449c90666829e7677eaa3b7291d03b2e2e0c1d4f9385400d36739a773723?apiKey=b4b8e1120d4040cb8e27288270221f30&"
              className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/657d75effa1ba56be10dbab4e09b05d892857bcb241e08d3d3dbb36f2564e2ab?apiKey=b4b8e1120d4040cb8e27288270221f30&"
              className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/145b2d999fe2a359658b7c167d58f2ea808a0e10fcaf1e107f8e9f645342f714?apiKey=b4b8e1120d4040cb8e27288270221f30&"
              className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
