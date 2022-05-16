import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Eu enim ullamco sit do ipsum pariatur in labore nisi eiusmod culpa. Officia reprehenderit occaecat sint cupidatat pariatur qui esse sit. Laboris in qui fugiat anim voluptate commodo nulla pariatur magna cillum. Nostrud ut ea sunt sit aute. Minim veniam in proident ullamco excepteur in. Aute ut sint incididunt aliqua culpa laboris enim nisi enim aliquip. Exercitation culpa magna officia pariatur esse deserunt.</p>
        <p className={styles.text}>Sint esse irure ad adipisicing laborum exercitation qui id ipsum ipsum excepteur. Laborum tempor do ea consequat do eu ex minim dolor aliqua consequat. Incididunt ipsum culpa aliqua nostrud do mollit sunt anim officia amet est velit voluptate. Consectetur aliqua commodo in nulla nisi exercitation sunt eiusmod minim ex culpa deserunt tempor deserunt. Pariatur ea eiusmod laborum aliquip ex.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninjas Listing</a>
        </Link>
      </div>
    </>
  )
}
