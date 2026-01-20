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

import React, { useEffect, useState } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const NAV = {
  EN: [
    // { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Why us", href: "#why-us" },
    { label: "Services", href: "#services" },
  ],
  VI: [
    // { label: "Home", href: "#home" },
    { label: "Về chúng tôi", href: "#about" },
    { label: "Tại sao chọn chúng tôi", href: "#why-us" },
    { label: "Dịch vụ", href: "#services" },
  ],
};

const CHARGES = {
  EN: {
    title: "Charges",
    items: [
      {label: "Domestic Shipping Charges", href: "https://logchaingroup.vietteldrive.vn/s/kpgWG9x8YRWP2aw"},
      {label: "International Shipping Charges", href: "https://logchaingroup.vietteldrive.vn/s/iZmdN5o74zgNGMR"},
      {label: "Extra Charges", href: "https://logchaingroup.vietteldrive.vn/s/bYFCq7BFtCAY9Da"},
      {label: "Prohibited Items List", href: "https://logchaingroup.vietteldrive.vn/s/QtTkjwpRiFiNqS6"},
    ]
  },
  VI: {
    title: "Chi phí",
    items: [
      {label: "Chi phí vận chuyển quốc nội", href: "https://logchaingroup.vietteldrive.vn/s/kpgWG9x8YRWP2aw"},
      {label: "Chi phí vận chuyển quốc tế", href: "https://logchaingroup.vietteldrive.vn/s/iZmdN5o74zgNGMR"},
      {label: "Phí bổ sung", href: "https://logchaingroup.vietteldrive.vn/s/bYFCq7BFtCAY9Da"},
      {label: "Danh sách vật phẩm cấm", href: "https://logchaingroup.vietteldrive.vn/s/QtTkjwpRiFiNqS6"},
    ]
  },
}

const TERMS = {
  EN: {
    title: "Terms & Conditions",
    items: [
      {label: "Terms & Conditions (English)", href: "https://logchaingroup.vietteldrive.vn/s/pc4YFAMYeH6swYJ"},
      {label: "Terms & Conditions (Vietnamese)", href: "https://logchaingroup.vietteldrive.vn/s/HNqiLFzaPS52SHt"},
      {label: "Complaints", href: "https://logchaingroup.vietteldrive.vn/s/SMNRrwDY5weYywg"},
      {label: "Rights and Duties", href: "https://logchaingroup.vietteldrive.vn/s/WmHAsHxFb82eJ4w"},
    ]
  },
  VI: {
    title: "Điều khoản & Điều kiện",
    items: [
      {label: "Tiếng Anh", href: "https://logchaingroup.vietteldrive.vn/s/pc4YFAMYeH6swYJ"},
      {label: "Tiếng Việt", href: "https://logchaingroup.vietteldrive.vn/s/HNqiLFzaPS52SHt"},
      {label: "Khiếu nại và Bồi thường", href: "https://logchaingroup.vietteldrive.vn/s/SMNRrwDY5weYywg"},
      {label: "Quyền và Nghĩa vụ", href: "https://logchaingroup.vietteldrive.vn/s/WmHAsHxFb82eJ4w"},
    ]
  },
}

const BANNER = {
  EN: {
    small: "WE ARE LOGCHAIN EXPRESS",
    big: "YOUR LOGISTICS, OUR COMMITMENT",
    button: "Get Started",
  },
  VI: {
    small: "CHÚNG TÔI LÀ LOGCHAIN EXPRESS",
    big: "TỐI ƯU LOGISTICS CHO BẠN -\nCAM KẾT CỦA CHÚNG TÔI",
    button: "Bắt đầu hành trình tối ưu vận chuyển",
  },
}

