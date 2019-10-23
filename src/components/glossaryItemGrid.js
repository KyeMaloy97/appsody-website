import React from "react";
import { StaticQuery, graphql } from "gatsby";
import GlossaryItem from "../components/glossaryItem";

const GlossaryItemGrid = (props) => {

    const tiles = props.headings.map((heading, index) => {
        if (heading == null) return null;
        return <GlossaryItem heading={heading} desc={props.desc[index]}/>
    });

    return (
        <div className="glossary-container">
            <div className="row glossary-list">
                {tiles}
            </div>
        </div>
    )
}

export default () => (
    <StaticQuery
      query={graphql`
        query {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/docs/glossary/"}}) {
                nodes {
                    htmlAst
                    headings {
                        value
                            }
                        }
                }
            }
      `}
      render={data => {
          
        let headings = [];
        let descriptions = [];

        data.allMarkdownRemark.nodes[0].htmlAst.children.forEach(node => {
            if (node.tagName === "h2" && node.type === "element") {
            headings = headings.concat(node.children[1].value);
            }
        });

        data.allMarkdownRemark.nodes[0].htmlAst.children.forEach(node => {
            if (node.tagName === "p" && node.type === "element") {
                descriptions = descriptions.concat(node.children[0].value);
            }
        });
        return <GlossaryItemGrid headings={headings} desc={descriptions}/>
      }}
    />
  )
