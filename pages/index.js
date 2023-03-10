import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>DevWithEasy | Fullstack Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-900 text-white px-5 md:px-10 space-y-6">
       <Hero/>
       <About/>
       <Skills/>
       <Projects/>
       <Contact/>
      </main>
    </div>
  )
}
