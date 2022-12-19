import Head from 'next/head'
import Bio from '../components/Bio'
import Header from '../components/Header'
import Profile from '../components/Profile'
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
      <main className="index">
        <Header/>
        <Profile/>
        <Bio/>
        <Skills/>
      </main>
    </div>
  )
}
