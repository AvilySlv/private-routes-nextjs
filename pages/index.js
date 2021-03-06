import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Router from 'next/router';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Home Page
        <button onClick={() => Router.push('/dashboard')}>Ir para Dashboard</button>
      </main>
    </div >
  )
}
