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
      <section className = "cesitler-section">
      <div className = "cesitler-container">
        <div className = "cesitler-card">
          <img src = "Assets/iteration-2-aseets/icons/1.svg" />
          <p>YENİ! Kore</p>
        </div>
        <div className = "cesitler-card">
          <img src = "Assets/iteration-2-aseets/icons/2.svg" />
          <p>Pizza</p>
        </div>
        <div className = "cesitler-card">
          <img src = "Assets/iteration-2-aseets/icons/3.svg" />
          <p>Burger</p>
        </div>
        <div className = "cesitler-card">
          <img src = "Assets/iteration-2-aseets/icons/4.svg" />
          <p>Kızartmalar</p>
        </div>
        <div className = "cesitler-card">
          <img src = "Assets/iteration-2-aseets/icons/5.svg" />
          <p>Fast Food</p>
        </div>
        <div className = "cesitler-card">
          <img src = "Assets/iteration-2-aseets/icons/6.svg" />
          <p>Gazlı İçecek</p>
        </div>
      </div>
    </section>
    <section className = "menu-section">
      <div className = "menu-container">
        <div className = "menu-card1">
          <h1 className = "menuHeader1">Özel Lezzetus</h1>
          <p className = "menuText1">Position: Absolute Acı Burger</p>
          <button className = "menuButton1">SİPARİŞ VER</button>
        </div>
        <div className = "menu-card2">
          <h1 className = "menuHeader2">Hackathlon Burger Menü</h1>
          <button className = "menuButton2">SİPARİŞ VER</button>
        </div>
        <div className = "menu-card3">
          <h1 className = "menuHeader3">Çoooook hızlı npm gibi kurye</h1>
          <button className = "menuButton3">SİPARİŞ VER</button>
        </div>
      </div>
    </section>
    <section className = "cesitler-section2">
      <p className = "cesitler2-text">En çok paketlenen menüler</p>
      <h2 className = "cesitler2-heading">Acıktıran Kodlara Doyuran Lezzetler</h2>
      <div className = "cesitler-container">
        <button className = "cesitler2-card">
          <img src = "Assets/iteration-2-aseets/icons/1.svg" />
          <p>Ramen</p>
        </button>
        <button className = "cesitler2-card">
          <img src = "Assets/iteration-2-aseets/icons/2.svg" />
          <p>Pizza</p>
        </button>
        <button className = "cesitler2-card">
          <img src = "Assets/iteration-2-aseets/icons/3.svg" />
          <p>Burger</p>
        </button>
        <button className = "cesitler2-card">
          <img src = "Assets/iteration-2-aseets/icons/4.svg" />
          <p>French fries</p>
        </button>
        <button className = "cesitler2-card">
          <img src = "Assets/iteration-2-aseets/icons/5.svg" />
          <p>Fast food</p>
        </button>
        <button className = "cesitler2-card">
          <img src = "Assets/iteration-2-aseets/icons/6.svg" />
          <p>Soft drinks</p>
        </button>
      </div>
    </section>
    <section className = "yiyecek-section">
      <div className = "yiyecek-container">
        <div className = "yiyecek-card">
          <img src = "Assets\iteration-2-aseets\pictures\food-1.png" />
          <h4>Terminal Pizza</h4>
          <div className = "yiyecek-text">
            <p>4.9</p>
            <div className = "yiyecek-text2">
              <p>(200)</p>
              <p>60₺</p>
            </div>
          </div>
        </div>
        <div className = "yiyecek-card">
          <img src = "Assets\iteration-2-aseets\pictures\food-2.png" />
          <h4>Position Absolute Acı Pizza</h4>
          <div className = "yiyecek-text">
            <p>4.9</p>
            <div className = "yiyecek-text2">
              <p>(200)</p>
              <p>60₺</p>
            </div>
          </div>
        </div>
        <div className = "yiyecek-card">
          <img src = "Assets\iteration-2-aseets\pictures\food-3.png" />
          <h4>useEffect Tavuklu Burger</h4>
          <div className = "yiyecek-text">
            <p>4.9</p>
            <div className = "yiyecek-text2">
              <p>(200)</p>
              <p>60₺</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div className = "footer-container">
        <h1 className = "footer-heading">Teknolojik Yemekler</h1>
        <div className = "footer-section1">
          <div className = "footer-card1">
            <img src = "Assets\iteration-2-aseets\footer\icons\icon-1.png" />
            <p>341 Londonderry Road, Istanbul Türkiye</p>
          </div>
          <div className = "footer-card1">
            <img src = "Assets\iteration-2-aseets\footer\icons\icon-2.png" />
            <p>aciktim@teknolojikyemekler.com</p>
          </div>
          <div className = "footer-card1">
            <img src = "Assets\iteration-2-aseets\footer\icons\icon-3.png" />
            <p>+90 216 123 45 67</p>
          </div>
        </div>
        <div className = "footer-section2">
          <h5>Hot Menu</h5>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>
        <a href="#">Instagram</a>
        <div className = "footer-photos">
          <img src = "Assets\iteration-2-aseets\footer\insta\li-0.png" />
          <img src = "Assets\iteration-2-aseets\footer\insta\li-1.png" />
          <img src = "Assets\iteration-2-aseets\footer\insta\li-2.png" />
          <img src = "Assets\iteration-2-aseets\footer\insta\li-3.png" />
          <img src = "Assets\iteration-2-aseets\footer\insta\li-4.png" />
          <img src = "Assets\iteration-2-aseets\footer\insta\li-5.png" />
        </div>
        <div className = "footer-end">
        <p>© Teknolojik Yemekler.</p>
        </div>
      </div>
    </footer>
      </>
    )
}