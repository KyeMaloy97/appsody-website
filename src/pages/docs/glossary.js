import React from "react";

import GlossaryItemGrid from "../../components/glossaryItemGrid";
import Doc from "../../components/doc";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";

import { Link } from "gatsby";

const GlossaryPage = () => (

<div id="docs">
  <Layout>
    <Sidebar/>
    <main>
      <div className="doc-content">
         <section className="text-left">
             <h1 className="glossary-header">Glossary</h1>
             <p className="glossary-header">This page explains some of the terms you may come across as you explore Appsody.</p>
             <GlossaryItemGrid/>
         </section>
         <section className="jumpbar d-none"> 
         </section>
      </div>
      </main>
      </Layout>
</div>
)

export default GlossaryPage;
