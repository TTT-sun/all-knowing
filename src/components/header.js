import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby'
import {
    header_div,
    p_blogtitle
  } from './header.module.css'

const Header = () => {
    /* Step 2: Use the useStaticQuery hook and
      graphql tag to query for data
      (The query gets run at build time) */
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
    return (
      <header className={header_div}>
        <div><Link to="/" className={p_blogtitle}>{ data.site.siteMetadata.title }</Link></div>
      </header>
    )
  }



export default Header