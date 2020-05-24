import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Hackety, Hack.</p>
    <p>Enjoyy a random image from Unsplash!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src="https://source.unsplash.com/random/800x600"></img>
    </div>
  </Layout>
);

export default IndexPage;
