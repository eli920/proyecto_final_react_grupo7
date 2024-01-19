import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Section from '@/components/cards/Section'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Indumentaria</title> 
        <meta name="author" content= "Grupo-7" />
        <meta name="keywords" content= "indumentaria, dress" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Section />
      </main>
    </>
  )
}

