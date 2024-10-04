import React, { useState } from "react";
import { Link } from "react-scroll";
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Zustand für Menü öffnen/schließen

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Zustand umschalten
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (window.innerWidth <= 768) {
      toggleMenu(); // Close menu if on mobile
    }
  };

  return (
    <div className={`sidebar-container ${isMenuOpen ? 'open' : ''}`}>
      {/* Mobile Menü-Button */}
      <button className="menu-button" onClick={toggleMenu}>
        &#9776; {/* Unicode für das Hamburger-Icon */}
      </button>

      <div className="sidebar-left">
        <img
          src="/boecklin-logo.png"
          alt="Logo"
          className="logo"
        />
        <div className="owner-story">
          <h2>Über den Besitzer</h2>
          <p>
            Arnold Böcklin wurde am 16. Oktober 1827 in Basel, Schweiz, geboren. Schon
            in jungen Jahren zeigte sich seine Leidenschaft für die Kunst, als er die
            meiste Zeit mit Zeichnen und Malen verbrachte. Seine Familie, die
            ursprünglich keine Künstlerfamilie war, erkannte schnell sein Talent und
            förderte es so gut es ging. Böcklins Vater, ein Kaufmann, war zunächst
            skeptisch gegenüber Arnolds Wunsch, Künstler zu werden, doch er konnte
            seinen Sohn nicht von seiner Bestimmung abbringen.
          </p>
          <p>
            Im Alter von 18 Jahren zog Arnold nach Düsseldorf, um an der renommierten
            Kunstakademie zu studieren. Dort vertiefte er sein Wissen über Maltechniken
            und ließ sich von den großen Meistern inspirieren. Sein künstlerisches
            Interesse konzentrierte sich zunächst auf die Landschaftsmalerei. Er war
            fasziniert von der Natur, den Bergen, Flüssen und dem Spiel des Lichts.
            Immer wieder zog es ihn in die Schweizer Alpen, wo er zahlreiche Skizzen
            anfertigte, die später zu seinen ersten erfolgreichen Gemälden führen
            sollten.
          </p>
          <p>
            Doch die Kunstwelt war nicht immer gnädig zu Böcklin. Anfangs fand er nur
            schwer Anerkennung, und seine Arbeiten wurden oft als zu düster oder
            ungewöhnlich betrachtet. Er ließ sich jedoch nicht entmutigen. In den
            1850er Jahren begann er, seine künstlerische Vision zu erweitern und sich
            für mythologische Themen zu interessieren. Inspiriert von den alten
            Griechen und Römern, begannen seine Werke eine mystische und surreale
            Qualität zu erhalten. Er integrierte Götter, Nymphen und mythologische
            Kreaturen in seine Landschaften, was seinen Bildern eine magische und
            geheimnisvolle Atmosphäre verlieh.
          </p>
          <p>
            Seine Reisen nach Italien prägten ihn zutiefst. In Rom entdeckte Böcklin
            eine völlig neue Welt. Die antike Architektur, die Geschichte der Stadt und
            die mediterrane Landschaft inspirierten ihn zu einigen seiner bedeutendsten
            Werke. Eines seiner berühmtesten Gemälde aus dieser Zeit war die
            "Toteninsel", ein mystisches Bild, das einen einsamen Friedhof auf einer
            Insel zeigt, umgeben von Wasser und düsteren Zypressen. Dieses Bild wurde
            zu einem der ikonischsten Werke der Symbolistischen Kunst des 19.
            Jahrhunderts.
          </p>
          <p>
            Böcklin lebte zeitweise in Florenz, wo er eine Villa kaufte, die ihm als
            Rückzugsort und Atelier diente. Hier verbrachte er viele Jahre, isoliert
            von der hektischen Welt, und malte in Ruhe. In Florenz lernte er auch seine
            Frau Angela kennen, die ihn fortan bei seiner Arbeit unterstützte. Sie
            wurde nicht nur seine Lebensgefährtin, sondern auch eine Muse, die ihn
            inspirierte, seine emotionalsten und intimsten Werke zu schaffen.
          </p>
        </div>
      </div>

      {/* Rechter Teil: Navigation, die auf Mobilgeräten versteckt wird */}
      <div className={`sidebar-right ${isMenuOpen ? 'visible' : ''}`}>
        <nav className="navigation">
          <ul>
            <li>
              <button
                onClick={() => scrollToSection("kaffee-section")}
              >
                Kaffee
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("kuchen-section")}
              >
                Kuchen
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("sandwiches-section")}
              >
                Sandwiches
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
