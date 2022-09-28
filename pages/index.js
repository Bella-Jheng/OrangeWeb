import Head from "next/head";
import { Fragment } from "react";
import Slider from "../components/UI/Slider";
import Products from '../components/products/Products'
import Picture from "../components/UI/Picture";
import Introduction from '../components/UI/Introduction';
import Horizantal from "../components/UI/Horizantal";

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
      <Horizantal title='最新商品'/>
      <Products />
      <Picture />
      <Horizantal title='緣起'/>
      <Introduction />
    </Fragment>
  );
}
