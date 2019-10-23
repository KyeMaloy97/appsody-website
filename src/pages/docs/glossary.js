import React from "react";

import Layout from "../../layouts"
import GlossaryItemGrid from "../../components/glossaryItemGrid";
import DocLayout from "../../components/docLayout";
import DocSidebar from "../../components/docSidebar";

import { Link } from "gatsby";

const GlossaryPage = () => (

<div id="docs">
  <DocLayout>
    <DocSidebar/>
    <main>
      <div className="doc-content pl-0">
         <section className="text-left">
             <h1 className="glossary-header">Glossary</h1>
             <p className="glossary-header">This page explains some of the terms you may come across as you explore Appsody.</p>
             <GlossaryItemGrid/>
         </section>
         <section className="jumpbar d-none">
           <div><h3>A</h3></div>
           <div><h3>B</h3></div>
           <div><h3>C</h3></div>
           <div><h3>D</h3></div>
           <div><h3>E</h3></div>
           <div><h3>F</h3></div>
           <div><h3>G</h3></div>
           <div><h3>H</h3></div>
           <div><h3>I</h3></div>
           <div><h3>J</h3></div>
           <div><h3>K</h3></div>
           <div><h3>L</h3></div>
           <div><h3>M</h3></div>
           <div><h3>N</h3></div>
           <div><h3>O</h3></div>
           <div><h3>P</h3></div>
           <div><h3>Q</h3></div>
           <div><h3>R</h3></div>
           <div><h3>S</h3></div>
           <div><h3>T</h3></div>
           <div><h3>U</h3></div>
           <div><h3>V</h3></div>
           <div><h3>W</h3></div>
           <div><h3>X</h3></div>
           <div><h3>Y</h3></div>
           <div><h3>Z</h3></div>
         </section>
      </div>
      </main>
      </DocLayout>
</div>


)

export default GlossaryPage