const ABOUT = {
  EN: {
    title: "About us",
    text1: "Founded in 2023, Logchain Express was established with the aim to revolutionize the logistics industry through technology and dedicated service.",
    text2: "“At Logchain Express, we commit to delivering logistical solutions that not only meet but exceed the dynamic needs of our clients.”",
    text3: "- Logchain Express CEO -",
    box: [
      {
        title: "OUR MISSION",
        text: "To provide innovative, efficient, and sustainable logistics solutions that empower businesses globally.",
      },
      {
        title: "OUR VISION",
        text: "To become a leader in logistics services by consistently exceeding our customers' expectations and expanding our global footprint.",
      },
    ],
    valueTitle: "OUR VALUES",
    values: [
      "Integrity & Ethics", "Client Focus", "Cultural Respect", "Flexibility", "Safety & Sustainability",
    ],
  },
  VI: {
    title: "Về Logchain",
    text1: "Được thành lập vào năm 2023, Logchain Express ra đời với mục tiêu cách mạng hóa ngành logistics thông qua công nghệ tiên tiến và dịch vụ tận tâm.",
    text2: "“Tại Logchain Express, chúng tôi luôn nỗ lực mang đến những giải pháp logistics không chỉ đáp ứng mà còn vượt xa kỳ vọng thay đổi từng ngày của khách hàng.”",
    text3: "- Logchain Express CEO -",
    box: [
      {
        title: "SỨ MỆNH",
        text: "Mang đến những giải pháp logistics sáng tạo, hiệu quả và bền vững, giúp doanh nghiệp phát triển mạnh mẽ trong môi trường toàn cầu.",
      },
      {
        title: "TẦM NHÌN",
        text: "Trở thành đơn vị dẫn đầu trong lĩnh vực logistics, không ngừng mở rộng mạng lưới toàn cầu và nâng cao trải nghiệm khách hàng.",
      },
    ],
    valueTitle: "GIÁ TRỊ CỐT LÕI",
    values: [
      "Chính trực và minh bạch", "Lấy khách hàng\nlàm trung tâm", "Tôn trọng văn hoá\nvà con người", "Linh hoạt,\nthích ứng nhanh", "An toàn và\nphát triển bền vững",
    ],
  },
}

const OPERATION = {
  EN: {
    title: "Logistics operations",
    text: "We structured to optimize logistics operations",
  },
  VI: {
    title: "Hoạt động Logistics",
    text: "Chúng tôi được tổ chức và cấu trúc để tối ưu hóa toàn bộ hoạt động logistics, đảm bảo quy trình vận hành hiệu quả, đồng bộ và minh bạch.",
  },
}

const SERVICES = {
  EN: {
    title: "Our Services",
    items: [
      { title: "Express Delivery", desc: "Guaranteed next-day delivery for time-sensitive shipments across select regions." },
      { title: "Economy Express", desc: "Cost-effective, reliable delivery options for less urgent shipments, balancing speed and budget." },
      { title: "Door to Airport", desc: "Convenient service handling the transport of goods from the sender's location directly to the airport, ideal for international freight forwarding." },
      { title: "Last Mile Delivery", desc: "Ensuring timely and efficient delivery from local hubs to the final delivery point, enhancing customer satisfaction." },
      { title: "Ecommerce Solutions", desc: "Specialized services designed to support online businesses, including integrated logistics, warehousing, and reverse logistics." },
      { title: "Parcel Express", desc: "Fast and reliable parcel delivery services for both domestic and international markets, with real-time tracking features." },
    ]
  },
  VI: {
    title: "Dịch vụ của chúng tôi",
    items: [
      { title: "Dịch vụ nhanh", desc: "Dịch vụ giao hàng nhanh, cam kết giao trong ngày hôm sau cho các khu vực được chọn - dành cho lô hàng cần tốc độ cao và độ tin cậy tuyệt đối." },
      { title: "Dịch vụ tiết kiệm", desc: "Giải pháp vận chuyển tiết kiệm chi phí cho hàng hóa không quá gấp, cân bằng giữa tốc độ và ngân sách." },
      { title: "Dịch vụ đến sân bay", desc: "Dịch vụ vận chuyển từ cửa người gửi đến sân bay, lý tưởng cho các chuyến hàng quốc tế cần quy trình nhanh gọn.\nBáo giá theo từng thời điểm." },
      { title: "Dịch vụ chặng cuối", desc: "Dịch vụ giao hàng chặng cuối cùng - đảm bảo tốc độ, độ chính xác và trải nghiệm khách hàng xuất sắc.\nĐã bao gồm trong báo giá cước phí quốc tế." },
      { title: "Dịch vụ E-commerce", desc: "Giải pháp cho doanh nghiệp thương mại điện tử, tích hợp các khâu logistics, kho hàng và logistics ngược.\nBáo giá theo từng thời điểm và ngành hàng." },
      { title: "Dịch vụ vận chuyển nội địa", desc: "Giao nhận bưu kiện nhanh trong nước và quốc tế, có theo dõi thời gian thực, an toàn và tiện lợi." },
    ]
  },
}

const INVESTMENT = {
  EN: {
    title: "Technology Investment",
    items: [
      { title: "Software Solutions", desc: "Logchain Express utilizes the latest in logistics software, offering unparalleled efficiency and transparency." },
      { title: "Tracking Support", desc: "Our tracking systems allow access to information about their shipments, anytime and anywhere." },
      { title: "Innovation", desc: "We are investing in AI and blockchain technology to further enhance the accuracy and security of our logistics services." },
    ]
  },
  VI: {
    title: "Công nghệ & \nVận hành",
    items: [
      { title: "Giải pháp phần mềm", desc: "Sử dụng hệ thống quản lý logistics tiên tiến, mang lại hiệu quả và minh bạch vượt trội." },
      { title: "Theo dõi thời gian thực", desc: "Khách hàng có thể kiểm tra trạng thái lô hàng mọi lúc, mọi nơi." },
      { title: "Đổi mới liên tục", desc: "Logchain Express đầu tư vào AI và Blockchain để tăng cường độ chính xác, bảo mật và hiệu suất vận hành." },
    ]
  },
}

