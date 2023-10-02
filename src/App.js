import "./App.scss";
import Rotate from "react-reveal/Rotate";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  const projects = [
    {
      name: "Trendyol Süper Lig",
      github: "https://github.com/Galledan/superlig",
      live: "https://superlig.netlify.app",
      image: require("./assets/süperlig.webp"),
      desc: t("super"),
      tech: "React, Sass",
    },

    {
      name: "Antbay Cam Mozaik",
      github: "",
      live: "https://antbay.com.tr",
      image: require("./assets/antbay.webp"),
      desc: t("antbay"),
      tech: "React, Bootstrap",
    },

    {
      name: "Damalı Bayrak F1 League",
      github: "https://github.com/Galledan/dbf1",
      live: "https://damalibayrak.netlify.app",
      image: require("./assets/dbf1.webp"),
      desc: t("f1"),
      tech: "React, Bootstrap",
    },

    {
      name: "Steels Foundation",
      github: "https://github.com/Galledan/Steels-Foundation",
      live: "https://github.com/Galledan/Steels-Foundation",
      image: require("./assets/steels.webp"),
      desc: t("steels"),
      tech: "React, Bootstrap",
    },

    {
      name: "Naruto Quiz",
      github: "https://github.com/Galledan/naruto-quiz",
      live: "https://my-naruto-quiz.netlify.app",
      image: require("./assets/naruto.webp"),
      desc: t("naruto"),
      tech: "React",
    },
  ];

  const skills = [
    {
      name: "HTML",
      img: require("./assets/logos/html.webp"),
    },
    {
      name: "CSS",
      img: require("./assets/logos/css.webp"),
    },
    {
      name: "Javascript",
      img: require("./assets/logos/js.webp"),
    },
    {
      name: "jQuery",
      img: require("./assets/logos/jquery.webp"),
    },
    {
      name: "React",
      img: require("./assets/logos/React.webp"),
    },
    {
      name: "Redux",
      img: require("./assets/logos/Redux.webp"),
    },
    {
      name: "NodeJS",
      img: require("./assets/logos/nodejs.webp"),
    },
    {
      name: "Bootstrap",
      img: require("./assets/logos/bootstrap.webp"),
    },
    {
      name: "MUI",
      img: require("./assets/logos/mui.webp"),
    },
    {
      name: "Sass",
      img: require("./assets/logos/sass.webp"),
    },
    {
      name: "Tailwind CSS",
      img: require("./assets/logos/tailwind.webp"),
    },
    {
      name: "Python",
      img: require("./assets/logos/python.webp"),
    },
    {
      name: "C#",
      img: require("./assets/logos/csharp.webp"),
    },
    {
      name: "Photoshop",
      img: require("./assets/logos/photoshop.webp"),
    },
  ];
  return (
    <div className="App">
      <section id="hero">
        <div className="lang">
          <button onClick={() => clickHandle("tr")} id="tr">
            TR
          </button>
          <button onClick={() => clickHandle("en")} id="en">
            EN
          </button>
        </div>
        <nav className="contacts">
          <a
            href="https://www.linkedin.com/in/onur-çelikler/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Galledan"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href={t('cv')}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fas fa-file"></i>
          </a>
        </nav>
        <Rotate bottom left>
          <div className="container">
            <h1>
              {t("hi")}
              <span className="name"> Onur.</span>
              <br />
              {t("im")}
            </h1>
            <nav className="navbar">
              <Link to="projects" smooth={true} duration={500}>
                {t("projects")}
              </Link>
              <Link to="skills" smooth={true} duration={500}>
                {t("skill")}
              </Link>
              <Link to="about" smooth={true} duration={500}>
                {t("about")}
              </Link>
              <Link to="why" smooth={true} duration={500}>
                {t("why")}
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                {t("contact")}
              </Link>
            </nav>
          </div>
        </Rotate>
      </section>

      <section id="projects">
        <Fade>
          <h2 className="title">{t("projects")}</h2>

          <div className="container">
            {projects.map((p, i) => (
              <div className="project" id={"project-" + (i + 1)}>
                <span id="project-title">{p.name}</span>
                <div className="container">
                  <img src={p.image} alt={i} />
                  <div className="details">
                    <span className="desc">{p.desc}</span>
                    <span className="tech">
                      {t("tech")} {p.tech}
                    </span>
                    <div className="buttons">
                      {p.github !== "" && (
                        <a
                          className="link"
                          href={p.github}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <button>Github</button>{" "}
                        </a>
                      )}
                      <a
                        className="link"
                        href={p.live}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <button>{t("canlı")}</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      <section id="skills">
        <h2 className="title">{t("skill")}</h2>
        <Fade>
          <div className="container">
            {skills.map((s, i) => (
              <di id={i} className={"skill-" + i}>
                <img src={s.img} alt={s.name} />
                <p>{s.name}</p>
              </di>
            ))}
          </div>
        </Fade>
      </section>

      <section id="about">
        <Fade>
          <h2 className="title">{t("about")}</h2>
          <p>{t("about-text")}</p>
        </Fade>
      </section>

      <section id="why">
        <Fade>
          <h2 className="title">{t("why")}</h2>
          <p>{t("why-text")}</p>
        </Fade>
      </section>

      <section id="contact">
        <Fade>
          <h2 className="title">{t("contact")}</h2>
          <div className="container">
            <a
              href="https://www.linkedin.com/in/onur-çelikler/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Galledan"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:onrclklr@outlook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </Fade>
      </section>
    </div>
  );
}

export default App;
