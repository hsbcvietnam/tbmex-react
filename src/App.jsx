/*
  Plain CSS version — Add classes below in App.css.
  LogchainExpress React Single-file App
  - Paste this file as src/App.jsx in a new Vite + React + Tailwind project
  - Tailwind CSS required for styling (or replace classes with your own CSS)
  - Images are pulled directly from the original site; you can download and host them locally.

  Quick setup (Vite + Tailwind):
  1. npm create vite@latest my-app -- --template react
  2. cd my-app
  3. Install Tailwind (follow Tailwind + Vite docs) or use plain CSS and remove Tailwind classes
  4. Replace src/App.jsx with this file and run npm install && npm run dev
*/

import React, { useEffect, useState } from "react"
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect'

const NAVTEXT = {
  ES: "20% de reembolso para todos los usuarios | Código: NEWMEMBER",
  EN: "20% cashback for all users | Code: NEWMEMBER",
}

const NAV = {
  ES: [
    { label: "Inicio", href: "#home" },
    { label: "Sobre nosotros", href: "#about" },
    { label: "Productos", href: "#products" },
    { label: "Proveedores", href: "#stores" },
    { label: "Contactos", href: "#contact" },
  ],
  EN: [
    { label: "Home", href: "#home" },
    { label: "About us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Stores", href: "#stores" },
    { label: "Contact us", href: "#contact" },
  ],
};

const ABOUT = {
  ES: {
    title1: "¿Quiénes",
    title2: "somos?",
    text1: "TBMEX S.A. es una empresa mixta miembro de Thai Binh Corporation dedicada a la comercialización minorista, mayorista y el comercio electrónico. Nuestro compromiso es ofrecer productos de calidad, precios asequibles y un servicio confiable en cada rincón del país.",
    text2: "Desde nuestras tiendas físicas hasta nuestra plataforma digital, ponemos a su alcance una amplia variedad de productos, con promociones exclusivas y beneficios que premian su fidelidad. Somos un puente que acerca soluciones prácticas y accesibles, para su negocio y las familias cubanas.",
  },
  EN: {
    title1: "Who",
    title2: "are we?",
    text1: "TBMEX S.A. is a joint venture and member of Thai Binh Corporation, specializing in retail, wholesale, and e-commerce. Our commitment is to offer quality products, affordable prices, and reliable service throughout the country.",
    text2: "From our physical stores to our digital platform, we offer a wide variety of products, with exclusive promotions and benefits that reward your loyalty. We are a bridge that brings practical and accessible solutions to your business and Cuban families.",
  },
}

const OPERATION = {
  ES: {
    title: "¿POR QUÉ ELEGIR TBMEX?",
    items: [
      {
        title: "Calidad Garantizada",
        text: "Productos esenciales y de calidad",
      },
      {
        title: "Precios Asequibles",
        text: "Transparencia en precios para una compra segura",
      },
      {
        title: "Disponibles en Cuba",
        text: "Disponibles en Cuba, con cobertura real y constante",
      },
    ],
  },
  EN: {
    title: "WHY CHOOSE TBMEX?",
    items: [
      {
        title: "Quality Guaranteed",
        text: "Essential and quality products",
      },
      {
        title: "Affordable Prices",
        text: "Price transparency for a secure purchase",
      },
      {
        title: "Available in Cuba",
        text: "Available in Cuba, with real and constant coverage",
      },
    ],
  },
}

const PRODUCTS = {
  ES: {
    title: "Productos",
    items: [
      "Alimentos", "Aseo e higiene", "Útiles del hogar y ajuares", "Electrónica", "Energía renovable", "Ferretería",
    ]
  },
  EN: {
    title: "Products",
    items: [
      "Food", "Personal Care and Hygiene", "Household Goods and Furnishings", "Electronics", "Renewable Energy", "Hardware Store",
    ]
  },
}

const STORE = {
  ES: {
    title: "Nuestras tiendas",
    stores: [
      { title: "Tienda TBMEX Puentes Grandes", text: "Avenida 51 S/N esquina 26, Plaza de la Revolución, La Habana, Cuba." },
      { title: "Tienda TBMEX Santa Fe", text: "Nave No. 5, Calle 296 y Avenida 7ma. Santa Fe, Playa, La Habana, Cuba." },
    ],
    logistics: {
      title: "Logística y Transporte", text: "Servicio de transporte y distribución para pedidos mayoristas y reabastecimiento."
    }
  },
  EN: {
    title: "Our stores",
    stores: [
      { title: "TBMEX Puentes Grandes Store", text: "Avenue 51 S/N corner 26, Plaza de la Revolución, La Habana, Cuba." },
      { title: "TBMEX Santa Fe Store", text: "Warehouse No. 5, 296th Street and 7th Avenue. Santa Fe, Playa, La Habana, Cuba." },
    ],
    logistics: {
      title: "Logistics and Transportation", text: "Transportation and distribution service for wholesale orders and restocking."
    }
  },
}

