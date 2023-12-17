import Link from '@docusaurus/Link';
import NavbarSearch from '../theme/Navbar/Search';
import SearchBar from '@theme/SearchBar';
import React from 'react';

export default function Home(): JSX.Element {
  const [showNavMobile, setShowNavMobile] = React.useState(false);

  return (
    <div id='home' className="bg-zinc-800 flex flex-col pt-4 pb-12 px-20 max-md:px-5">
      <div className="self-stretch mx-5 max-md:max-w-full max-md:mr-2.5 max-md:pr-5">
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
          <div className="hidden lg:flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-between items-center flex grow gap-5 p-2.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
              <a href='#home' className="text-white text-right text-base font-semibold leading-[81px] tracking-wider">
                Home
              </a>
              <a href='#portofolio' className="text-neutral-300 text-right text-base font-semibold leading-[81px] tracking-wider">
                Portfolio
              </a>
              <a href='#snippet' className="text-neutral-300 text-center text-base font-semibold leading-[81px] tracking-wider">
                Snippet
              </a>
              <a href='#mentorship' className="text-neutral-300 text-right text-base font-semibold leading-[81px] tracking-wider">
                Mentorship
              </a>
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
          {/* Mobile */}
          {showNavMobile && <div className="items-center flex flex-col space-y-2 lg:hidden  max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
            <a href='#home' className="text-white text-right text-base font-semibold  tracking-wider">
              Home
            </a>
            <a href='#portofolio' className="text-neutral-300 text-right text-base font-semibold  tracking-wider">
              Portfolio
            </a>
            <a href='#snippet' className="text-neutral-300 text-center text-base font-semibold  tracking-wider">
              Snippet
            </a>
            <a href='#mentorship' className="text-neutral-300 text-right text-base font-semibold  tracking-wider">
              Mentorship
            </a>
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
      <div className="text-5xl font-bold [background:linear-gradient(134.01deg,_#3bf686_50.52%,_#4ca9ff_89.58%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] !bg-clip-text leading-[56px] tracking-wider w-[1029px] max-w-[1029px] ml-1 mt-24 self-start max-md:max-w-full max-md:text-4xl max-md:leading-[52px] max-md:mt-10">
        Hello, I'm Lutfi Ikbal Majid, a full-stack developer passionate about
        exploring new technologies.
      </div>
      <div className="justify-center w-[972px] max-w-full ml-1 mt-28 self-start max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[17%] max-md:w-full max-md:ml-0">
            <div className="stroke-[4px] flex flex-col justify-center items-center mt-3.5 p-4 rounded-[50%] max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a25b7e1554f32bd006d29dd94926387829a21378eae9c9e5173223d0141e82d4?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a25b7e1554f32bd006d29dd94926387829a21378eae9c9e5173223d0141e82d4?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a25b7e1554f32bd006d29dd94926387829a21378eae9c9e5173223d0141e82d4?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a25b7e1554f32bd006d29dd94926387829a21378eae9c9e5173223d0141e82d4?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a25b7e1554f32bd006d29dd94926387829a21378eae9c9e5173223d0141e82d4?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a25b7e1554f32bd006d29dd94926387829a21378eae9c9e5173223d0141e82d4?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a25b7e1554f32bd006d29dd94926387829a21378eae9c9e5173223d0141e82d4?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a25b7e1554f32bd006d29dd94926387829a21378eae9c9e5173223d0141e82d4?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                className="aspect-square object-contain object-center w-[124px] overflow-hidden"
              />
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[83%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center grow max-md:max-w-full max-md:mt-9">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[72%] max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                    <div className="text-zinc-50 text-3xl font-bold leading-[72px] tracking-wider max-md:max-w-full">
                      Biography
                    </div>{" "}
                    <div className="text-green-300 text-lg leading-8 tracking-wide max-md:max-w-full">
                      <span className=" text-zinc-300">
                        Getting Buff +1 for learning, Buff +2 for documentation
                        and more buff on managing team. Exicited on{" "}
                      </span>
                      <span className="font-bold text-blue-400">React</span>
                      <span className=" text-zinc-300">, </span>
                      <span className="font-bold text-cyan-300">Lead</span>
                      <span className=" text-zinc-300"> and </span>
                      <span className="font-bold text-green-300">Agile</span>
                      <span className=" text-zinc-300">.</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex flex-col my-auto max-md:mt-10">
                    <div className="text-zinc-50 text-3xl font-bold leading-[72px] tracking-wider whitespace-nowrap">
                      Lets connect
                    </div>{" "}
                    <div className="flex gap-4 mt-2 pr-16 items-start max-md:pr-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1e5790329ce4b3dfc7e53cd4e4d564dbc1daf920ce2c99276de7204892e912?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                        className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ee6d1f06ea8498e5ed1d8d06a7b0313ee3bd738821fec50f3dbc3f10ad5d905?apiKey=b4b8e1120d4040cb8e27288270221f30&"
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
      <div id='portofolio' className="items-stretch self-center flex w-full max-w-[1125px] justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
        <div className="justify-center max-md:max-w-full">
          <div className="self-center  flex grow basis-[0%] flex-col items-stretch my-auto max-md:max-w-full">
            <div className="text-white text-3xl font-bold leading-[71.96px] tracking-wider max-md:max-w-full">
              What I do
            </div>{" "}
            <div className="text-green-400 text-lg leading-8 tracking-wide bg-clip-text mt-6 max-md:max-w-full">
              <span className="text-white">
                Build and maintain websites,{" "}
              </span>
              <span className="font-bold text-green-400">frontend dev </span>
              <span className=" text-white">
                also have a mentorship called{" "}
              </span>
              <span className="font-bold">MOFON</span>
              <span className=" text-white">
                . My motto is Beauty and function in equal measure as priority.
              </span>
            </div>
          </div>
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-4/12 max-md:w-full max-md:ml-0">
              <div className="justify-center items-stretch flex grow flex-col py-9 max-md:mt-5">
                <div className="bg-zinc-700 flex flex-col items-stretch pl-7 pr-4 pb-3.5 rounded-xl max-md:pl-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d4e1aaaa61f3c5e5e25e9ea64bcd30d7ad5b14b306a6ffa384b6ef169bc4b6e?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-[72px] overflow-hidden self-center z-[1] mt-0 max-w-full"
                  />{" "}
                  <div className="justify-center text-stone-50 text-base font-semibold leading-[72px] tracking-wider self-center whitespace-nowrap mt-9">
                    Web Development
                  </div>{" "}
                  <div className="text-stone-200 text-opacity-70 text-center text-sm leading-7 tracking-wider mt-6">
                    You will receive a customized plan for your fitness journey,
                    and lots of support.
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-4/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-stretch flex grow flex-col py-9 max-md:mt-5">
                <div className="bg-zinc-700 flex flex-col items-stretch pl-7 pr-4 pb-5 rounded-xl max-md:pl-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/78ac5157b97ebf7ef6a303cc48e757969da9ef88b8026bb7878567bbe7b75e18?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-[72px] overflow-hidden self-center z-[1] mt-0 max-w-full"
                  />{" "}
                  <div className="justify-center text-stone-50 text-base font-semibold leading-[72px] tracking-wider self-center whitespace-nowrap mt-7">
                    UX Research
                  </div>{" "}
                  <div className="text-stone-200 text-opacity-70 text-center text-sm leading-7 tracking-wider mt-7">
                    You will receive a customized plan for your fitness journey,
                    and lots of support.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/44074d717bff10dee46ed00dd3354f07313841c7d8bce575782fad275daf0b22?apiKey=b4b8e1120d4040cb8e27288270221f30&"
          className="aspect-[1.12] object-contain object-center w-[38px] fill-zinc-100 overflow-hidden self-center shrink-0 max-w-full my-auto"
        />
      </div>{" "}
      <div className="justify-center text-green-400 text-6xl font-bold leading-[72px] tracking-wider max-w-[1199px] mr-5 mt-16 self-end max-md:max-w-full max-md:text-4xl max-md:leading-[58px] max-md:mr-2.5 max-md:mt-10">
        <span className="text-white">Project that i has been </span>
        <span className="text-green-400">done</span>
      </div>{" "}
      <div className="self-center w-full max-w-[1199px] mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex min-h-[282px] grow pl-12 pr-20 pt-5 pb-12 items-start max-md:max-w-full max-md:mt-8 max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/775465dbb95cc2b965be74a84bb478fcd3b4e167963265c6238ee1e6c5f331f9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/775465dbb95cc2b965be74a84bb478fcd3b4e167963265c6238ee1e6c5f331f9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/775465dbb95cc2b965be74a84bb478fcd3b4e167963265c6238ee1e6c5f331f9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/775465dbb95cc2b965be74a84bb478fcd3b4e167963265c6238ee1e6c5f331f9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/775465dbb95cc2b965be74a84bb478fcd3b4e167963265c6238ee1e6c5f331f9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/775465dbb95cc2b965be74a84bb478fcd3b4e167963265c6238ee1e6c5f331f9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/775465dbb95cc2b965be74a84bb478fcd3b4e167963265c6238ee1e6c5f331f9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/775465dbb95cc2b965be74a84bb478fcd3b4e167963265c6238ee1e6c5f331f9?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/218d4db6cb727dab75e37ee6afdad11fd25d69286c824cb7472015858238c3ee?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                className="aspect-square object-contain object-center w-[25px] overflow-hidden max-w-full"
              />{" "}
              <div className="relative flex w-[45px] max-w-full items-stretch gap-2 mt-8 mb-24 pr-1.5 max-md:mb-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/89aedb724fa2432e2fef0799a66816ee05ee748955280aa538fec8081cde1fa1?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aedb724fa2432e2fef0799a66816ee05ee748955280aa538fec8081cde1fa1?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aedb724fa2432e2fef0799a66816ee05ee748955280aa538fec8081cde1fa1?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aedb724fa2432e2fef0799a66816ee05ee748955280aa538fec8081cde1fa1?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aedb724fa2432e2fef0799a66816ee05ee748955280aa538fec8081cde1fa1?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aedb724fa2432e2fef0799a66816ee05ee748955280aa538fec8081cde1fa1?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aedb724fa2432e2fef0799a66816ee05ee748955280aa538fec8081cde1fa1?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aedb724fa2432e2fef0799a66816ee05ee748955280aa538fec8081cde1fa1?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />{" "}
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/38dde51f83a0012ec23f5e6540d57514285616e623e02be4ba75e43bce31c55a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/38dde51f83a0012ec23f5e6540d57514285616e623e02be4ba75e43bce31c55a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38dde51f83a0012ec23f5e6540d57514285616e623e02be4ba75e43bce31c55a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/38dde51f83a0012ec23f5e6540d57514285616e623e02be4ba75e43bce31c55a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/38dde51f83a0012ec23f5e6540d57514285616e623e02be4ba75e43bce31c55a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38dde51f83a0012ec23f5e6540d57514285616e623e02be4ba75e43bce31c55a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/38dde51f83a0012ec23f5e6540d57514285616e623e02be4ba75e43bce31c55a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/38dde51f83a0012ec23f5e6540d57514285616e623e02be4ba75e43bce31c55a?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto pb-2.5 max-md:max-w-full max-md:mt-10">
              <div className="text-neutral-200 text-lg font-bold leading-6 tracking-wider max-md:max-w-full">
                Web Development
              </div>{" "}
              <div className="text-white text-5xl font-bold leading-[56px] tracking-wider mt-7 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                Bolder Landingpage
              </div>{" "}
              <div className="text-neutral-300 text-lg leading-8 tracking-wide mt-10 max-md:max-w-full">
                Serrow restructured and designed core pages, creating
                interactive elements that put users in control and allowed them
                to discover the information needed to make a decision.
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="self-center w-full max-w-[1199px] mt-12 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex min-h-[282px] grow pl-12 pr-20 pt-5 pb-12 items-start max-md:max-w-full max-md:mt-8 max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/775465dbb95cc2b965be74a84bb478fcd3b4e167963265c6238ee1e6c5f331f9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/775465dbb95cc2b965be74a84bb478fcd3b4e167963265c6238ee1e6c5f331f9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/775465dbb95cc2b965be74a84bb478fcd3b4e167963265c6238ee1e6c5f331f9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/775465dbb95cc2b965be74a84bb478fcd3b4e167963265c6238ee1e6c5f331f9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/775465dbb95cc2b965be74a84bb478fcd3b4e167963265c6238ee1e6c5f331f9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/775465dbb95cc2b965be74a84bb478fcd3b4e167963265c6238ee1e6c5f331f9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/775465dbb95cc2b965be74a84bb478fcd3b4e167963265c6238ee1e6c5f331f9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/775465dbb95cc2b965be74a84bb478fcd3b4e167963265c6238ee1e6c5f331f9?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/218d4db6cb727dab75e37ee6afdad11fd25d69286c824cb7472015858238c3ee?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                className="aspect-square object-contain object-center w-[25px] overflow-hidden max-w-full"
              />{" "}
              <div className="relative flex w-[45px] max-w-full items-stretch gap-2 mt-8 mb-24 pr-1.5 max-md:mb-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/89aedb724fa2432e2fef0799a66816ee05ee748955280aa538fec8081cde1fa1?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aedb724fa2432e2fef0799a66816ee05ee748955280aa538fec8081cde1fa1?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aedb724fa2432e2fef0799a66816ee05ee748955280aa538fec8081cde1fa1?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aedb724fa2432e2fef0799a66816ee05ee748955280aa538fec8081cde1fa1?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aedb724fa2432e2fef0799a66816ee05ee748955280aa538fec8081cde1fa1?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aedb724fa2432e2fef0799a66816ee05ee748955280aa538fec8081cde1fa1?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aedb724fa2432e2fef0799a66816ee05ee748955280aa538fec8081cde1fa1?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aedb724fa2432e2fef0799a66816ee05ee748955280aa538fec8081cde1fa1?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />{" "}
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/38dde51f83a0012ec23f5e6540d57514285616e623e02be4ba75e43bce31c55a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/38dde51f83a0012ec23f5e6540d57514285616e623e02be4ba75e43bce31c55a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38dde51f83a0012ec23f5e6540d57514285616e623e02be4ba75e43bce31c55a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/38dde51f83a0012ec23f5e6540d57514285616e623e02be4ba75e43bce31c55a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/38dde51f83a0012ec23f5e6540d57514285616e623e02be4ba75e43bce31c55a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38dde51f83a0012ec23f5e6540d57514285616e623e02be4ba75e43bce31c55a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/38dde51f83a0012ec23f5e6540d57514285616e623e02be4ba75e43bce31c55a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/38dde51f83a0012ec23f5e6540d57514285616e623e02be4ba75e43bce31c55a?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col pb-2.5 max-md:max-w-full max-md:mt-8">
              <div className="text-neutral-200 text-lg font-bold leading-6 tracking-wider max-md:max-w-full">
                Web Development
              </div>{" "}
              <div className="text-white text-5xl font-bold leading-[56px] tracking-wider mt-7 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                Kerja Mantul Education Management
              </div>{" "}
              <div className="text-neutral-300 text-lg leading-8 tracking-wide mt-8 max-md:max-w-full">
                Serrow restructured and designed core pages, creating
                interactive elements that put users in control and allowed them
                to discover the information needed to make a decision.
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div id='snippet' className="text-white text-5xl font-bold leading-[56.16px] tracking-wider max-w-[1226px] self-center mt-12 max-md:max-w-full max-md:text-4xl max-md:mt-10">
        Code Snippet
      </div>{" "}
      <div className="text-white text-lg font-bold leading-6 tracking-wider max-w-[1226px] self-center mt-2.5 max-md:max-w-full">
        Search code snippet
      </div>
      <div className="bg-gray-700 self-center flex w-full max-w-[1140px] items-center justify-between gap-5 mt-7 pl-9 pr-7 py-6 rounded-xl max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <input type='text' placeholder='Type your favorite snippet here, hehehe .....' className="text-neutral-400 bg-gray-700 border-none text-lg leading-8 tracking-wide grow shrink basis-auto my-auto" />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b7a092881813bfc6f4c63387462317d6c01a82228d68acd214e32301b75429c?apiKey=b4b8e1120d4040cb8e27288270221f30&"
          className="aspect-square object-contain object-center w-[37px] overflow-hidden self-stretch shrink-0 max-w-full"
        />
      </div>{" "}
      <div className="self-center w-full max-w-[1140px] mt-10 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col bg-gray-700 rounded-md items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="grow w-full pl-10 pr-14 pt-12 pb-6 rounded-3xl max-md:max-w-full max-md:mt-8 max-md:px-5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[73%] max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch max-md:mt-10">
                    <div className="text-white text-3xl font-bold leading-[71.96px] tracking-wider">
                      Nextjs Starter
                    </div>{" "}
                    <div className="text-white text-lg leading-8 tracking-wide whitespace-nowrap mt-8">
                      A dead simple for nextjs project.
                    </div>{" "}
                    <div className="flex justify-between gap-4 mt-24 pr-20 items-start max-md:mt-10 max-md:pr-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                        className="aspect-square object-contain object-center w-[39px] overflow-hidden shrink-0 max-w-full"
                      />{" "}
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                        className="aspect-square object-contain object-center w-[39px] overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow items-stretch gap-1 mt-44 max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/527ed215511e17a28db605ba1d87ec8609743afb3f3626803875d3839abcf974?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                      className="aspect-square object-contain object-center w-[39px] overflow-hidden shrink-0 max-w-full"
                    />{" "}
                    <div className="text-white text-lg leading-8 tracking-wide self-center grow whitespace-nowrap my-auto">
                      8 Stars
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch bg-gray-700 rounded-md w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch w-full pt-12 pb-6 px-10 rounded-3xl max-md:max-w-full max-md:mt-8 max-md:px-5">
              <div className="text-white text-3xl font-bold leading-[71.96px] tracking-wider max-md:max-w-full">
                Frontend Starter Kit
              </div>{" "}
              <div className="text-white text-lg leading-8 tracking-wide mt-9 max-md:max-w-full">
                A dead simple for html 5 boilerplate project. Included setup for
                minify css, html minify, SEO setting.
              </div>{" "}
              <div className="flex w-full justify-between gap-5 mt-14 pr-3.5 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="flex gap-4 items-start max-md:justify-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                  />
                </div>{" "}
                <div className="flex items-stretch gap-1">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/527ed215511e17a28db605ba1d87ec8609743afb3f3626803875d3839abcf974?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-[39px] overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <div className="text-white text-lg leading-8 tracking-wide self-center grow whitespace-nowrap my-auto">
                    12 Stars
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="self-center w-full  max-w-[1140px] mt-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch bg-gray-700 rounded-md w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch w-full pt-12 pb-6 px-10 rounded-3xl max-md:max-w-full max-md:mt-8 max-md:px-5">
              <div className="text-white text-3xl font-bold leading-[71.96px] tracking-wider max-md:max-w-full">
                Nextjs Starter 2.0
              </div>{" "}
              <div className="text-white text-lg leading-8 tracking-wide mt-8 max-md:max-w-full">
                A dead simple for nextjs project with firebase setup.
              </div>{" "}
              <div className="flex w-full items-stretch justify-between gap-5 mt-24 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="flex justify-between gap-4 items-start">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-[39px] overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-[39px] overflow-hidden shrink-0 max-w-full"
                  />
                </div>{" "}
                <div className="flex items-stretch gap-1 self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/527ed215511e17a28db605ba1d87ec8609743afb3f3626803875d3839abcf974?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-[39px] overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <div className="text-white text-lg leading-8 tracking-wide self-center grow whitespace-nowrap my-auto">
                    89 Stars
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch bg-gray-700 rounded-md w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch w-full pt-12 pb-6 px-10 rounded-3xl max-md:max-w-full max-md:mt-8 max-md:px-5">
              <div className="text-white text-3xl font-bold leading-[71.96px] tracking-wider max-md:max-w-full">
                Mobile Web Starter Kit
              </div>{" "}
              <div className="text-white text-lg leading-8 tracking-wide mt-9 max-md:max-w-full">
                A dead simple for html 5 boilerplate project. Included setup for
                minify css, html minify, SEO setting.
              </div>{" "}
              <div className="flex w-full justify-between gap-5 mt-14 pr-3 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="flex gap-4 items-start max-md:justify-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                  />
                </div>{" "}
                <div className="flex items-stretch gap-1">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/527ed215511e17a28db605ba1d87ec8609743afb3f3626803875d3839abcf974?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-[39px] overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <div className="text-white text-lg leading-8 tracking-wide self-center grow whitespace-nowrap my-auto">
                    22 Stars
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="self-center w-full max-w-[1140px] mt-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch bg-gray-700 rounded-md w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch w-full pt-12 pb-6 px-10 rounded-3xl max-md:max-w-full max-md:mt-8 max-md:px-5">
              <div className="text-white text-3xl font-bold leading-[71.96px] tracking-wider max-md:max-w-full">
                Nextjs Starter 2.0
              </div>{" "}
              <div className="text-white text-lg leading-8 tracking-wide mt-8 max-md:max-w-full">
                A dead simple for nextjs project with firebase setup.
              </div>{" "}
              <div className="flex w-full items-stretch justify-between gap-5 mt-24 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="flex justify-between gap-4 items-start">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1aa265148d962a24c707bb615869a620a96058565113854112eac97175c9?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-[39px] overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/60581113201d2d6cae974e68a06b656e669afe7e0b29d289db6776684ca06e3a?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-[39px] overflow-hidden shrink-0 max-w-full"
                  />
                </div>{" "}
                <div className="flex items-stretch gap-1 self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/527ed215511e17a28db605ba1d87ec8609743afb3f3626803875d3839abcf974?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-[39px] overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <div className="text-white text-lg leading-8 tracking-wide self-center grow whitespace-nowrap my-auto">
                    89 Stars
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch bg-gray-700 rounded-md w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch w-full pt-12 pb-6 px-10 rounded-3xl max-md:max-w-full max-md:mt-8 max-md:px-5">
              <div className="text-white text-3xl font-bold leading-[71.96px] tracking-wider max-md:max-w-full">
                Mobile Web Starter Kit
              </div>{" "}
              <div className="text-white text-lg leading-8 tracking-wide mt-9 max-md:max-w-full">
                A dead simple for html 5 boilerplate project. Included setup for
                minify css, html minify, SEO setting.
              </div>{" "}
              <div className="flex w-full justify-between gap-5 mt-14 pr-3 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="flex gap-4 items-start max-md:justify-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4e191620178fecb49e12bdd70f0100e0a7e365628becc497810731543fe5e15?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f4cb457ec028f64ca814c7fafce20f7655b2a133a8d266cc95e9fa5fc8aa2?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc2339273b0f6d3e4d966d275fb4da45990d219bb3921365260749c006e4bd7b?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                  />
                </div>{" "}
                <div className="flex items-stretch gap-1">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/527ed215511e17a28db605ba1d87ec8609743afb3f3626803875d3839abcf974?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                    className="aspect-square object-contain object-center w-[39px] overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <div className="text-white text-lg leading-8 tracking-wide self-center grow whitespace-nowrap my-auto">
                    22 Stars
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="self-center w-full max-w-[1140px] mt-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch bg-gray-700 rounded-md w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch w-full pl-10 pr-16 py-12 rounded-3xl max-md:max-w-full max-md:mt-8 max-md:px-5">
              <div className="text-white text-3xl font-bold leading-[71.96px] tracking-wider max-md:max-w-full">
                Nextjs Starter 2.0
              </div>{" "}
              <div className="text-white text-lg leading-8 tracking-wide mt-8 mb-2 max-md:max-w-full">
                A dead simple for nextjs project with firebase setup.
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch bg-gray-700 rounded-md w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch w-full pt-12 pb-6 px-10 rounded-3xl max-md:max-w-full max-md:mt-8 max-md:px-5">
              <div className="text-white text-3xl font-bold leading-[71.96px] tracking-wider max-md:max-w-full">
                Mobile Web Starter Kit
              </div>{" "}
              <div className="text-white text-lg leading-8 tracking-wide mt-9 max-md:max-w-full">
                A dead simple for html 5 boilerplate project. Included setup for
                minify css, html minify, SEO setting.
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div id='mentorship' className="self-center w-full max-w-[1140px] mt-20 pb-4 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col mt-4 pr-7 pb-1.5 max-md:max-w-full max-md:mt-8 max-md:pr-5">
              <div className="justify-center text-white text-5xl font-bold leading-[56.16px] tracking-wider max-md:max-w-full max-md:text-4xl max-md:-mr-1">
                <p>Mentorship</p>
              </div>{" "}
              <div className="text-green-400 text-lg leading-8 tracking-wide underline mt-12 max-md:max-w-full max-md:mt-10">
                <span className=" text-gray-100">
                  Menghabiskan banyak waktu untuk belajar{" "}
                </span>
                <span className="font-bold text-green-400">sendiri</span>
                <span className=" text-gray-100"> dan tetap merasa </span>
                <span className="font-bold text-green-400">stuck</span>
                <span className=" text-gray-100">
                  ? <br />
                  <br />
                </span>
              </div>{" "}
              <div className="flex justify-between gap-4 mt-7 items-start max-md:max-w-full max-md:flex-wrap">
                <div className="flex w-[5px] shrink-0 h-[77px] flex-col" />{" "}
                <div className="text-gray-100 text-lg leading-8 tracking-wide self-stretch grow shrink basis-auto max-md:max-w-full">
                  Mentorship Frontend ini menjadi jawaban atas permasalahanmu.
                  Karena disini, kamu bakal merasakan mentoring yang lebih
                  personal
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-zinc-700 w-full pl-14 pr-9 pt-12 pb-4 rounded-xl max-md:max-w-full max-md:mt-4 max-md:px-5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex flex-col max-md:mt-10">
                    <div className="items-center flex justify-between gap-2.5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f76adae0a527a93ae0e06d59476685e4d30beee38363db6093f65f4c0d0f2b46?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f76adae0a527a93ae0e06d59476685e4d30beee38363db6093f65f4c0d0f2b46?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f76adae0a527a93ae0e06d59476685e4d30beee38363db6093f65f4c0d0f2b46?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f76adae0a527a93ae0e06d59476685e4d30beee38363db6093f65f4c0d0f2b46?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f76adae0a527a93ae0e06d59476685e4d30beee38363db6093f65f4c0d0f2b46?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f76adae0a527a93ae0e06d59476685e4d30beee38363db6093f65f4c0d0f2b46?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f76adae0a527a93ae0e06d59476685e4d30beee38363db6093f65f4c0d0f2b46?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f76adae0a527a93ae0e06d59476685e4d30beee38363db6093f65f4c0d0f2b46?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                        className="aspect-[0.86] object-contain object-center w-[31px] overflow-hidden shrink-0 max-w-full my-auto"
                      />{" "}
                      <div className="text-white text-lg font-bold leading-6 tracking-wider">
                        Minggu Pertama
                      </div>
                    </div>{" "}
                    <div className="text-stone-300 text-sm leading-7 tracking-wider mt-3.5">
                      Membahas dasar dari website seperti tag atribut dan
                      element.{" "}
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex flex-col max-md:mt-10">
                    <div className="items-center flex justify-between gap-3">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/79fa9ca411e5d12550a9562cccf98a18a245f0a5c5577deaca1d69d2ab092899?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/79fa9ca411e5d12550a9562cccf98a18a245f0a5c5577deaca1d69d2ab092899?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/79fa9ca411e5d12550a9562cccf98a18a245f0a5c5577deaca1d69d2ab092899?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/79fa9ca411e5d12550a9562cccf98a18a245f0a5c5577deaca1d69d2ab092899?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/79fa9ca411e5d12550a9562cccf98a18a245f0a5c5577deaca1d69d2ab092899?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/79fa9ca411e5d12550a9562cccf98a18a245f0a5c5577deaca1d69d2ab092899?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/79fa9ca411e5d12550a9562cccf98a18a245f0a5c5577deaca1d69d2ab092899?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/79fa9ca411e5d12550a9562cccf98a18a245f0a5c5577deaca1d69d2ab092899?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                        className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full my-auto"
                      />{" "}
                      <div className="text-white text-lg font-bold leading-6 tracking-wider">
                        Minggu Kedua
                      </div>
                    </div>{" "}
                    <div className="text-stone-300 text-sm leading-7 tracking-wider mt-3.5">
                      Membahas seputar Pengembangan website - SDLC dasar.
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col max-md:mt-10">
                    <div className="items-center flex justify-between gap-3">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61ee0da1000d414a2aad9bc5033e9c76f1c073fac93288c36f1c69a97aca813c?apiKey=b4b8e1120d4040cb8e27288270221f30&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61ee0da1000d414a2aad9bc5033e9c76f1c073fac93288c36f1c69a97aca813c?apiKey=b4b8e1120d4040cb8e27288270221f30&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61ee0da1000d414a2aad9bc5033e9c76f1c073fac93288c36f1c69a97aca813c?apiKey=b4b8e1120d4040cb8e27288270221f30&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61ee0da1000d414a2aad9bc5033e9c76f1c073fac93288c36f1c69a97aca813c?apiKey=b4b8e1120d4040cb8e27288270221f30&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/61ee0da1000d414a2aad9bc5033e9c76f1c073fac93288c36f1c69a97aca813c?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61ee0da1000d414a2aad9bc5033e9c76f1c073fac93288c36f1c69a97aca813c?apiKey=b4b8e1120d4040cb8e27288270221f30&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/61ee0da1000d414a2aad9bc5033e9c76f1c073fac93288c36f1c69a97aca813c?apiKey=b4b8e1120d4040cb8e27288270221f30&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/61ee0da1000d414a2aad9bc5033e9c76f1c073fac93288c36f1c69a97aca813c?apiKey=b4b8e1120d4040cb8e27288270221f30&"
                        className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full my-auto"
                      />{" "}
                      <div className="text-white text-lg font-bold leading-6 tracking-wider">
                        Minggu Ketiga
                      </div>
                    </div>{" "}
                    <div className="text-stone-300 text-sm leading-7 tracking-wider mt-3.5">
                      Membahas seputar konsep layoung seperti flexbox dan grid.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="self-center w-full max-w-[1118px] mt-24 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="justify-center items-stretch flex flex-col max-md:mt-10">
              <div className="justify-center text-white text-5xl font-bold leading-[56px] tracking-wider max-md:text-4xl max-md:leading-[52px]">
                Keuntungan Mentorship
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
                  <div className="flex flex-col items-stretch w-[85%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="justify-center items-stretch flex grow flex-col rounded-xl max-md:max-w-full">
                      <div className="bg-zinc-700 flex flex-col pl-11 pr-16 pt-1.5 pb-5 rounded-xl items-start max-md:max-w-full max-md:px-5">
                        <div className="items-stretch flex w-[527px] max-w-full flex-col px-9 max-md:px-5">
                          <div className="justify-center text-white text-3xl font-bold leading-[72px] tracking-wider max-md:max-w-full">
                            Mentorship 1 : 1
                          </div>{" "}
                          <div className="text-stone-300 text-lg leading-8 tracking-wide max-md:max-w-full">
                            Video Call 1 : 1 dengan mentor untuk berdiskusi,
                            bertanya dan konsultasi seputar mentorship frontend
                            atau hal lainnya
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
                  <div className="flex flex-col items-stretch w-[85%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="justify-center items-stretch flex grow flex-col rounded-xl max-md:max-w-full">
                      <div className="bg-zinc-700 flex flex-col pl-11 pr-16 pt-1.5 pb-5 rounded-xl items-start max-md:max-w-full max-md:px-5">
                        <div className="items-stretch flex w-[527px] max-w-full flex-col px-9 max-md:px-5">
                          <div className="justify-center text-white text-3xl font-bold leading-[72px] tracking-wider max-md:max-w-full">
                            Terarah{" "}
                          </div>{" "}
                          <div className="text-stone-300 text-lg leading-8 tracking-wide max-md:max-w-full">
                            Video Call 1 : 1 dengan mentor untuk berdiskusi,
                            bertanya dan konsultasi seputar mentorship frontend
                            atau hal lainnya
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
                  <div className="flex flex-col items-stretch w-[85%] ml-5 max-md:w-full max-md:ml-0">
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
      <div className="bg-neutral-600 self-center w-[1140px] shrink-0 max-w-full h-px mt-14 max-md:mt-10" />{" "}
      <div className="self-center flex w-[589px] max-w-full items-stretch justify-between gap-5 mt-24 max-md:flex-wrap max-md:justify-center max-md:mt-10">
        <div className="text-zinc-100 text-sm font-medium self-start">Docs</div>{" "}
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
      <div className="items-stretch self-center flex w-[136px] max-w-full justify-between gap-5 mt-4 mb-9 max-md:justify-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20fb3e7f7822030fecfb6b3f38e27f795cbff5cc9419723852c69f5ac69ae3c1?apiKey=b4b8e1120d4040cb8e27288270221f30&"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/502c5bf4f6ec29d49d2363cbabdcb4be3041c762e579106b47cf68300174668d?apiKey=b4b8e1120d4040cb8e27288270221f30&"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2a4195c2ba374e944d2f2e1a67cd658b6097b1672215048c11e8d5c67341181?apiKey=b4b8e1120d4040cb8e27288270221f30&"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
      </div>
    </div>
  );
}
