import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { useEffect } from 'react';
import NavbarContent from '../theme/Navbar/Content';
import LayoutProvider from '../theme/Layout/Provider';
import Navbar from '../theme/Navbar';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className='text-red-500 text-xl font-bold'>Hello</p>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <LayoutProvider>
      <Navbar />
      <main>
        <div className='flex flex-col justify-start p-6'>
          <h1>Lutfi Ikbal Majid</h1>
          <h3>Profile Summary:</h3>
          <p>
            I'm a Full Stack Developer who started my journey in college by tinkering with Arduino and C++. Originally trained as an Electrical Engineer, my career shifted gears in 2020 when I decided to focus on web development, especially using Laravel. Since joining my current workplace, I wear multiple hats as a researcher and lead developer in Full Stack and Blockchain projects.
            <br />
            I'm well-versed in various programming languages and frameworks. Right now, I mainly work with Typescript for projects and use Flutter for mobile development. I've also completed a QA Bootcamp at Binar, a well-known institution in Indonesia.
            <br />
            I'm a perpetual learner, always excited to explore new technologies and expand my skills.
          </p>
          <h3>Projects:</h3>
          <p>As lead developer and researcher, i've been building many application with my team</p>
          <p>Here are the list:</p>
          <ul>
            <li><span className='font-bold'>Peruri Authenticator:</span> A Mobile app build with Kotlin that work to verify document using OpenCV QR scanner or file picker with Blockchain</li>
            <li><span className='font-bold'>Peruri Authenticator Document Management</span>: A website platform build with NextJS that work to upload document to the Blockchain and setting up the document format using pdf.js, the output from this file is PDF document with user generated style pdf and qr code</li>
            <li><span className='font-bold'>pChain, Blockhain as a Service</span>: pChain is a SaaS (Software as a Service) build with NextJs, that simplified Blockchain development using various Blockchain network such as Polygon edge, Hyperledger Besu, Avalance, and Ethereum Testnet. pChain is complete package, there is feature for IPFS storage, static storage using s3, wallet management, and smart contract management. User can use our API to implement Solidity API anywhere like Mobile App, Web, Desktop without worrying using ethers or web3 library.</li>
            <li><span className='font-bold'>Cryptostamp</span>: A NFT marketplace build with NextJs focusing on Postage Stamp from PT. POS Indonesia</li>
            <li><span className='font-bold'>PRIfA NFT</span>: A general NFT marketplace build with NextJs that working with Central Bank Digital Currency Stablecoin from PRIfA CBDC</li>
            <li><span className='font-bold'>PRIfA CBDC Mobile App</span>: A mobile app wallet build with flutter for end user to send and receive DIDR money from CBDC and stablecoind</li>
            <li><span className='font-bold'>PRIfA CBDC Web suite</span>: Web application build with react as frontend and nestjs as backend for prototype Central Bank digital currency, there is 5 website including, Central Bank Suite, Core System Suite, Financial Service Provider, Merchant Suite, and Enterprise Suite.</li>
          </ul>
        </div>
      </main>
    </LayoutProvider>
  );
}
