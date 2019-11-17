import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import BACKEND_URL from '../env-config'

const Home = (points) => (
    <div>
        <Head>
            <title>Home</title>
            <link rel='icon' href='/static/favicon.ico' importance='low' />
        </Head>
        <div className='hero'>
            <h1 className='title'>Spelet är slut!</h1>
            <p className='description'>
                Tack för att du har deltagit!
            </p>
        </div>
        <div> {/*Lägg in att man kan se hur många poäng man fick på respektive nivå! */}
{/* <p className="pointsSection">Totalt antal poäng nivå 2: {points.toFixed(0)}</p> */}
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
