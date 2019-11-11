import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import BACKEND_URL from '../env-config'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/static/favicon.ico' importance='low' />
    </Head>

    <div className='hero'>
      <h1 className='title'>Welcome to the Door Game!</h1>
      <p className='description'>
        In this game you collect points by opening doors and pressing the button behind them.
        You only have 100 clicks so it is important that you find the door that generates the most points.
        By pressing the button below you consent to data being collected about how you play. The data will be used in a study.
      </p>

      <div className='row'>
        <Link href={'/game'} as={BACKEND_URL + '/game'}>
          <a className='card'>
            <h3>Start Game</h3>
          </a>
        </Link>
      </div>
    </div>

    <style global jsx>{`
      document {
        font-family: "-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu', 'Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif"
      }
    `}
    </style>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
