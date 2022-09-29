import { Fragment } from "react";
import Head from "next/head";

import Slider from "../components/UI/Slider";
import ProderSlider from "../components/products/ProductSlider";
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
      <Horizantal title='精選商品'/>
      <ProderSlider />
      <Picture />
      <Horizantal title='緣起'/>
      <Introduction />
    </Fragment>
  );
}