const GLOBAL = {
  EN: {
    title: "Global Reach",
    subtitle: "With hubs in over",
    subtitleRed: "20 countries",
    text: "We collaborate with leading logistics providers to extend our service capabilities.\nOur network spans across continents ensuring global reach with local expertise.",
  },
  VI: {
    title: "Mạng lưới toàn cầu",
    subtitle: "Hiện Logchain Express có mặt tại hơn",
    subtitleRed: "20 quốc gia",
    text: "Hợp tác cùng các nhà cung cấp logistics hàng đầu thế giới.\nMạng lưới của chúng tôi đảm bảo tầm phủ toàn cầu với chuyên môn địa phương, giúp kết nối liền mạch và tối ưu chi phí vận hành.",
  },
}

const EXCELLENCE = {
  EN: {
    title: "Operational Excellence",
    items: [
      { title: "Efficiency Metrics", desc: "We aim to operate by a 99% on-time delivery rate and a less than 1% error rate." },
      { title: "Quality Control", desc: "We adhere to strict quality control measures ensuring that every service meets our high standards." },
      { title: "Sustainability Efforts", desc: "Committed to reducing our carbon footprint, we have implemented several green initiatives." },
    ]
  },
  VI: {
    title: "Vận hành xuất sắc",
    items: [
      { title: "Chỉ số Hiệu quả", desc: "Chúng tôi đặt mục tiêu vận hành với tỷ lệ giao hàng đúng hạn đạt 99% và tỷ lệ sai sót dưới 1%." },
      { title: "Kiểm soát Chất lượng", desc: "Chúng tôi tuân thủ các quy trình kiểm soát chất lượng nghiêm ngặt, đảm bảo mọi dịch vụ đều đáp ứng tiêu chuẩn cao mà Logchain Express đặt ra." },
      { title: "Nỗ lực Phát triển Bền vững", desc: "Với cam kết giảm thiểu dấu chân carbon, chúng tôi đã triển khai nhiều sáng kiến xanh nhằm thúc đẩy vận hành thân thiện với môi trường." },
    ]
  },
}

