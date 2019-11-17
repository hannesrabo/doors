import React from "react";
import Head from "next/head";
import Link from "next/link";

import BACKEND_URL from "../env-config";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/static/favicon.ico" importance="low" />
    </Head>

    <div className="hero">
      <h1 className="title">Välkommen till dörrspelet!</h1>
      <p className="description">
        Det här spelet går ut på att samla så mycket poäng som möjligt genom att{" "}
        <br />
        öppna dörrar och klicka på knapparna bakom dem.
      </p>
      <p className="description">
        Varje gång du klickar på något så använder du ett klick. Du har totalt
        <br />
        100 klick så för att maximera din poäng så måste du hitta den dörr som
        ger mest poäng. <br />
        Spelet går inte på tid utan endast antalet klick begränsar hur länge du
        kan spela.
      </p>
      <p className="description">________________________________________</p>
      <p className="description">
        Det här är ett spel vars syfte är att samla in data till en C-uppsats i
        <br />
        nationalekonomi som skrivs på Uppsala Universitet.
      </p>
      <p className="description">
        Deltagande i spelet är helt frivilligt. Om du vill avbryta din medverkan
        <br />
        så säg gärna till Klara eller Farhana så att de vet hur många som är
        kvar.
      </p>
      <p className="description">
        Datan som samlas in kommer vara helt anonymiserad och kommer inte
        <br />
        användas till något annat än den tidigare nämnda uppsatsen.
      </p>

      <div className="row">
        <Link href={"/form"} as={BACKEND_URL + "/form"}>
          <a className="card">
            <h3>Sätt igång!</h3>
          </a>
        </Link>
      </div>
    </div>

    <style global jsx>
      {`
        document {
          font-family: "-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu', 'Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif";
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
);

export default Home;
