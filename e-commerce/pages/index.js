import React from 'react'
import { client } from '../lib/client';

import { Product, FooterBanner, HeroBanner, Footer } from '../components';

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className="products-heading">
        <h2>
          Best Selling Products
        </h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {[
          'product 1', 'product 2'].map((product) => product)}
      </div>

      <FooterBanner />

    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  
  return {
    props: { products, bannerData }
  }
}

export default Home;