const TEMP = {
  ES: "En TBMEX, nos esforzamos por ofrecerle una amplia gama de productos de alta calidad, obtenidos de manera confiable de nuestros socios de confianza.",
  EN: "At TBMEX, we strive to offer you a wide range of high-quality products, reliably sourced from our trusted partners.",
}

const CTA = {
  ES: "Entra al grupo",
  EN: "Join our group",
}

const FOOTER = {
  ES: {
    externalLinks: [
      "https://chat.whatsapp.com/GsjZwKcNslQLGVfvUjGpHM", "https://www.instagram.com/tbmex.sa?igsh=azJjeWZ3bHF1MHRy", "https://www.facebook.com/profile.php?id=61585909214895"
    ],
    text: "© 2026. All Rights Reserved.",
    contact: {
      title: "Contáctenos",
      text1: "Avenida 51 S/N esquina 26, Plaza de la Revolución, La Habana, Cuba",
      subtitle: "Almacén",
      text2: "Nave No.5, Calle 296 y Avenida 7ma. Santa Fe, Playa, La Habana, Cuba",
    },
    contactLinks: [
      {
        pre: "tel:",
        links: ["(+53) 54655434", "(+53) 54655197",],
      },
      {
        pre: "mailto:",
        links: ["ventas@tbmex.co.cu",],
      },
      {
        pre: "https://www.",
        links: ["tbmexsa.com",],
      },
    ],
    menu: {
      title: "Sobre TBMEX",
      items: [
        { name: "Proveedores", link: "", },
        { name: "Noticias y Blog", link: "", },
        { name: "Productos", link: "", },
        { name: "Sobre nosotros", link: "", },
      ],
    },
  },
  EN: {
    externalLinks: [
      "https://chat.whatsapp.com/GsjZwKcNslQLGVfvUjGpHM", "https://www.instagram.com/tbmex.sa?igsh=azJjeWZ3bHF1MHRy", "https://www.facebook.com/profile.php?id=61585909214895"
    ],
    text: "© 2026. All Rights Reserved.",
    contact: {
      title: "Contact us",
      text1: "Avenue 51 S/N corner 26, Plaza de la Revolución, La Habana, Cuba",
      subtitle: "Store",
      text2: "Warehouse No. 5, 296th Street and 7th Avenue. Santa Fe, Playa, La Habana, Cuba",
    },
    contactLinks: [
      {
        pre: "tel:",
        links: ["(+53) 54655434", "(+53) 54655197",],
      },
      {
        pre: "mailto:",
        links: ["ventas@tbmex.co.cu",],
      },
      {
        pre: "www.",
        links: ["tbmexsa.com",],
      },
    ],
    menu: {
      title: "About TBMEX",
      items: [
        { name: "Stores", link: "", },
        { name: "News and Blog", link: "", },
        { name: "Products", link: "", },
        { name: "About us", link: "", },
      ],
    },
  },
}

import "./App.css";

