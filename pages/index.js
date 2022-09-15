import Head from "next/head";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";
import Banner from "../components/UI/Banner";
import Slider from "../components/UI/Slider";
import Products from '../components/products/Products'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Ubuntu:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Slider />
      <Products />
    </Fragment>
  );
}
