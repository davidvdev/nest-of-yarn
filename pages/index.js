import Head from 'next/head'
import Image from 'next/image'

// component imports
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import TextSliders from '../components/TextSliders'
import Cta from '../components/Cta'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Nest of Yarn</title>
        <meta name="description" content="The official website of Nest of Yarn" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <Banner />
      <main className="">
        <Hero />
        <TextSliders />
        <Cta />
      </main>

      <footer className="">
        <a
          href="https://www.davidvdev.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ {' '} by davidvdev
        </a>
      </footer>
    </div>
  )
}