export default function App() {
  const [lang, setLang] = useState("ES")
  const [menu, setMenu] = useState(false)

  return (
    <>
      <header className="header vertical-container">
        {/* <div className="header-text">{NAVTEXT[lang]}</div> */}
        <div className="real-header horizontal-container">
          <a href="#home" className="header-logo"></a>
          {
            (isMobile) &&
            <div 
              className="close-button" 
              onClick={() => {setMenu(!menu)}} 
              style={{backgroundImage: (menu) ? ('url(/images/close.png)') : ('url(/images/menu.png)')}}
            ></div>
          }
          <nav className="header-menu" style={{display: (isMobile && !menu) ? ("none") : ("flex")}}>
            {NAV[lang].map((n) => (
              <a key={n.href} href={n.href} className="header-menu-item" onClick={() => setMenu(false)}>{n.label}</a>
            ))}
            <div 
              className="header-button language-button" 
              onClick={() => {
                setMenu(false)
                setLang((lang === "ES") ? ("EN") : ("ES"))
              }}
            >
              {(lang === "ES") ? ("English") : ("Espanol")}
            </div>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="first-section vertical-container">
          <section id="home" className="home-banner" style={{display: (lang === 'ES') ? (null) : ("none")}}>
            {/* <div className="title-small align-center">{BANNER[lang].small}</div>
            <div className="title-big align-center">{BANNER[lang].big}</div>
            <div className="button">{BANNER[lang].button}</div> */}
          </section>
          <section className="home-banner home-banner-en" style={{display: (lang === 'EN') ? (null) : ("none")}}></section>

          <section id="about" className="about vertical-container">
            <div className="horizontal-container">
              <div className="title">{ABOUT[lang].title1}</div>
              <div className="image"></div>
              <div className="title">{ABOUT[lang].title2}</div>
            </div>
            <div className="text">{ABOUT[lang].text1}</div>
            <div className="text">{ABOUT[lang].text2}</div>
          </section>
        </div>

        <section id="operation" className="operation vertical-container">
          <div className="title">{OPERATION[lang].title}</div>
          <div className="horizontal-container vertical-mobile">
            {
              OPERATION[lang].items.map((i,k) => (
                <div key={k} className="item horizontal-container">
                  <div className="image" style={{backgroundImage: `url(/images/about-${k+1}.png)`}}></div>
                  <div className="vertical-container">
                    <div className="title">{i.title}</div>
                    <div className="text">{i.text}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </section>

        <section id="products" className="products vertical-container">
          <div className="title">{PRODUCTS[lang].title}</div>
          <div className="grid">
            {
              PRODUCTS[lang].items.map((i,k) => (
                <div key={k} className="item vertical-container">
                  <div className="image" style={{backgroundImage: `url(/images/product-${k+1}.png)`}}></div>
                  <div className="text">{i}</div>
                </div>
              ))
            }
          </div>
        </section>

        <section id="stores" className="stores vertical-container">
          <div className="title">{STORE[lang].title}</div>
          <div className="horizontal-container vertical-mobile">
            {
              STORE[lang].stores.map((i,k) => (
                <div key={k} className="item vertical-container">
                  <div className="image" style={{backgroundImage: `url(/images/store-${k+1}.png)`}}></div>
                  <div className="title">{i.title}</div>
                  <div className="text">{i.text}</div>
                </div>
              ))
            }
          </div>
          <div className="logistics vertical-mobile">
            <div className="image"></div>
            <div className="vertical-container">
              <div className="title">{STORE[lang].logistics.title}</div>
              <div className="text">{STORE[lang].logistics.text}</div>
            </div>
          </div>
        </section>

        {/* <img className="temp" src="/images/temp.png" alt="" srcset="" /> */}
        <div className="temp-text">{TEMP[lang]}</div>

        <div 
          className="cta horizontal-container"
          onClick={() => window.open("https://chat.whatsapp.com/GsjZwKcNslQLGVfvUjGpHM", "_blank")}
        >
          <div className="image"></div>
          <div className="text">{CTA[lang]}</div>
        </div>
      </main>

      <footer id="contact" className="footer horizontal-container">
        <div className="vertical-container">
          <div className="logo"></div>
          <div className="horizontal-container">
            {
              FOOTER[lang].externalLinks.map((i,k) => (
                <a key={k} href={i} className="icon" style={{backgroundImage: `url(/images/footer-icon-${k+1}.png)`}}></a>
              ))
            }
          </div>
          <div className="text">{FOOTER[lang].text}</div>
        </div>
        <div className="vertical-container">
          <div className="title">{FOOTER[lang].contact.title}</div>
          <div className="horizontal-container">
            <div className="vertical-container">
              <div className="text">{FOOTER[lang].contact.text1}</div>
              <div className="subtitle">{FOOTER[lang].contact.subtitle}</div>
              <div className="text">{FOOTER[lang].contact.text2}</div>
            </div>
            <div className="vertical-container">
              {
                FOOTER[lang].contactLinks.map((i,k) => (
                  <div key={k} className="link-item horizontal-container">
                    <div className="image" style={{backgroundImage: `url(/images/footer-linkicon-${k+1}.png)`}}></div>
                    <div className="vertical-container">
                      {
                        i.links.map((item, index) => (
                          <a key={index} href={`${i.pre}${item}`} className="link-text">{item}</a>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="vertical-container">
          <div className="title">{FOOTER[lang].menu.title}</div>
          {
            FOOTER[lang].menu.items.map((i,k) => (
              <a key={k} href={i.link} className="menu-item">{i.name}</a>
            ))
          }
        </div>
      </footer>
    </>
  );
}