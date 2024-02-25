import { Link } from "react-router-dom"
import style from "./Footer.module.scss"
import { FaSquareFacebook, FaSquareInstagram , FaLinkedin } from "react-icons/fa6";
export const Footer = () => {

  return (
    <footer className={style.footerStyle}>
      <div className={style.contactInfoWrapper}>
        <ul>
          <li><h3>Adresse</h3></li>
          <li><p>Det utrolige teater</p></li>
          <li><p>Havnegade 901</p></li>
          <li><p>9000 Aalborg</p></li>
          <li><p>EAN 5798003279845</p></li>
          <li className={style.cvr}><p>CVR 1001 0012</p></li>
          <li><a href="#">Find vej på kort</a></li>
        </ul>
        <div className={style.ticketAdministration}>
          <ul className={style.ticketService}>
            <li><h3>billetservice</h3></li>
            <li><p>Se åbningstider</p></li>
            <li><p>Billettelefon: <a href="#">+45 96 31 80 80</a></p></li>
            <li><a href="#">billet@dut.dk</a></li>
          </ul>
          <ul className={style.administration}>
            <li><h3>administration</h3></li>
            <li><p>Telefon: <a href="#">+45 96 31 80 90</a></p></li>
            <li><a href="#">adm@dut.dk</a></li>
          </ul>
        </div>
        <ul className={style.practicalInfo}>
          <li><h3>Praktisk info</h3></li>
          <li><Link>Kontakt</Link></li>
          <li><Link>Kom trygt i teatret</Link></li>
          <li><Link>Presseside</Link></li>
          <li><Link>Skoleforestillinger</Link></li>
          <li><Link>Teatercaféen</Link></li>
          <li><Link>Handelsbetingelser</Link></li>
        </ul>
      </div>
      <div className={style.socials}>
        <FaSquareFacebook className={style.socialLogo} />
        <FaSquareInstagram className={style.socialLogo} />
        <FaLinkedin className={style.socialLogo} />
      </div>
    </footer>
  );
}
