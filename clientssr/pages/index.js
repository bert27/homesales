import React, { useCallback, useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import HeadC from "../components/Head";
import { RoomsService } from "../services/Rooms.service";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Head from "next/head";
export default function Home() {
  useEffect(async () => {
    console.log("Obteniendo datos de la api");

    RoomsService.getMarkers("madrid").then(
      (markers) => {
        console.log(markers);
      },
      (error) => {
        seterrorServer(true);
      }
    );
  }, []);
  return (
    <>
      <Head>
        <title>HomeSales2</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta name="description" content="test styles" />
        <link rel="icon" href="/home.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <HeadC />

          <Body />
        </main>

        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </>
  );
}