const WHY = {
  EN: {
    title: "Why us",
    items: [
      { title: "Customer Alerts", desc: "Receive real-time updates via SMS, email, keeping you informed at every step of your shipment." },
      { title: "Personalized Reporting", desc: "Get customized reports with detailed analytics on your logistics activities, helping to streamline operations and reduce costs." },
      { title: "Confirmed Delivery", desc: "Enjoy peace of mind with instant delivery confirmations and proof of delivery for all shipments." },
      { title: "Security", desc: "Trust in our rigorous security measures, including 24/7 surveillance, GPS tracking, and stringent staff vetting, ensuring the safety of your goods at all." },
    ]
  },
  VI: {
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
  EN: {
    title: "Contact us",
    email: "sales@logchain.vn",
    phone: "+84 28 221 28 425",
    address: "5th floor, Ha Son building, 277A Nguyen Van Dau, Binh Loi Trung Ward, HCMC, Vietnam",
  },
  VI: {
    title: "Liên hệ",
    email: "sales@logchain.vn",
    phone: "+84 28 221 28 425",
    address: "Lầu 5, Toà nhà Hà Sơn, 277A Nguyễn Văn Đậu, phường Bình Lợi Trung, Thành phố Hồ Chí Minh, Việt Nam",
  },
}

const FOOTER = {
  EN: {
    items: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Why us", href: "#why-us" },
      { label: "Services", href: "#services" },
    ],
    text: "@2025 Copyright. All Rights Reserved",
  },
  VI: {
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
  const [lang, setLang] = useState("VI")
  const [menu, setMenu] = useState(false)
  const [chargesMenu, setChargesMenu] = useState(false)
  const [termsMenu, setTermsMenu] = useState(false)
  useEffect(() => {
    setChargesMenu(false)
    setTermsMenu(false)
  }, [menu])
  

  return (
    <div className="">
      <header className="header">
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
          <div className="header-menu-item">
            <div 
              className="menu-title menu-with-arrow" 
              onClick={() => {
                setTermsMenu(false)
                setChargesMenu(!chargesMenu)
              }}
            >{CHARGES[lang].title} 
              <svg class="arrow" viewBox="0 0 10 6" aria-hidden="true">
                <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div className="dropdown-menu" style={{display: (isMobile && chargesMenu) ? ("flex") : ((isMobile) ? ("none") : (""))}}>
              {
                CHARGES[lang].items.map((n, i) => (
                  <a key={i} href={n.href} target="_blank" className="dropdown-menu-item">{n.label}</a>
                ))
              }
            </div>
          </div>
          <div className="header-menu-item">
            <div 
              className="menu-title menu-with-arrow"
              onClick={() => {
                setChargesMenu(false)
                setTermsMenu(!termsMenu)
              }}
            >{TERMS[lang].title}
              <svg class="arrow" viewBox= "0 0 10 6" aria-hidden="true">
                <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div className="dropdown-menu" style={{display: (isMobile && termsMenu) ? ("flex") : ((isMobile) ? ("none") : (""))}}>
              {
                TERMS[lang].items.map((n, i) => (
                  <a key={i} href={n.href} target="_blank" className="dropdown-menu-item">{n.label}</a>
                ))
              }
            </div>
          </div>
          <a href="#contact" className="header-button" onClick={() => setMenu(false)}>{(lang === "EN") ? ("Contact") : ("Liên hệ")}</a>
          <div 
            className="header-button language-button" 
            onClick={() => {
              setMenu(false)
              setLang((lang === "EN") ? ("VI") : ("EN"))
            }}
          >
            {(lang === "EN") ? ("Tiếng Việt") : ("English")}
          </div>
        </nav>
      </header>

      <main className="main">
        <section id="home" className="home-banner">
          <div className="title-small align-center">{BANNER[lang].small}</div>
          <div className="title-big align-center">{BANNER[lang].big}</div>
          <div className="button">{BANNER[lang].button}</div>
        </section>

        <section id="about" className="about">
          <BrowserView>
            <div className="first-section vertical-container">
              <div className="horizontal-container">
                <div className="title">{ABOUT[lang].title}</div>
                <div className="text-1">{ABOUT[lang].text1}</div>
              </div>
              <div className="horizontal-container">
                <div className="vertical-container">
                  <div className="img-1"></div>
                  <div className="vertical-container">
                    <div className="text-2">{ABOUT[lang].text2}</div>
                    <div className="text-3">{ABOUT[lang].text3}</div>
                  </div>
                </div>
                <div className="img-2"></div>
              </div>
            </div>
          </BrowserView>
          <MobileView>
            <div className="first-section vertical-container">
              <div className="title">{ABOUT[lang].title}</div>
              <div className="text-1">{ABOUT[lang].text1}</div>
              <div className="img-1"></div>
              <div className="img-2"></div>
              <div className="text-2">{ABOUT[lang].text2}</div>
              <div className="text-3">{ABOUT[lang].text3}</div>
            </div>
          </MobileView>

          <div className="second-section vertical-container">
            <div className="red-background"></div>
            <div className="horizontal-container">
              {
                ABOUT[lang].box.map((n,i) => (
                  <div key={i} className="box" style={{backgroundImage: `url(/images/about-box-${i+1}.png)`}}>
                    <div className="box-title">{n.title}</div>
                    <div className="box-text">{n.text}</div>
                  </div>
                ))
              }
            </div>
            <div className="vertical-container values">
              <div className="title align-center">{ABOUT[lang].valueTitle}</div>
              <div className="horizontal-container">
                {
                  ABOUT[lang].values.map((n,i) => (
                    <div key={i} className="vertical-container value-item">
                      <div className="img" style={{backgroundImage: `url(/images/about-values-${i+1}.png)`}}></div>
                      <div className="text align-center">{n}</div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </section>

        <section id="operation" className="operation horizontal-container">
          <div className="vertical-container">
            <div className="title">{OPERATION[lang].title}</div>
            <div className="text">{OPERATION[lang].text}</div>
          </div>
          <div className="img"></div>
        </section>

        <section id="services" className="services vertical-container">
          <div className="title align-center">{SERVICES[lang].title}</div>
          <div className="horizontal-container">
            {SERVICES[lang].items.map((s, i) => (
              <div key={i} className="service-item vertical-container">
                <div alt={s.title} className="img" style={{backgroundImage: `url(/images/services-${i+1}.png)`}}></div>
                <div className="services-item-title">{s.title}</div>
                <div className="services-item-text">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="investment vertical-container">
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
        </section>
      </main>

      <footer className="footer horizontal-container">
        <div className="logo"></div>
        <div className="horizontal-container">
          {
            FOOTER[lang].items.map((n,i) => (
              <a key={i} href={n.href} className="footer-item">{n.label}</a>
            ))
          }
        </div>
        <div className="text">{FOOTER[lang].text}</div>
      </footer>
    </div>
  );
}