import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Home'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>DevWithEasy Fullstack Javascript Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-900 text-white px-10">
       <Hero/>
       <About/>
       <Skills/>
       <Projects/>
      </main>
    </div>
  )
}
