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
  EN: "20% de reembolso para todos los usuarios | Código: NEWMEMBER",
}

const NAV = {
  ES: [
    { label: "Incio", href: "#home" },
    { label: "Introducción", href: "#about" },
    { label: "Productos", href: "#why-us" },
    { label: "Proveedores", href: "#services" },
    { label: "Contactos", href: "#contact" },
  ],
  EN: [
    { label: "Incio", href: "#home" },
    { label: "Introducción", href: "#about" },
    { label: "Productos", href: "#why-us" },
    { label: "Proveedores", href: "#services" },
    { label: "Contactos", href: "#contact" },
  ],
};

const BANNER = {
  ES: {
    small: "WE ARE LOGCHAIN EXPRESS",
    big: "YOUR LOGISTICS, OUR COMMITMENT",
    button: "Get Started",
  },
  EN: {
    small: "CHÚNG TÔI LÀ LOGCHAIN EXPRESS",
    big: "TỐI ƯU LOGISTICS CHO BẠN -\nCAM KẾT CỦA CHÚNG TÔI",
    button: "Bắt đầu hành trình tối ưu vận chuyển",
  },
}

const ABOUT = {
  ES: {
    title1: "¿Quiénes",
    title2: "somos?",
    text1: "TBMEX S.A. es una empresa mixta miembro de Thai Binh Corporation dedicada a la comercialización minorista, mayorista y el comercio electrónico. Nuestro compromiso es ofrecer productos de calidad, precios asequibles y un servicio confiable en cada rincón del país.",
    text2: "Desde nuestras tiendas físicas hasta nuestra plataforma digital, ponemos a su alcance una amplia variedad de productos, con promociones exclusivas y beneficios que premian su fidelidad. Somos un puente que acerca soluciones prácticas y accesibles, para su negocio y las familias cubanas.",
  },
  EN: {
    title1: "¿Quiénes",
    title2: "somos?",
    text1: "TBMEX S.A. es una empresa mixta miembro de Thai Binh Corporation dedicada a la comercialización minorista, mayorista y el comercio electrónico. Nuestro compromiso es ofrecer productos de calidad, precios asequibles y un servicio confiable en cada rincón del país.",
    text2: "Desde nuestras tiendas físicas hasta nuestra plataforma digital, ponemos a su alcance una amplia variedad de productos, con promociones exclusivas y beneficios que premian su fidelidad. Somos un puente que acerca soluciones prácticas y accesibles, para su negocio y las familias cubanas.",
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
}

const PRODUCTS = {
  ES: {
    title: "Productos",
    items: [
      "Alimentos", "Aseo e higiene", "Útiles del hogar y ajuares", "Electrónica", "Energía renovable", "Ferretería",
    ]
  },
  EN: {
    title: "Productos",
    items: [
      "Alimentos", "Aseo e higiene", "Útiles del hogar y ajuares", "Electrónica", "Energía renovable", "Ferretería",
    ]
  },
}

const INVESTMENT = {
  ES: {
    title: "Technology Investment",
    items: [
      { title: "Software Solutions", desc: "Logchain Express utilizes the latest in logistics software, offering unparalleled efficiency and transparency." },
      { title: "Tracking Support", desc: "Our tracking systems allow access to information about their shipments, anytime and anywhere." },
      { title: "Innovation", desc: "We are investing in AI and blockchain technology to further enhance the accuracy and security of our logistics services." },
    ]
  },
  EN: {
    title: "Công nghệ & \nVận hành",
    items: [
      { title: "Giải pháp phần mềm", desc: "Sử dụng hệ thống quản lý logistics tiên tiến, mang lại hiệu quả và minh bạch vượt trội." },
      { title: "Theo dõi thời gian thực", desc: "Khách hàng có thể kiểm tra trạng thái lô hàng mọi lúc, mọi nơi." },
      { title: "Đổi mới liên tục", desc: "Logchain Express đầu tư vào AI và Blockchain để tăng cường độ chính xác, bảo mật và hiệu suất vận hành." },
    ]
  },
}

const GLOBAL = {
  ES: {
    title: "Global Reach",
    subtitle: "With hubs in over",
    subtitleRed: "20 countries",
    text: "We collaborate with leading logistics providers to extend our service capabilities.\nOur network spans across continents ensuring global reach with local expertise.",
  },
  EN: {
    title: "Mạng lưới toàn cầu",
    subtitle: "Hiện Logchain Express có mặt tại hơn",
    subtitleRed: "20 quốc gia",
    text: "Hợp tác cùng các nhà cung cấp logistics hàng đầu thế giới.\nMạng lưới của chúng tôi đảm bảo tầm phủ toàn cầu với chuyên môn địa phương, giúp kết nối liền mạch và tối ưu chi phí vận hành.",
  },
}

const EXCELLENCE = {
  ES: {
    title: "Operational Excellence",
    items: [
      { title: "Efficiency Metrics", desc: "We aim to operate by a 99% on-time delivery rate and a less than 1% error rate." },
      { title: "Quality Control", desc: "We adhere to strict quality control measures ensuring that every service meets our high standards." },
      { title: "Sustainability Efforts", desc: "Committed to reducing our carbon footprint, we have implemented several green initiatives." },
    ]
  },
  EN: {
    title: "Vận hành xuất sắc",
    items: [
      { title: "Chỉ số Hiệu quả", desc: "Chúng tôi đặt mục tiêu vận hành với tỷ lệ giao hàng đúng hạn đạt 99% và tỷ lệ sai sót dưới 1%." },
      { title: "Kiểm soát Chất lượng", desc: "Chúng tôi tuân thủ các quy trình kiểm soát chất lượng nghiêm ngặt, đảm bảo mọi dịch vụ đều đáp ứng tiêu chuẩn cao mà Logchain Express đặt ra." },
      { title: "Nỗ lực Phát triển Bền vững", desc: "Với cam kết giảm thiểu dấu chân carbon, chúng tôi đã triển khai nhiều sáng kiến xanh nhằm thúc đẩy vận hành thân thiện với môi trường." },
    ]
  },
}

const WHY = {
  ES: {
    title: "Why us",
    items: [
      { title: "Customer Alerts", desc: "Receive real-time updates via SMS, email, keeping you informed at every step of your shipment." },
      { title: "Personalized Reporting", desc: "Get customized reports with detailed analytics on your logistics activities, helping to streamline operations and reduce costs." },
      { title: "Confirmed Delivery", desc: "Enjoy peace of mind with instant delivery confirmations and proof of delivery for all shipments." },
      { title: "Security", desc: "Trust in our rigorous security measures, including 24/7 surveillance, GPS tracking, and stringent staff vetting, ensuring the safety of your goods at all." },
    ]
  },
  EN: {
    title: "Tại sao \nchọn chúng tôi",
    items: [
      { title: "Cảnh báo khách hàng tức thời", desc: "Thông báo qua SMS và Email ở từng giai đoạn giao hàng." },
      { title: "Báo cáo tùy chỉnh", desc: "Cung cấp báo cáo chi tiết giúp phân tích hiệu quả vận hành và giảm chi phí logistics." },
      { title: "Xác nhận giao hàng", desc: "Mỗi đơn hàng đều có bằng chứng giao hàng (Proof of Delivery), đảm bảo minh bạch và chính xác." },
      { title: "Bảo mật tối đa", desc: "Với giám sát 24/7, định vị GPS, và kiểm tra nhân sự nghiêm ngặt - hàng hóa của bạn luôn được bảo vệ an toàn tuyệt đối." },
    ]
  },
}

const CONTACT = {
  ES: {
    title: "Contact us",
    email: "sales@logchain.vn",
    phone: "+84 28 221 28 425",
    address: "5th floor, Ha Son building, 277A Nguyen Van Dau, Binh Loi Trung Ward, HCMC, Vietnam",
  },
  EN: {
    title: "Liên hệ",
    email: "sales@logchain.vn",
    phone: "+84 28 221 28 425",
    address: "Lầu 5, Toà nhà Hà Sơn, 277A Nguyễn Văn Đậu, phường Bình Lợi Trung, Thành phố Hồ Chí Minh, Việt Nam",
  },
}

const FOOTER = {
  ES: {
    items: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Why us", href: "#why-us" },
      { label: "Services", href: "#services" },
    ],
    text: "@2025 Copyright. All Rights Reserved",
  },
  EN: {
    items: [
      { label: "Home", href: "#home" },
      { label: "Về chúng tôi", href: "#about" },
      { label: "Tại sao chọn chúng tôi", href: "#why-us" },
      { label: "Dịch vụ", href: "#services" },
    ],
    text: "@2025 Copyright. All Rights Reserved",
  },
}

