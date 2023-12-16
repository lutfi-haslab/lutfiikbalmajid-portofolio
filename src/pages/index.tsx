import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {

  return (
    <div id='home' className="relative bg-gray-200 w-full h-[4100px] overflow-hidden text-left text-29xl text-white font-heading-h3">
      {/* Navbar */}
      <div className="absolute top-[8px] w-full left-[40px] h-[111px] text-[24px] font-poppins">
        <div className="absolute top-[110.5px] box-border w-[1141px] h-px border-t-[1px] border-solid border-dimgray" />
        <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[245px]">
          <div className="shrink-0 flex flex-row items-center justify-start">
            <img
              className="relative w-[112.48px] h-[73px] object-cover"
              alt=""
              src="/img/logoremovebgpreview-1@2x.png"
            />
            <b className="relative tracking-[0.5px] leading-[30px]">
              Lutfi Ikbal Majid
            </b>
          </div>
          <div className="w-[625px] shrink-0 flex flex-row items-center justify-center p-2.5 box-border gap-[64px] text-right text-base text-lightgray-300 font-small-normal">
            <a href='#home' className="relative tracking-[1px] leading-[80.5px] font-semibold text-white">
              Home
            </a>
            <a href='#portofolio' className="relative tracking-[1px] leading-[80.5px] font-semibold">
              Portfolio
            </a>
            <a href='#snippet' className="flex-1 relative tracking-[1px] leading-[80.5px] font-semibold text-center">
              Snippet
            </a>
            <a href='#mentorship' className="relative tracking-[1px] leading-[80.5px] font-semibold">
              Mentorship
            </a>
            <Link to='blog' className="relative tracking-[1px] leading-[80.5px] font-semibold">
              Blog
            </Link>
          </div>
        </div>
      </div>
      {/* Hero profile */}
      <div className="absolute left-[10vw] top-[22vh] w-full">
        <b className="absolute top-[0px] left-[0px] tracking-[1px] leading-[56px] inline-block text-transparent !bg-clip-text [background:linear-gradient(134.01deg,_#3bf686_50.52%,_#4ca9ff_89.58%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] w-[1029px]">
          Hello, I'm Lutfi Ikbal Majid, a full-stack developer passionate about
          exploring new technologies.
        </b>
      </div>
      {/* Biography */}
      <div className="absolute top-[54vh] left-[10vw] flex flex-row items-end justify-center gap-[35px] text-9xl text-gray-100">
        <div className="relative w-[155px] h-[155px]">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkslategray-200 box-border w-[155px] h-[155px] border-[4px] border-solid border-skyblue" />
          <img
            className="absolute top-[15.5px] left-[15.5px] w-[124px] h-[124px] object-cover"
            alt=""
            src="/img/image-1@2x.png"
          />
        </div>
        <div className="shrink-0 flex flex-row items-center justify-center gap-[86px]">
          <div className="shrink-0 flex flex-col items-start justify-start">
            <div className="relative w-[158px] h-[72px]">
              <b className="absolute top-[0px] left-[0px] tracking-[1px] leading-[72px]">
                Biography
              </b>
            </div>
            <div className="relative w-[499px] h-24 text-lg text-lightgray-100 font-small-normal">
              <div className="absolute top-[0px] left-[0px] inline-block w-[499px]">
                <span className="tracking-[0.01em] leading-[32px]">{`Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Exicited on `}</span>
                <b className="tracking-[1px] leading-[24px] text-cornflowerblue">
                  React
                </b>
                <span className="tracking-[0.01em] leading-[32px]">{`, `}</span>
                <b className="tracking-[1px] leading-[24px] text-skyblue">
                  Lead
                </b>
                <span className="tracking-[0.01em] leading-[32px]">{` and `}</span>
                <b className="tracking-[1px] leading-[24px] text-palegreen">
                  Agile
                </b>
                <span className="tracking-[0.01em] leading-[32px]">.</span>
              </div>
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-start justify-start gap-[7px]">
            <b className="relative tracking-[1px] leading-[72px]">
              Lets connect
            </b>
            <div className="shrink-0 flex flex-row items-start justify-start gap-[17px]">
              <img
                className="relative w-8 h-8 object-cover"
                alt=""
                src="/img/group-1@2x.png"
              />
              <img
                className="relative w-8 h-8 object-cover"
                alt=""
                src="/img/group-2@2x.png"
              />
              <img
                className="relative w-[30px] h-[30px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/img/facebook@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      {/* What I do */}
      <div id='portofolio' className="absolute top-[85vh] left-[10vw] flex flex-row items-center justify-start gap-[42px] text-9xl">
        <div className="relative w-[458px] h-[156px]">
          <b className="absolute top-[0px] left-[0px] tracking-[1px] leading-[72px] inline-block w-[165px]">
            What I do
          </b>
          <div className="absolute top-[60px] left-[0px] text-lg inline-block w-[458px] text-mistyrose font-small-normal">
            <span className="tracking-[0.01em] leading-[32px]">{`Build and maintain websites, `}</span>
            <b className="tracking-[1px] leading-[24px] text-mediumspringgreen">{`frontend dev `}</b>
            <span className="tracking-[0.01em] leading-[32px]">{`also have a mentorship called `}</span>
            <span className="tracking-[0.01em] leading-[32px]">
              . My motto is Beauty and function in equal measure as priority.
            </span>
          </div>
        </div>
        <div className="shrink-0 flex flex-row items-center justify-center gap-[19px] text-base text-text-1">
          <div className="shrink-0 flex flex-col items-center justify-center py-[35px] px-0 relative">
            <div className="shrink-0 flex flex-col items-center justify-start z-[0]">
              <div className="shrink-0 flex flex-col items-start justify-start relative gap-[10px]">
                <div className="relative rounded-xl bg-darkslategray-300 w-[263px] h-[190px] z-[0]" />
                <div className="absolute my-0 mx-[!important] top-[63px] left-[26px] w-[225px] h-28 z-[1]">
                  <div className="absolute top-[0px] left-[0px] w-[225px] h-28">
                    <div className="absolute top-[0px] left-[0px] w-[225px] h-28">
                      <div className="absolute top-[0px] left-[28px] tracking-[1px] leading-[72px] font-semibold flex items-center w-[169px] h-8">
                        Web Development
                      </div>
                      <div className="absolute top-[40px] left-[0px] text-sm tracking-[1px] leading-[26px] font-small-normal text-text-2 text-center inline-block w-[225px] h-[72px]">
                        You will receive a customized plan for your fitness
                        journey, and lots of support.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[0px] left-[95.5px] w-[72px] h-[72px] object-cover z-[1]"
              alt=""
              src="/img/group-139@2x.png"
            />
          </div>
          <div className="shrink-0 flex flex-col items-center justify-center py-[35px] px-0 relative">
            <div className="shrink-0 flex flex-col items-center justify-start z-[0]">
              <div className="shrink-0 flex flex-col items-start justify-start relative gap-[10px]">
                <div className="relative rounded-xl bg-darkslategray-300 w-[263px] h-[190px] z-[0]" />
                <div className="absolute my-0 mx-[!important] top-[57px] left-[26px] w-[225px] h-28 z-[1]">
                  <div className="absolute top-[0px] left-[0px] w-[225px] h-28">
                    <div className="absolute top-[0px] left-[0px] w-[225px] h-28">
                      <div className="absolute top-[0px] left-[56px] tracking-[1px] leading-[72px] font-semibold flex items-center w-[114px] h-8">
                        UX Research
                      </div>
                      <div className="absolute top-[40px] left-[0px] text-sm tracking-[1px] leading-[26px] font-small-normal text-text-2 text-center inline-block w-[225px] h-[72px]">
                        You will receive a customized plan for your fitness
                        journey, and lots of support.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[0px] left-[95.5px] w-[72px] h-[72px] object-cover z-[1]"
              alt=""
              src="/img/group-139@2x.png"
            />
          </div>
        </div>
      </div>

      {/* Project */}
      <div className="absolute top-[125vh] left-[10vw] flex flex-col items-start justify-start gap-[51px] text-lg text-gainsboro font-small-normal">
        <div className="shrink-0 flex flex-row items-start justify-start py-5 px-0 relative gap-[10px] text-37xl text-white font-heading-h3">
          <b className="relative tracking-[1px] leading-[72px] flex items-center w-[458px] h-[119px] shrink-0 z-[0]">
            <span className="w-full">
              <span>{`Project that i has been `}</span>
              <span className="text-mediumspringgreen">done</span>
            </span>
          </b>
          <img
            className="absolute my-0 mx-[!important] top-[0px] left-[488px] w-[180.72px] h-[180.72px] overflow-hidden shrink-0 object-cover z-[1]"
            alt=""
            src="/img/arrow-ornament@2x.png"
          />
        </div>
        <div className="shrink-0 flex flex-col items-start justify-start relative gap-[10px]">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[30px] z-[0]">
            <img
              className="relative w-[400px] object-fill"
              alt=""
              src="/img/thumbnail-project@2x.png"
            />
            <div className="shrink-0 flex flex-col items-start justify-start gap-[22px]">
              <b className="relative tracking-[1px] leading-[24px]">
                Web Development
              </b>
              <div className="relative w-[556px] h-[180px] text-lightgray-200">
                <div className="absolute top-[84px] left-[0px] w-[556px] h-24">
                  <div className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[32px] flex items-center w-[556px]">
                    Serrow restructured and designed core pages, creating
                    interactive elements that put users in control and allowed
                    them to discover the information needed to make a decision.
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] w-[518px] h-14 text-29xl text-white font-heading-h3">
                  <b className="absolute top-[0px] left-[0px] tracking-[1px] leading-[56px]">
                    Bolder Landingpage
                  </b>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute my-0 mx-[!important] top-[20px] left-[47px] w-[25px] h-[25px] overflow-hidden shrink-0 object-cover z-[1]"
            alt=""
            src="/img/misc-06@2x.png"
          />
          <div className="absolute my-0 mx-[!important] top-[77px] left-[52px] w-4 h-4 z-[2]">
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-100 w-4 h-4" />
            <img
              className="absolute top-[2px] left-[2px] w-3 h-3 object-cover"
              alt=""
              src="/img/image-1043@2x.png"
            />
          </div>
          <div className="absolute my-0 mx-[!important] top-[77px] left-[76px] w-4 h-4 z-[3]">
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-100 w-4 h-4" />
            <img
              className="absolute top-[3px] left-[1px] w-3.5 h-2.5 object-cover"
              alt=""
              src="/img/image-1044@2x.png"
            />
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-start justify-start relative gap-[10px]">
          <div className="shrink-0 flex flex-row items-start justify-start gap-[30px] z-[0]">
            <img
              className="relative w-[400px] object-fill"
              alt=""
              src="/img/thumbnail-project@2x.png"
            />
            <div className="shrink-0 flex flex-col items-start justify-start gap-[22px]">
              <b className="relative tracking-[1px] leading-[24px]">
                Web Development
              </b>
              <div className="relative w-[614px] h-[228px] text-lightgray-200">
                <div className="absolute top-[132px] left-[0px] w-[557px] h-24">
                  <div className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[32px] flex items-center w-[557px]">
                    Serrow restructured and designed core pages, creating
                    interactive elements that put users in control and allowed
                    them to discover the information needed to make a decision.
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] w-[614px] h-28 text-29xl text-white font-heading-h3">
                  <b className="absolute top-[0px] left-[0px] tracking-[1px] leading-[56px] flex items-center w-[614px]">
                    Kerja Mantul Education Management
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute my-0 mx-[!important] top-[77px] left-[52px] w-4 h-4 z-[1]">
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-100 w-4 h-4" />
            <img
              className="absolute top-[2px] left-[2px] w-3 h-3 object-cover"
              alt=""
              src="/img/image-1043@2x.png"
            />
          </div>
          <div className="absolute my-0 mx-[!important] top-[77px] left-[76px] w-4 h-4 z-[2]">
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-100 w-4 h-4" />
            <img
              className="absolute top-[3px] left-[1px] w-3.5 h-2.5 object-cover"
              alt=""
              src="/img/image-1044@2x.png"
            />
          </div>
          <div className="absolute my-0 mx-[!important] top-[77px] left-[76px] w-4 h-4 z-[3]">
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-100 w-4 h-4" />
            <img
              className="absolute top-[3px] left-[1px] w-3.5 h-2.5 object-cover"
              alt=""
              src="/img/image-1044@2x.png"
            />
          </div>
          <div className="absolute my-0 mx-[!important] top-[77px] left-[100px] w-4 h-4 z-[4]">
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-100 w-4 h-4" />
            <img
              className="absolute top-[4px] left-[3px] w-[11px] h-2 object-cover"
              alt=""
              src="/img/image-1045@2x.png"
            />
          </div>
        </div>
      </div>

      {/* Code Snippet */}
      <div id='snippet' className="absolute top-[250vh] left-[10vw] flex flex-row items-start justify-start gap-[10px]">

        <b className="absolute top-[0px] left-[0px] tracking-[1px] leading-[56px]">
          Code Snippet
        </b>
        <div className="absolute my-0 mx-[!important] top-[101px] left-[0px] w-[500px] h-[133px] z-[1] text-lg text-darkgray font-small-normal">
          <div className="absolute top-[50px] left-[0px] rounded-[10px] bg-darkslategray-100 w-[50vw] h-[10vh]" />
          <div className="absolute top-[10vh] left-[36px] tracking-[0.01em] leading-[32px]">
            Type your favorite snippet here, hehehe .....
          </div>
          <img
            className="absolute top-[10vh] left-[45vw] w-[37px] h-[37px] overflow-hidden object-cover"
            alt=""
            src="/img/searchoutline@2x.png"
          />
          <b className="absolute top-[0px] left-[5px] tracking-[1px] leading-[24px] text-white">
            Search code snippet
          </b>
        </div>
        <div className="relative w-[1140px] h-full z-[0]">
          <img
            className="absolute top-[40vh] left-[0px] w-[35vw] object-cover"
            alt=""
            src="/img/thumbnail-snippet@2x.png"
          />
          <img
            className="absolute top-[40vh] left-[585px] w-[35vw] object-cover"
            alt=""
            src="/img/thumbnail-snippet@2x.png"
          />
          <img
            className="absolute top-[80vh] left-[0px] w-[35vw] object-cover"
            alt=""
            src="/img/thumbnail-snippet@2x.png"
          />
          <img
            className="absolute top-[80vh] left-[585px] w-[35vw] object-cover"
            alt=""
            src="/img/thumbnail-snippet@2x.png"
          />
          <img
            className="absolute top-[120vh] left-[0px] w-[35vw] object-cover"
            alt=""
            src="/img/thumbnail-snippet@2x.png"
          />
          <img
            className="absolute top-[120vh] left-[585px] w-[35vw] object-cover"
            alt=""
            src="/img/thumbnail-snippet@2x.png"
          />
        </div>
      </div>

      {/* Mentorship */}
      <div id='mentorship' className="absolute top-[420vh] left-[10vw] flex flex-row items-center justify-start gap-[15px]">
        <div className="shrink-0 flex flex-col items-start justify-start gap-[41px]">
          <div className="relative w-[306px] h-12">
            <b className="absolute top-[0px] left-[0px] tracking-[1px] leading-[56px] flex items-center w-[306px] h-12">
              Mentorship
            </b>
          </div>
          <div className="relative w-[473px] h-[172px] text-lg text-whitesmoke-200 font-small-normal">
            <div className="absolute top-[0px] left-[0px] inline-block w-[458px] h-[55px]">
              <p className="[margin-block-start:0] [margin-block-end:2px]">
                <span className="tracking-[0.01em] leading-[32px]">{`Menghabiskan banyak waktu untuk belajar `}</span>
                <b className="[text-decoration:underline] tracking-[1px] leading-[30px] font-small-normal text-mediumspringgreen">
                  sendiri
                </b>
                <span className="tracking-[0.01em] leading-[32px] font-small-normal text-whitesmoke-200">{` dan tetap merasa `}</span>
                <b className="[text-decoration:underline] tracking-[1px] leading-[30px] font-small-normal text-mediumspringgreen">
                  stuck
                </b>
                <span className="tracking-[0.01em] leading-[32px] font-small-normal text-whitesmoke-200">{`? `}</span>
              </p>
              <p className="m-0 tracking-[0.01em] leading-[32px]">&nbsp;</p>
            </div>
            <div className="absolute top-[76px] left-[0px] w-[473px] h-24">
              <div className="absolute top-[0px] left-[20px] tracking-[0.01em] leading-[32px] inline-block w-[453px]">
                Mentorship Frontend ini menjadi jawaban atas permasalahanmu.
                Karena disini, kamu bakal merasakan mentoring yang lebih
                personal
              </div>
              <div className="absolute top-[10px] left-[0px] [background:linear-gradient(180deg,_#3bf686,_#4ca9ff)] w-[5px] h-[77px]" />
            </div>
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-start justify-start relative gap-[10px] text-lg font-small-normal">
          <div className="relative rounded-xl bg-darkslategray-300 w-[40vw] h-[231px] z-[0]" />
          <div className="absolute my-0 mx-[!important] top-[37px] left-[53px] w-[559px] h-[165px] z-[1]">
            <div className="absolute top-[0px] left-[0px] w-[173px] h-[139px]">
              <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[13px]">
                <div className="shrink-0 flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[31.45px] h-9 object-cover"
                    alt=""
                    src="/img/image-2@2x.png"
                  />
                  <b className="relative tracking-[1px] leading-[24px] inline-block w-[131.06px] shrink-0">
                    Minggu Pertama
                  </b>
                </div>
                <div className="relative text-sm tracking-[1px] leading-[26px] text-silver inline-block w-[10vw]">{`Membahas dasar dari website seperti tag atribut dan element. `}</div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[12vw] w-[173px] h-[139px]">
              <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[13px]">
                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-9 h-9 object-cover"
                    alt=""
                    src="/img/image-3@2x.png"
                  />
                  <b className="relative tracking-[1px] leading-[24px] inline-block w-[125px] shrink-0">
                    Minggu Kedua
                  </b>
                </div>
                <div className="relative text-sm tracking-[1px] leading-[26px] text-silver inline-block w-[10vw]">
                  Membahas seputar Pengembangan website - SDLC dasar.
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[24vw] w-[173px] h-[165px]">
              <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[13px]">
                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-9 h-9 object-cover"
                    alt=""
                    src="/img/image-6@2x.png"
                  />
                  <div className="relative w-[125px] h-12">
                    <b className="absolute top-[0px] left-[0px] tracking-[1px] leading-[24px] inline-block w-[125px]">
                      Minggu Ketiga
                    </b>
                  </div>
                </div>
                <div className="relative text-sm tracking-[1px] leading-[26px] text-silver inline-block w-[10vw]">
                  Membahas seputar konsep layoung seperti flexbox dan grid.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[470vh] left-[10vw] w-[1118px] flex flex-row items-start justify-start gap-[38px]">
        <div className="w-[360px] flex flex-col items-center justify-center gap-[22px]">
          <div className="relative w-[360px] h-[113px]">
            <b className="absolute top-[0px] left-[0px] tracking-[1px] leading-[56px] flex items-center w-[360px] h-[113px]">
              Keuntungan Mentorship
            </b>
          </div>
          <img
            className="relative w-[298px] h-[305px] object-cover"
            alt=""
            src="/img/image-1047@2x.png"
          />
        </div>
        <div className="w-[720px] flex flex-col items-start justify-center gap-[18px] text-9xl">
          <div className="flex flex-row items-center justify-center">
            <div className="shrink-0 flex flex-row items-start justify-start relative z-[1]">
              <div className="relative rounded-[50%] bg-darkslategray-300 box-border w-[120px] h-[120px] z-[0] border-[2px] border-solid border-mediumspringgreen" />
              <img
                className="absolute my-0 mx-[!important] top-[33px] left-[33px] w-[54px] h-[54px] object-cover z-[1]"
                alt=""
                src="/img/image-520@2x.png"
              />
            </div>
            <div className="shrink-0 flex flex-row items-center justify-center relative z-[0] ml-[-55px]">
              <div className="relative rounded-xl bg-darkslategray-300 w-[45vw] h-[180px] z-[0]" />
              <div className="my-0 mx-[!important] absolute top-[5px] left-[44px] shrink-0 flex flex-col items-start justify-start py-0 px-[35px] z-[1]">
                <b className="relative tracking-[1px] leading-[72px] flex items-center w-[233px] h-[58px] shrink-0">
                  Mentorship 1 : 1
                </b>
                <div className="relative text-lg tracking-[0.01em] leading-[32px] font-small-normal text-silver inline-block w-[457px]">
                  Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan
                  konsultasi seputar mentorship frontend atau hal lainnya
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="relative w-[120px] h-[120px] shrink-0 z-[1]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkslategray-300 box-border w-[120px] h-[120px] border-[2px] border-solid border-mediumspringgreen" />
              <img
                className="absolute top-[33px] left-[33px] w-[54px] h-[54px] object-cover"
                alt=""
                src="/img/image-326@2x.png"
              />
            </div>
            <div className="shrink-0 flex flex-row items-center justify-center relative z-[0] ml-[-55px]">
              <div className="relative rounded-xl bg-darkslategray-300 w-[45vw] h-[180px] z-[0]" />
              <div className="my-0 mx-[!important] absolute top-[5px] left-[44px] shrink-0 flex flex-col items-start justify-start py-0 px-[35px] z-[1]">
                <b className="relative tracking-[1px] leading-[72px] flex items-center w-[233px] h-[58px] shrink-0">{`Terarah `}</b>
                <div className="relative text-lg tracking-[0.01em] leading-[32px] font-small-normal text-silver inline-block w-[457px]">
                  Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan
                  konsultasi seputar mentorship frontend atau hal lainnya
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="relative w-[120px] h-[120px] shrink-0 z-[1]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkslategray-300 box-border w-[120px] h-[120px] border-[2px] border-solid border-mediumspringgreen" />
              <img
                className="absolute top-[34px] left-[34px] w-[51px] h-[51px] object-cover"
                alt=""
                src="/img/image-1042@2x.png"
              />
            </div>
            <div className="shrink-0 flex flex-row items-center justify-center relative z-[0] ml-[-55px]">
              <div className="relative rounded-xl bg-darkslategray-300 w-[45vw] h-[180px] z-[0]" />
              <div className="my-0 mx-[!important] absolute top-[5px] left-[44px] shrink-0 flex flex-col items-start justify-start py-0 px-[35px] z-[1]">
                <b className="relative tracking-[1px] leading-[72px] flex items-center w-[233px] h-[58px] shrink-0">
                  Silabus
                </b>
                <div className="relative text-lg tracking-[0.01em] leading-[32px] font-small-normal text-silver inline-block w-[457px]">
                  Silabus praktis, fundamental yang bisa diimplementasikan
                  berdasarkan studi kasus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="absolute top-[580vh] left-[10vw] text-sm text-whitesmoke-100 font-ibm-plex-sans">
        <div className="absolute top-[-0.5px] left-[-0.5px] box-border w-[80vw] h-px border-t-[1px] border-solid border-dimgray" />
        <div className="absolute top-[96px] left-[20vw] flex flex-col items-center justify-start gap-[48px]">
          <div className="relative w-[591px] h-[18px]">
            <div className="absolute top-[0px] left-[0px] font-medium">
              Docs
            </div>
            <div className="absolute top-[0px] left-[96px] font-medium">
              Book Notes
            </div>
            <div className="absolute top-[0px] left-[234px] font-medium">
              Polywork
            </div>
            <div className="absolute top-[0px] left-[358px] font-medium">
              Starter Template
            </div>
            <div className="absolute top-[0px] left-[531px] font-medium">
              Statistics
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-center justify-start gap-[16px]">
            <div className="relative font-semibold">Reach me out</div>
            <div className="shrink-0 flex flex-row items-start justify-start gap-[32px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/img/frame@2x.png"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/img/frame@2x.png"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/img/frame@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
