import { useState } from 'react';
import { type AppProps } from 'next/app';
import Head from 'next/head';
import PlausibleProvider from 'next-plausible';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import { Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { mdxComponents } from '../components/mdx/mdxComponents';
import { ThemeContextProvider } from '../styles/ThemeContext';
import { TopBar } from '../components/navigation/TopBar';
import { SideBar } from '../components/navigation/Sidebar';
import { BreadCrumbs } from '../components/navigation/BreadCrumbs';
import { MiniNav } from '../components/navigation/MiniNav';
import { Footer } from '../components/navigation/Footer';
import { SuggestsEditsButton } from '../components/mdx/SuggestsEditsButton';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const showBreadCrumbs = pathname !== '/';
  const showMiniNav =
    (pathname.includes('/docs/') &&
      !pathname.includes('/examples/') &&
      !pathname.includes('/api/')) ||
    pathname === '/about' ||
    pathname === '/changelog';

  const isMobile = useMediaQuery('(max-width: 900px)');
  const isDesktop = useMediaQuery('(min-width: 1500px)');
  const isXLDesktop = useMediaQuery('(min-width: 1800px)');

  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Mantine React Table</title>
        <meta
          name="description"
          content="Mantine React Table, a fully featured Mantine implementation of TanStack React Table V8. Written from the ground up in TypeScript."
        />
        <link
          rel="canonical"
          href={`https://www.mantine-react-table.com${pathname}`}
        />
        <link rel="icon" href="/mrt_logo.png" />
        <meta property="og:image" content="/mrt_logo.png" />
        <meta
          property="og:url"
          content={`https://www.mantine-react-table.com${pathname}`}
        />
        {process.env.NODE_ENV === 'production' && (
          <>
            <link
              rel="preconnect"
              href="https://GA9W0E15I8-dsn.algolia.net"
              crossOrigin="anonymous"
            />
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1076638783489959"
              crossOrigin="anonymous"
            />
          </>
        )}
      </Head>
      <PlausibleProvider
        domain="mantine-react-table.com"
        enabled={process.env.NODE_ENV === 'production'}
      >
        <ThemeContextProvider>
          <MDXProvider components={mdxComponents}>
            <TopBar navOpen={navOpen || isDesktop} setNavOpen={setNavOpen} />
            <SideBar navOpen={navOpen || isDesktop} setNavOpen={setNavOpen} />
            <Box
              component="main"
              sx={{
                maxWidth: showMiniNav ? '1800px' : '1600px',
                margin: 'auto',
                minHeight: '100vh',
                padding: `75px ${
                  isMobile
                    ? '16px'
                    : showMiniNav && isXLDesktop
                    ? '300px'
                    : '36px'
                } 0 ${
                  isMobile ? '16px' : navOpen || isDesktop ? '300px' : '36px'
                }`,
                transition: 'all 100ms ease-in-out',
                width: '100%',
              }}
            >
              {showBreadCrumbs && <BreadCrumbs />}
              {showMiniNav && !isXLDesktop && <MiniNav />}
              {pathname === '/' ? (
                <Component {...pageProps} />
              ) : (
                <article>
                  <Component {...pageProps} />
                </article>
              )}
              <SuggestsEditsButton />
              <Footer />
            </Box>
            {showMiniNav && isXLDesktop && <MiniNav />}
          </MDXProvider>
        </ThemeContextProvider>
      </PlausibleProvider>
    </>
  );
}

export default App;
