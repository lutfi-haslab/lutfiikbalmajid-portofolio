import Link from '@docusaurus/Link';
import NavbarSearch from '../theme/Navbar/Search';
import SearchBar from '@theme/SearchBar';
import React from 'react';

export default function Home(): JSX.Element {
  const [showNavMobile, setShowNavMobile] = React.useState(false);

  return (
    <div id='home' className="bg-zinc-800 flex flex-col items-center pt-4 pb-12 px-16 max-md:px-5">
      <div className="flex w-full max-w-[1233px] flex-col mb-6 max-md:max-w-full">
        <div className="self-stretch max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
              <div className="items-stretch flex gap-0 my-auto max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cf51d4614b9df3de0b1afa110d29f9e9e58cabc5721e8169aaf817138c300f87?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf51d4614b9df3de0b1afa110d29f9e9e58cabc5721e8169aaf817138c300f87?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf51d4614b9df3de0b1afa110d29f9e9e58cabc5721e8169aaf817138c300f87?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf51d4614b9df3de0b1afa110d29f9e9e58cabc5721e8169aaf817138c300f87?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf51d4614b9df3de0b1afa110d29f9e9e58cabc5721e8169aaf817138c300f87?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf51d4614b9df3de0b1afa110d29f9e9e58cabc5721e8169aaf817138c300f87?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf51d4614b9df3de0b1afa110d29f9e9e58cabc5721e8169aaf817138c300f87?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf51d4614b9df3de0b1afa110d29f9e9e58cabc5721e8169aaf817138c300f87?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                  className="aspect-[1.53] object-contain object-center w-12 lg:w-28 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-md lg:text-2xl font-bold leading-8 tracking-wide self-center grow whitespace-nowrap my-auto">
                  Lutfi Ikbal Majid
                </div>
                <button className='lg:hidden bg-gray-700 border-none rounded-md text-white' onClick={() => setShowNavMobile(!showNavMobile)}>Menu</button>
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-stretch w-full ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-between items-center flex grow gap-5 p-2.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
                <a href='#home' className="text-white text-right text-base font-semibold leading-[81px] tracking-wider">
                  Home
                </a>
                <a href='#project' className="text-neutral-300 text-right text-base font-semibold leading-[81px] tracking-wider">
                  Projects
                </a>
                <a href='#mentorship' className="text-neutral-300 text-right text-base font-semibold leading-[81px] tracking-wider">
                  Mentorship
                </a>
                <Link href='docs/intro' className="text-neutral-300 text-right text-base font-semibold tracking-wider">
                  Extras By Author
                </Link>
                <Link href='blog' className="text-neutral-300 text-right text-base font-semibold leading-[81px] tracking-wider">
                  Blog
                </Link>
                <div>
                  {
                    // @ts-ignore
                    <NavbarSearch>
                      <SearchBar />
                    </NavbarSearch>
                  }
                </div>

              </div>
            </div>
            {/* Mobile Nav */}
            {showNavMobile && <div className="items-center flex flex-col space-y-2 lg:hidden  max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
              <a href='#home' className="text-white text-right text-base font-semibold  tracking-wider">
                Home
              </a>
              <a href='#project' className="text-neutral-300 text-right text-base font-semibold  tracking-wider">
                Projects
              </a>
              <a href='#mentorship' className="text-neutral-300 text-right text-base font-semibold  tracking-wider">
                Mentorship
              </a>
              <Link href='docs/intro' className="text-neutral-300 text-right text-base font-semibold tracking-wider">
                Extras By Author
              </Link>
              <Link href='blog' className="text-neutral-300 text-right text-base font-semibold  tracking-wider">
                Blog
              </Link>
              <div>
                {
                  // @ts-ignore
                  <NavbarSearch className='w-full items-center flex justify-center'>
                    <SearchBar />
                  </NavbarSearch>
                }
              </div>
            </div>}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-stretch mt-2.5 max-md:max-w-full">
          <div className="text-5xl font-bold [background:linear-gradient(134.01deg,_#3bf686_50.52%,_#4ca9ff_89.58%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] !bg-clip-text leading-[56px] tracking-wider w-[1029px] max-w-[1029px] ml-1 mt-24 self-start max-md:max-w-full max-md:text-4xl max-md:leading-[52px] max-md:mt-10">
            Hello, I'm Lutfi Ikbal Majid, a full-stack developer passionate about
            exploring new technologies.
          </div>
          <div className="mt-14 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[15%] max-md:w-full max-md:ml-0">
                <div className="stroke-[4px] flex flex-col justify-center items-center my-auto pl-4 pr-11 py-4 rounded-[50%] max-md:mt-10 max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d65d45250b8a2e4ce1f5200c563209467d26076cb66e8a6eb645e6863410a0b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d65d45250b8a2e4ce1f5200c563209467d26076cb66e8a6eb645e6863410a0b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d65d45250b8a2e4ce1f5200c563209467d26076cb66e8a6eb645e6863410a0b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d65d45250b8a2e4ce1f5200c563209467d26076cb66e8a6eb645e6863410a0b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d65d45250b8a2e4ce1f5200c563209467d26076cb66e8a6eb645e6863410a0b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d65d45250b8a2e4ce1f5200c563209467d26076cb66e8a6eb645e6863410a0b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d65d45250b8a2e4ce1f5200c563209467d26076cb66e8a6eb645e6863410a0b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d65d45250b8a2e4ce1f5200c563209467d26076cb66e8a6eb645e6863410a0b?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-[124px] overflow-hidden"
                  />
                </div>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[85%] ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center grow max-md:max-w-full max-md:mt-9">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-9/12 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                        <div className="text-zinc-50 text-3xl font-bold leading-[72px] tracking-wider max-md:max-w-full">
                          Biography
                        </div>{" "}
                        <div className="text-zinc-300 text-justify text-lg leading-8 tracking-wide max-md:max-w-full">
                          I'm a Full Stack Developer who started my journey in
                          college by tinkering with Arduino and C++. Originally
                          trained as an Electrical Engineer, my career shifted
                          gears in 2020 when I decided to focus on web
                          development, especially using Laravel. Since joining
                          my current workplace, I wear multiple hats as a
                          researcher and lead developer in Full Stack and
                          Blockchain projects.I'm well-versed in various
                          programming languages and frameworks. Right now, I
                          mainly work with Typescript for projects and use
                          Flutter for mobile development. I've also completed a
                          QA Bootcamp at Binar, a well-known institution in
                          Indonesia.I'm a perpetual learner, always excited to
                          explore new technologies and expand my skills.
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex flex-col my-auto max-md:mt-10">
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
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="mt-16 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch mt-7 max-md:mt-10">
                  <div className="text-green-400 text-3xl font-bold leading-[71.96px] tracking-wider">
                    What I do
                  </div>
                  <div className="text-white text-lg leading-8 tracking-wide mt-6">
                    As lead developer in my current company, i am choosing
                    decision of the stack and how the app will shipped.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-9/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center grow max-md:max-w-full max-md:mt-10 max-md:pr-5">
                  <div className="gap-5 grid grid-cols-2 lg:flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex grow flex-col justify-center max-md:mt-5">
                        <div className="bg-zinc-700 flex flex-col items-stretch w-[194px] h-[194px] px-1.5 py-9 rounded-xl">
                          <div className="justify-center text-stone-50 text-center text-base font-semibold tracking-wider whitespace-nowrap">
                            Full Stack Developer
                          </div>{" "}
                          <div className="text-stone-200 text-opacity-70 text-center text-sm leading-7 tracking-wider mt-4">
                            As full stack developer, mainly use React NextJs,
                            NestJs, and PostgreSQL
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex grow flex-col justify-center max-md:mt-5">
                        <div className="bg-zinc-700 flex flex-col items-center w-[194px] h-[194px] pt-10 pb-1.5 px-3 rounded-xl">
                          <div className="justify-center text-stone-50 text-center text-base font-semibold tracking-wider">
                            Mobile App Dev
                          </div>{" "}
                          <div className="text-stone-200 text-opacity-70 text-center text-sm tracking-wider self-stretch mt-4">
                            Developing Mobile Application with Kotlin, now i am
                            using Flutter for both iOS and Android
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex grow flex-col justify-center max-md:mt-5">
                        <div className="bg-zinc-700 flex flex-col items-center w-[194px] h-[194px] px-4 py-11 rounded-xl">
                          <div className="justify-center text-stone-50 text-center text-base font-semibold tracking-wider">
                            Blockchain Dev
                          </div>{" "}
                          <div className="text-stone-200 text-opacity-70 text-center text-sm  tracking-wider self-stretch mt-5 mb-8">
                            Developing Blockchain Application
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex grow flex-col justify-center max-md:mt-5">
                        <div className="bg-zinc-700 flex flex-col items-center w-[194px] h-[194px] px-7 py-11 rounded-xl max-md:px-5">
                          <div className="justify-center text-stone-50 text-center text-base font-semibold tracking-wider">
                            SDLC/QA
                          </div>{" "}
                          <div className="text-stone-200 text-opacity-70 text-center text-sm tracking-wider self-stretch mt-4 mb-1">
                            Maintain code, and Deploy with SDLC. I am also QA
                            dev :p
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div id='project' className="justify-center text-green-400 text-6xl font-bold leading-[72px] tracking-wider self-stretch mt-24 max-md:max-w-full max-md:text-4xl max-md:leading-[58px] max-md:mt-10">
          <span className="text-white">Project that i has been </span>
          <span className="text-green-400">done</span>
        </div>{" "}
        <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/30272052496c7f1c9876a47f2d75ba4cf41ba8a5293712019255bb64d8f64175?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/30272052496c7f1c9876a47f2d75ba4cf41ba8a5293712019255bb64d8f64175?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30272052496c7f1c9876a47f2d75ba4cf41ba8a5293712019255bb64d8f64175?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/30272052496c7f1c9876a47f2d75ba4cf41ba8a5293712019255bb64d8f64175?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/30272052496c7f1c9876a47f2d75ba4cf41ba8a5293712019255bb64d8f64175?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30272052496c7f1c9876a47f2d75ba4cf41ba8a5293712019255bb64d8f64175?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/30272052496c7f1c9876a47f2d75ba4cf41ba8a5293712019255bb64d8f64175?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/30272052496c7f1c9876a47f2d75ba4cf41ba8a5293712019255bb64d8f64175?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                className="aspect-[1.97] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-8"
              />
            </div>{" "}
            <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col pr-16 pb-2.5 max-md:max-w-full max-md:mt-8 max-md:pr-5">
                <div className="text-neutral-200 text-lg font-bold leading-6 tracking-wider max-md:max-w-full">
                  Web Development
                </div>{" "}
                <div className="text-white text-4xl font-bold leading-8 tracking-wider mt-5 max-md:max-w-full">
                  PRIfA CBDC Web suite
                </div>{" "}
                <div className="text-neutral-300 text-lg leading-8 tracking-wide mt-10 max-md:max-w-full">
                  Web application build with react as frontend and nestjs as
                  backend for prototype Central Bank digital currency, there is
                  5 website including, Central Bank Suite, Core System Suite,
                  Financial Service Provider, Merchant Suite, and Enterprise
                  Suite.
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="self-stretch mt-12 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7462ccc519660d108566f355f66cf16c7ebab11c68d2d1ffb90763a5bbafde99?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7462ccc519660d108566f355f66cf16c7ebab11c68d2d1ffb90763a5bbafde99?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7462ccc519660d108566f355f66cf16c7ebab11c68d2d1ffb90763a5bbafde99?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7462ccc519660d108566f355f66cf16c7ebab11c68d2d1ffb90763a5bbafde99?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7462ccc519660d108566f355f66cf16c7ebab11c68d2d1ffb90763a5bbafde99?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7462ccc519660d108566f355f66cf16c7ebab11c68d2d1ffb90763a5bbafde99?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7462ccc519660d108566f355f66cf16c7ebab11c68d2d1ffb90763a5bbafde99?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7462ccc519660d108566f355f66cf16c7ebab11c68d2d1ffb90763a5bbafde99?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                className="aspect-[1.97] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-8"
              />
            </div>{" "}
            <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col pr-16 py-1 max-md:max-w-full max-md:mt-8 max-md:pr-5">
                <div className="text-neutral-200 text-lg font-bold leading-6 tracking-wider max-md:max-w-full">
                  Mobile App Development
                </div>{" "}
                <div className="text-white text-4xl font-bold leading-8 tracking-wider mt-5 max-md:max-w-full">
                  PRIfA CBDC Mobile App
                </div>{" "}
                <div className="text-neutral-300 text-lg leading-8 tracking-wide mt-20 max-md:max-w-full max-md:mt-10">
                  A mobile app wallet build with flutter for end user to send
                  and receive DIDR money from CBDC and stablecoind
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="self-stretch mt-12 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f8bb3b528566a352d06413213b8aeca087fd2a9a2d50573c713b49d7cf78a9c6?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bb3b528566a352d06413213b8aeca087fd2a9a2d50573c713b49d7cf78a9c6?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bb3b528566a352d06413213b8aeca087fd2a9a2d50573c713b49d7cf78a9c6?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bb3b528566a352d06413213b8aeca087fd2a9a2d50573c713b49d7cf78a9c6?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bb3b528566a352d06413213b8aeca087fd2a9a2d50573c713b49d7cf78a9c6?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bb3b528566a352d06413213b8aeca087fd2a9a2d50573c713b49d7cf78a9c6?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bb3b528566a352d06413213b8aeca087fd2a9a2d50573c713b49d7cf78a9c6?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8bb3b528566a352d06413213b8aeca087fd2a9a2d50573c713b49d7cf78a9c6?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                className="aspect-[1.97] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-8"
              />
            </div>{" "}
            <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col py-1 max-md:max-w-full max-md:mt-8">
                <div className="text-neutral-200 text-lg font-bold leading-6 tracking-wider max-md:max-w-full">
                  Web Development
                </div>{" "}
                <div className="text-white text-4xl font-bold leading-8 tracking-wider mt-5 max-md:max-w-full">
                  pChain, Blockchain as a Service
                </div>{" "}
                <div className="text-neutral-300 text-lg leading-8 tracking-wide mt-4 max-md:max-w-full">
                  pChain is a SaaS (Software as a Service) build with NextJs,
                  that simplified Blockchain development using various
                  Blockchain network such as Polygon edge, Hyperledger Besu,
                  Avalance, and Ethereum Testnet. pChain is complete package,
                  there is feature for IPFS storage, static storage using s3,
                  wallet management, and smart contract management. User can use
                  our API to implement Solidity API anywhere like Mobile App,
                  Web, Desktop without worrying using ethers or web3 library.
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="self-stretch mt-12 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2a499229e359ecfa4603158c7a28e203962b1dda1a4d0ba12725ef3c3e951911?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a499229e359ecfa4603158c7a28e203962b1dda1a4d0ba12725ef3c3e951911?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a499229e359ecfa4603158c7a28e203962b1dda1a4d0ba12725ef3c3e951911?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a499229e359ecfa4603158c7a28e203962b1dda1a4d0ba12725ef3c3e951911?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a499229e359ecfa4603158c7a28e203962b1dda1a4d0ba12725ef3c3e951911?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a499229e359ecfa4603158c7a28e203962b1dda1a4d0ba12725ef3c3e951911?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a499229e359ecfa4603158c7a28e203962b1dda1a4d0ba12725ef3c3e951911?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a499229e359ecfa4603158c7a28e203962b1dda1a4d0ba12725ef3c3e951911?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                className="aspect-[1.97] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-8"
              />
            </div>{" "}
            <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col py-1 max-md:max-w-full max-md:mt-8">
                <div className="text-neutral-200 text-lg font-bold leading-6 tracking-wider max-md:max-w-full">
                  Web Development
                </div>{" "}
                <div className="text-white text-4xl font-bold leading-8 tracking-wider mt-5 max-md:max-w-full">
                  Peruri Authenticator Manager
                </div>{" "}
                <div className="text-neutral-300 text-lg leading-8 tracking-wide mt-12 max-md:max-w-full max-md:mt-10">
                  A website platform build with NextJS that work to upload
                  document to the Blockchain and setting up the document format
                  using pdf.js, the output from this file is PDF document with
                  user generated style pdf and qr code
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="self-stretch mt-12 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/46c477cd217afe3561a9c12362b30993ba076d5973a55b3d214f1ab5593d9323?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c477cd217afe3561a9c12362b30993ba076d5973a55b3d214f1ab5593d9323?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c477cd217afe3561a9c12362b30993ba076d5973a55b3d214f1ab5593d9323?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c477cd217afe3561a9c12362b30993ba076d5973a55b3d214f1ab5593d9323?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c477cd217afe3561a9c12362b30993ba076d5973a55b3d214f1ab5593d9323?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c477cd217afe3561a9c12362b30993ba076d5973a55b3d214f1ab5593d9323?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c477cd217afe3561a9c12362b30993ba076d5973a55b3d214f1ab5593d9323?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c477cd217afe3561a9c12362b30993ba076d5973a55b3d214f1ab5593d9323?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                className="aspect-[1.97] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-8"
              />
            </div>{" "}
            <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col my-auto pb-1.5 max-md:max-w-full max-md:mt-10">
                <div className="text-neutral-200 text-lg font-bold leading-6 tracking-wider max-md:max-w-full">
                  Mobile App Development
                </div>{" "}
                <div className="text-white text-4xl font-bold leading-8 tracking-wider max-w-[643px] mt-5 max-md:max-w-full max-md:mr-1.5">
                  Mobile Peruri Authenticator
                </div>{" "}
                <div className="text-neutral-300 text-lg leading-8 tracking-wide mt-16 max-md:max-w-full max-md:mt-10">
                  A Mobile app build with Kotlin that work to verify document
                  using OpenCV QR scanner or file picker with Blockchain
                </div>
              </div>
            </div>
          </div>
        </div>{" "}

        <div id='mentorship' className="self-center w-full max-w-[1118px] mt-28 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="justify-center items-stretch flex flex-col max-md:mt-10">
                <div className="justify-center text-white text-5xl font-bold leading-[56px] tracking-wider max-md:text-4xl max-md:leading-[52px]">
                  Request Mentorship
                </div>{" "}
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dbdd7c31408cd01c506a034af31b21f80128c6d99074561ad1eb5d8ad8f0c3e3?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbdd7c31408cd01c506a034af31b21f80128c6d99074561ad1eb5d8ad8f0c3e3?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbdd7c31408cd01c506a034af31b21f80128c6d99074561ad1eb5d8ad8f0c3e3?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbdd7c31408cd01c506a034af31b21f80128c6d99074561ad1eb5d8ad8f0c3e3?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbdd7c31408cd01c506a034af31b21f80128c6d99074561ad1eb5d8ad8f0c3e3?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbdd7c31408cd01c506a034af31b21f80128c6d99074561ad1eb5d8ad8f0c3e3?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbdd7c31408cd01c506a034af31b21f80128c6d99074561ad1eb5d8ad8f0c3e3?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbdd7c31408cd01c506a034af31b21f80128c6d99074561ad1eb5d8ad8f0c3e3?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                  className="aspect-[0.98] object-contain object-center w-[298px] overflow-hidden self-center max-w-full mt-6"
                />
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="justify-center max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[15%] max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fe08454815e147219b387f424064ce072c4e8cf9f7ab92fca8a136413ba76f3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe08454815e147219b387f424064ce072c4e8cf9f7ab92fca8a136413ba76f3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe08454815e147219b387f424064ce072c4e8cf9f7ab92fca8a136413ba76f3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe08454815e147219b387f424064ce072c4e8cf9f7ab92fca8a136413ba76f3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe08454815e147219b387f424064ce072c4e8cf9f7ab92fca8a136413ba76f3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe08454815e147219b387f424064ce072c4e8cf9f7ab92fca8a136413ba76f3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe08454815e147219b387f424064ce072c4e8cf9f7ab92fca8a136413ba76f3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe08454815e147219b387f424064ce072c4e8cf9f7ab92fca8a136413ba76f3a?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                        className="aspect-square object-contain object-center w-[120px] items-start overflow-hidden shrink-0 max-w-full my-auto max-md:mt-8"
                      />
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[80%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="justify-center items-stretch flex grow flex-col rounded-xl max-md:max-w-full">
                        <div className="bg-zinc-700 flex flex-col pl-11 pr-16 pt-1.5 pb-5 rounded-xl items-start max-md:max-w-full max-md:px-5">
                          <div className="items-stretch flex w-[527px] max-w-full flex-col px-9 max-md:px-5">
                            <div className="justify-center text-white text-3xl font-bold leading-[72px] tracking-wider max-md:max-w-full">
                              Mentorship 1 : 1
                            </div>{" "}
                            <div className="text-stone-300 text-lg leading-8 tracking-wide max-md:max-w-full">
                              Video Call 1 : 1 dengan mentor untuk berdiskusi,
                              bertanya dan konsultasi seputar mentorship
                              frontend atau hal lainnya
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="justify-center mt-5 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[15%] max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a88e2aa6f83b610bb049cc82736d1a4a48e26e0e2d77097760cd1dec32c1df8d?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a88e2aa6f83b610bb049cc82736d1a4a48e26e0e2d77097760cd1dec32c1df8d?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a88e2aa6f83b610bb049cc82736d1a4a48e26e0e2d77097760cd1dec32c1df8d?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a88e2aa6f83b610bb049cc82736d1a4a48e26e0e2d77097760cd1dec32c1df8d?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a88e2aa6f83b610bb049cc82736d1a4a48e26e0e2d77097760cd1dec32c1df8d?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a88e2aa6f83b610bb049cc82736d1a4a48e26e0e2d77097760cd1dec32c1df8d?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a88e2aa6f83b610bb049cc82736d1a4a48e26e0e2d77097760cd1dec32c1df8d?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a88e2aa6f83b610bb049cc82736d1a4a48e26e0e2d77097760cd1dec32c1df8d?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                        className="aspect-square object-contain object-center w-[120px] overflow-hidden shrink-0 max-w-full my-auto max-md:mt-8"
                      />
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[80%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="justify-center items-stretch flex grow flex-col rounded-xl max-md:max-w-full">
                        <div className="bg-zinc-700 flex flex-col pl-11 pr-16 pt-1.5 pb-5 rounded-xl items-start max-md:max-w-full max-md:px-5">
                          <div className="items-stretch flex w-[527px] max-w-full flex-col px-9 max-md:px-5">
                            <div className="justify-center text-white text-3xl font-bold leading-[72px] tracking-wider max-md:max-w-full">
                              Terarah{" "}
                            </div>{" "}
                            <div className="text-stone-300 text-lg leading-8 tracking-wide max-md:max-w-full">
                              Video Call 1 : 1 dengan mentor untuk berdiskusi,
                              bertanya dan konsultasi seputar mentorship
                              frontend atau hal lainnya
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="justify-center mt-5 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[15%] max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b62da4f385bdc9598006b3130dc183330217f09593869c175bb0a81518ebfb43?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b62da4f385bdc9598006b3130dc183330217f09593869c175bb0a81518ebfb43?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b62da4f385bdc9598006b3130dc183330217f09593869c175bb0a81518ebfb43?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b62da4f385bdc9598006b3130dc183330217f09593869c175bb0a81518ebfb43?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b62da4f385bdc9598006b3130dc183330217f09593869c175bb0a81518ebfb43?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b62da4f385bdc9598006b3130dc183330217f09593869c175bb0a81518ebfb43?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b62da4f385bdc9598006b3130dc183330217f09593869c175bb0a81518ebfb43?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b62da4f385bdc9598006b3130dc183330217f09593869c175bb0a81518ebfb43?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                        className="aspect-square object-contain object-center w-[120px] overflow-hidden shrink-0 max-w-full my-auto max-md:mt-8"
                      />
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[80%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="justify-center items-stretch flex grow flex-col rounded-xl max-md:max-w-full">
                        <div className="bg-zinc-700 flex flex-col pl-11 pr-16 pt-1.5 pb-12 rounded-xl items-start max-md:max-w-full max-md:px-5">
                          <div className="items-stretch flex w-[527px] max-w-full flex-col px-9 max-md:px-5">
                            <div className="justify-center text-white text-3xl font-bold leading-[72px] tracking-wider max-md:max-w-full">
                              Silabus
                            </div>{" "}
                            <div className="text-stone-300 text-lg leading-8 tracking-wide max-md:max-w-full">
                              Silabus praktis, fundamental yang bisa
                              diimplementasikan berdasarkan studi kasus
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
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
  );
}
