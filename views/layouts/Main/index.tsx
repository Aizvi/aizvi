//#region Global imports
import React, { ReactNode, useEffect } from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import { MdArrowUpward } from 'react-icons/md';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
//#endregion Global imports

//#region Local imports
// Very important import because it contains a component that wrap with our redux store.
import { EnhancedIndex } from '../EnhancedIndex';
import { HeaderOne, FooterOne } from '@components';
//#endregion Local imports

//#region Component

//#region Types
type Props = {
  title: string;
  children: ReactNode;
};
//#endregion Types
if (typeof window !== 'undefined') {
  NProgress.configure({ showSpinner: false });

  // Fires when a route starts to change
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  // Fires when a route changed completely
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  //  Fires when there's an error when changing routes, or a route load is cancelled
  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });
}

export const Main = (props: Props) => {
  const { children } = props;

  const HOMEPAGE_JSON = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    name: 'Aizvi',
    url: 'https://aizvi.com/',
    logo: 'https://aizvi.com/logo.png', // Replace with your logo URL
    description:
      'Aizvi provides professional IT services and digital solutions, specializing in web and mobile application development for clients worldwide.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '112 Pak Block Allama Iqbal Town',
      addressLocality: 'Lahore',
      postalCode: '54000',
      addressCountry: 'PK'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-3080496028', // Replace with your phone number
      contactType: 'customer service'
    }
  };

  const clickToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Button
    const btnTop: HTMLButtonElement | null = document.querySelector('.s-top');

    // It Will Show or Hide the scroll button
    const handleScroll = () => {
      if (btnTop) {
        if (document.documentElement.scrollTop > 600) {
          btnTop.style.display = 'block';
        } else {
          btnTop.style.display = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <EnhancedIndex>
      <Head>
        <title>
          Expert IT Services and Digital Solutions - Aizvi | Web & Mobile App
          Development
        </title>

        <meta
          name="description"
          content="Aizvi offers cutting-edge IT services and digital experiences, specializing in web and mobile application development for global clients. Based in Lahore, Pakistan, we deliver collaborative and powerful digital solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Aizvi - Innovative IT and App Development Solutions"
        />

        <meta
          property="og:description"
          content="Aizvi is a premier software company in Lahore, Pakistan, offering comprehensive web and mobile app development services to a global clientele."
        />

        <meta property="og:url" content="https://aizvi.com/" />

        <meta property="og:site_name" content="Aizvi" />
        <meta property="og:image" content="https://aizvi.com/logo.png" />
        <meta
          property="og:image:secure_url"
          content="https://aizvi.com/logo.png"
        />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Aizvi - Leading Software Development Company"
        />

        <meta
          name="twitter:description"
          content="Discover innovative IT solutions with Aizvi, a leading software development company based in Lahore, Pakistan. Specializing in web and mobile applications."
        />

        <meta name="twitter:image" content="https://aizvi.com/logo.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `${JSON.stringify(HOMEPAGE_JSON)}`
          }}
        />
      </Head>
      <HeaderOne sticky={true} />
      {children}
      <FooterOne />
      {/*	Scroll-Top-Button */}
      <div className="layout-offset">
        <button className="s-top gl-icon btn--icon" onClick={clickToTop}>
          <MdArrowUpward />
        </button>
      </div>
      {/* Toast-Container	*/}
      <ToastContainer
        transition={Slide}
        position="top-center"
        closeButton={false}
        hideProgressBar={true}
      />
    </EnhancedIndex>
  );
};

export default Main;
//#endregion Component
