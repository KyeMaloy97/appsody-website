import React from "react";
import { StaticQuery, graphql } from "gatsby";
import GlossaryItem from "../components/glossaryItem";

const GlossaryItemGrid = (props) => {

    const tiles = props.headings.map(heading => {
        if (heading == null) return null;

        return <GlossaryItem heading={heading} desc={props.desc}/>
        
        
    });

    return (
        <div className="container mx-0">
            <div id="application-stacks" className="row mx-auto">
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
                    html
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
        data.allMarkdownRemark.nodes[0].headings.forEach(node => {
            headings = headings.concat(node.value);
            console.log(data.allMarkdownRemark.nodes)
        });
        descriptions = descriptions.concat(data.allMarkdownRemark.nodes[0].html);

        return <GlossaryItemGrid headings={headings} desc={descriptions}/>
      }}
    />
  )