import "./App.css";

export default function App() {
  const [lang, setLang] = useState("ES")
  const [menu, setMenu] = useState(false)
  const [chargesMenu, setChargesMenu] = useState(false)
  const [termsMenu, setTermsMenu] = useState(false)
  useEffect(() => {
    setChargesMenu(false)
    setTermsMenu(false)
  }, [menu])
  

  return (
    <>
      <header className="header vertical-container">
        <div className="header-text">{NAVTEXT[lang]}</div>
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
          <section id="home" className="home-banner">
            {/* <div className="title-small align-center">{BANNER[lang].small}</div>
            <div className="title-big align-center">{BANNER[lang].big}</div>
            <div className="button">{BANNER[lang].button}</div> */}
          </section>

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
          <div className="horizontal-container">
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

        {/* <section className="investment vertical-container">
          <div className="title align-center">{INVESTMENT[lang].title}</div>
          <div className="horizontal-container">
            {
              INVESTMENT[lang].items.map((n,i) => (
                <div key={i} className="investment-item vertical-container" style={{backgroundImage: `url(/images/investment-${i+1}.png)`}}>
                  <div className="investment-item-title align-center">{n.title}</div>
                  <div className="investment-item-text align-center">{n.desc}</div>
                </div>
              ))
            }
          </div>
        </section>

        <section className="global vertical-container">
          <div className="horizontal-container">
            <div className="vertical-container">
              <div className="title">{GLOBAL[lang].title}</div>
              <div className="subtitle">{GLOBAL[lang].subtitle} <span className="subtitle-red">{GLOBAL[lang].subtitleRed}</span></div>
            </div>
            <div className="text">{GLOBAL[lang].text}</div>
          </div>
          <div className="img"></div>
        </section>

        <section className="excellence vertical-container">
          <div className="title align-center">{EXCELLENCE[lang].title}</div>
          <div className="horizontal-container">
            <div className="img"></div>
            <div className="vertical-container">
              {
                EXCELLENCE[lang].items.map((n,i) => (
                  <div key={i} className="excellence-item vertical-container">
                    <div className="excellence-item-img" style={{backgroundImage: `url(/images/excellence-${i+1}.png)`}}></div>
                    <div className="excellence-item-title">{n.title}</div>
                    <div className="excellence-item-text">{n.desc}</div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        <section id="why-us" className="why vertical-container">
          <div className="title align-center">{WHY[lang].title}</div>
          <div className="horizontal-container">
            {
              WHY[lang].items.map((n,i) => (
                <div key={i} className="why-item vertical-container">
                  <div className="why-item-img" style={{backgroundImage: `url(/images/why-${i+1}.png)`}}></div>
                  <div className="why-item-title align-center">{n.title}</div>
                  <div className="why-item-text align-center">{n.desc}</div>
                </div>
              ))
            }
          </div>
        </section>

        <section id="contact" className="contact horizontal-container">
          <div className="title">{CONTACT[lang].title}</div>
          <div className="vertical-container">
            <div className="contact-item horizontal-container">
              <div className="logo-1"></div>
              <a href={`mailto:${CONTACT[lang].email}`} className="contact-item-text">{CONTACT[lang].email}</a>
            </div>
            <div className="contact-item horizontal-container">
              <div className="logo-2"></div>
              <a href={`tel:${CONTACT[lang].phone}`} className="contact-item-text">{CONTACT[lang].phone}</a>
            </div>
            <div className="contact-item horizontal-container">
              <div className="logo-3"></div>
              <div href={`tel:${CONTACT[lang].address}`} className="contact-item-text">{CONTACT[lang].address}</div>
            </div>
          </div>
        </section> */}
      </main>

      {/* <footer className="footer horizontal-container">
        <div className="logo"></div>
        <div className="horizontal-container">
          {
            FOOTER[lang].items.map((n,i) => (
              <a key={i} href={n.href} className="footer-item">{n.label}</a>
            ))
          }
        </div>
        <div className="text">{FOOTER[lang].text}</div>
      </footer> */}
      <img className="temp" src="/images/temp.png" alt="" srcset="" />
    </>
  );
}