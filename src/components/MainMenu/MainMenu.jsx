import React from "react";
import Typography from "../Typography";
import Button from "../Button";
import blogImg from "../../common/images/menu/blog.svg";
import botImg from "../../common/images/menu/bot.svg";
import cabinetImg from "../../common/images/menu/cabinet.svg";
import favoritesImg from "../../common/images/menu/favorites.svg";
import siteImg from "../../common/images/menu/site.svg";
import "./MainMenu.scss";

const MainMenu = () => {
  const Title = ({ children }) => (
    <Typography
      className="navbar__title"
      tag="h3"
      appearance={{
        weight: "bold",
        color: "gray-blue",
        size: "accent",
      }}
    >
      {children}
    </Typography>
  );

  const Links = () => {
    const baseUrl = "https://worldscipubl.com";
    const listLinks = [
      {
        title: "⚙️ Подробный аудит статьи с рецензией",
        link: `${baseUrl}/audit/`,
      },
      {
        title: "⏱ Сроки и стоимость публикации",
        link: `https://m.me/worldscipubl?ref=w15970869`,
      },
      {
        title: "💵 Промокод 100$ на первую публикацию",
        link: `${baseUrl}/promocode/`,
      },
      {
        title: "✍🏼 Вакансия “редактор научных статей“",
        link: `${baseUrl}/cooperation/`,
      },
    ];
    return (
      <ul className="navbar__links nav-links">
        {listLinks.map(({ title = "", link = "" }) => (
          <li className="nav-links__item" key={title}>
            <Button
              mode="link"
              appearance={{ type: "menu" }}
              href={link}
              target="_blank"
            >
              <Typography
                tag="span"
                appearance={{
                  color: "gray-blue",
                  size: "accent",
                  align: "left",
                  full: true,
                }}
              >
                {title}
              </Typography>
            </Button>
          </li>
        ))}
      </ul>
    );
  };

  const Cards = () => {
    const listCard = [
      { title: "Сайт", img: siteImg, link: "https://worldscipubl.com/" },
      {
        title: "Личный кабинет",
        img: cabinetImg,
        link: "https://worldscipubl.com/cabinet/login",
      },
      {
        title: "Блог",
        img: blogImg,
        link: "https://journal.worldscipubl.com/",
      },
      {
        title: "Избранное",
        img: favoritesImg,
        link: "https://taplink.cc/world.sci.publ",
      },
    ];
    return (
      <ul className="navbar__cards">
        {listCard.map(({ title, img, link }) => (
          <li className="navbar__card navbar-card" key={title}>
            <a
              href={link}
              className="navbar-card__link"
              target="_blank"
              rel="noreferrer"
            >
              <img className="navbar-card__img" src={img} alt={title} />
              <span className="navbar-card__label text">{title}</span>
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const Banner = () => (
    <div className="navbar__banner navbar-banner">
      <Typography
        className="navbar-banner__title"
        tag="h3"
        appearance={{ color: "gray-blue", weight: "bold", size: "accent" }}
      >
        Чат-бот
      </Typography>

      <Typography
        className="navbar-banner__subtitle"
        tag="h4"
        appearance={{ color: "gray-blue", weight: "bold" }}
      >
        Робот помощник автоматически предоставит:
      </Typography>

      <Typography
        className="navbar-banner__description"
        tag="p"
        appearance={{ color: "gray-blue" }}
      >
        – доступ к полезным материалам; <br />
        – информацию о продукте; <br />
        – чат со специалистом. <br />
      </Typography>

      <Button
        className="navbar-banner__btn"
        appearance={{ type: "submit" }}
        mode="link"
        href="https://m.me/worldscipubl?ref=w15709979"
        target="_blank"
      >
        Запустить чат-бот
      </Button>

      <img className="navbar-banner__bg" src={botImg} alt="bot" />
    </div>
  );

  const SocialList = () => {
    const listLinks = [
      {
        title: "linkedin",
        link: "https://www.linkedin.com/company/31339400/",
        img: "https://camo.githubusercontent.com/c8a9c5b414cd812ad6a97a46c29af67239ddaeae08c41724ff7d945fb4c047e5/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6c696e6b6564696e2e737667",
      },
      {
        title: "telegram",
        link: "https://teleg.run/worldscipubl",
        img: "https://camo.githubusercontent.com/f4b401dd7cd9b7840fd31acafd49e151a80e4c9600bf219934461b96dd98e013/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f74656c656772616d2e737667",
      },
      {
        title: "vk",
        link: "https://vk.com/worldscipubl/",
        img: "https://camo.githubusercontent.com/26be819fcce90f75668efeb7a432b969dcc35a1e4478149c3fcd48fda5b457c3/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f766b2e737667",
      },
      {
        title: "whatsapp",
        link: "https://api.whatsapp.com/send/?phone=%2B79086008126&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21+%D0%9D%D0%BE%D0%BC%D0%B5%D1%80+%D0%BC%D0%BE%D0%B5%D0%B9+%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D0%B8%3A+undefined&app_absent=0",
        img: "https://camo.githubusercontent.com/945d32cdd8d51fe844ca8b2976914ae8786586607aee1cba24d7318e24b30411/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f77686174736170702e737667",
      },
      {
        title: "YouTube",
        link: "https://www.youtube.com/channel/UC9Wuvp-a1pZn_iHkPAFrwKA?view_as=subscriber",
        img: "https://camo.githubusercontent.com/d54e97f5edde790381f7e62b217410df33e066a0dc8f692f2fc6b25fc1768b0c/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f796f75747562652e737667",
      },
      {
        title: "instagram",
        link: "https://www.instagram.com/world.sci.publ/",
        img: "https://camo.githubusercontent.com/c9dacf0f25a1489fdbc6c0d2b41cda58b77fa210a13a886d6f99e027adfbd358/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f696e7374616772616d2e737667",
      },
      {
        title: "facebook",
        link: "https://www.facebook.com/worldscipubl/",
        img: "https://camo.githubusercontent.com/8f245234577766478eaf3ee72b0615e99bb9ef3eaa56e1c37f75692811181d5c/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f66616365626f6f6b2e737667",
      },
    ];

    return (
      <ul className="social-list navbar__social">
        {listLinks.map(({ title, link, img }) => (
          <li className="social-list__item" key={title}>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="social-list__link"
            >
              <img className="social-list__link-img" src={img} alt={title} />
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const Footer = () => (
    <div className="navbar__footer">
      <ul className="navbar__actions">
        <li className="navbar__actions-item">
          <Typography
            className="navbar__title"
            tag="a"
            appearance={{ color: "gray-blue" }}
            href="mailto:ask@worldscipubl.com"
          >
            ask@worldscipubl.com
          </Typography>
        </li>
        <li className="navbar__actions-item">
          <Typography
            className="navbar__title"
            tag="a"
            appearance={{ color: "gray-blue" }}
            href="tel:+74951277926"
          >
            +7 (495) 127 - 79 - 26
          </Typography>
        </li>

        <li className="navbar__actions-item">
          <SocialList />
        </li>
      </ul>

      <Typography
        className="navbar__faq"
        tag="a"
        appearance={{ color: "gray-blue" }}
        href="#"
      >
        F.A.Q.
      </Typography>
    </div>
  );

  return (
    <nav className="navbar navbar_bg_white">
      <div className="navbar__inner">
        <Title>Меню сервиса World Sci Publ</Title>
        <Links />
        <Cards />
        <Banner />
        <Footer />
      </div>
    </nav>
  );
};

export default MainMenu;
