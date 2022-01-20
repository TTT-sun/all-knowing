import React from "react"
import { Link } from "gatsby"
import {
    header_div,
    p_blogtitle
  } from './header.module.css'

let thisyear = String(new Date().getFullYear());

function Header() {
    return (
        <header className={header_div}>
            <div><Link to="/" className={p_blogtitle}>自動車保険一括見積もりプレゼント全キャンペーン{thisyear}</Link></div>
        </header>
    );
}

export default Header