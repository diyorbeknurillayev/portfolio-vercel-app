import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Portfolio from './Portfolio'

const Home: NextPage = () => {

  return (
    <div className=''>
      <Head>
        <title>Portfolio Diyorbek Nurullayev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Portfolio />
      </div>
    </div>
  )
}

export default Home;
