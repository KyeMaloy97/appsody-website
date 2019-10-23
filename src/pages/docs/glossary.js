import React from "react";

import Layout from "../../layouts"
import GlossaryItemGrid from "../../components/glossaryItemGrid";

import { Link } from "gatsby";

const GlossaryPage = () => (
  <Layout>
      <div className="container">
         <section className="landing-section text-left">
             <h2>Glossary</h2>
             <p>Here is where a description for the glossasry page is going to go, if we decide to use one.</p>
             <GlossaryItemGrid/>
         </section>
      </div>
  </Layout>
)

export default GlossaryPage
