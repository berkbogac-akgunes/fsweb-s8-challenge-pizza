import { NavLink } from "react-router-dom"
import "./AnaSayfa.css"

export default function AnaSayfa() {
    return(
        <>
        <header className = "header-content">
          <h2 className = "header1">Teknolojik Yemekler</h2>
          <h1 className = "header2">KOD ACIKTIRIR, PİZZA DOYURUR</h1>
          <nav>
          <NavLink to="/siparis"><button className = "button1">ACIKTIM</button></NavLink>
          </nav>
      </header>
      </>
    )
}