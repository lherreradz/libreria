import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import BasicLayout from "../layouts/BasicLayout/BasicLayout"
import Autor from '../components/Autor'

export default function Home() {

  return(
    <BasicLayout className="home">
      <Autor/>

    </BasicLayout>
  )
  
  /*
  return (
    <div className={styles.container}>
      <Head>
        <title>Libreria</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Home</h1>
        <Link href="contact">
          <a>Contact</a>
        </Link>
        <Link href="novela/Viaje al centro de la tierra">
          <a>Viaje al centro de la tierra</a>
        </Link>
      </main>
    </div>
  )*/

}