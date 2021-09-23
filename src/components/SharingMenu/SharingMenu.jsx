import React, { useState } from "react";
import "./SharingMenu.scss";

const SharingMenu = ({ url }) => {
  const [tooltipTxt, setTooltipTxt] = useState("Скопировать в буфер");
  const subject = "Базы знаний World Sci Publ";
  const shareText =
    "Переходите по ссылке и получите доступ к материалам базы знаний сервиса научных публикаций World Sci Publ";

  return (
    <div className="SharingMenu">
      <button
        className="resp-sharing-button__link tooltip"
        onClick={(e) => {
          navigator.clipboard.writeText(url);
          setTooltipTxt("Скопировано в буфер");
        }}
        onMouseOut={() => {
          setTooltipTxt((prevState) =>
            prevState !== "Скопировать в буфер"
              ? "Скопировать в буфер"
              : prevState
          );
        }}
      >
        <div className="resp-sharing-button resp-sharing-button--blank resp-sharing-button--medium">
          <div
            aria-hidden="true"
            className="resp-sharing-button__icon resp-sharing-button__icon--solid"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill="#000"
                d="m182 155 50-49v262a24 24 0 0 0 48 0V106l50 49a24 24 0 1 0 33-33l-90-91a24 24 0 0 0-34 0l-90 91a24 24 0 1 0 33 33z"
              />
              <path
                fill="#000"
                d="M464 232a24 24 0 0 0-24 24v184H72V256a24 24 0 0 0-48 0v192a40 40 0 0 0 40 40h384a40 40 0 0 0 40-40V256a24 24 0 0 0-24-24z"
              />
            </svg>
          </div>
          <span className="tooltiptext" id="myTooltip">
            {tooltipTxt}
          </span>
          {url}
        </div>
      </button>

      <a
        className="resp-sharing-button__link"
        href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`}
        target="_blank"
        rel="noopener"
        aria-label="Facebook"
      >
        <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium">
          <div
            aria-hidden="true"
            className="resp-sharing-button__icon resp-sharing-button__icon--solid"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
            </svg>
          </div>
          Facebook
        </div>
      </a>

      <a
        className="resp-sharing-button__link"
        href={`https://twitter.com/intent/tweet/?text=${encodeURIComponent(
          shareText
        )}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener"
        aria-label="Twitter"
      >
        <div className="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--medium">
          <div
            aria-hidden="true"
            className="resp-sharing-button__icon resp-sharing-button__icon--solid"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
            </svg>
          </div>
          Twitter
        </div>
      </a>

      <a
        className="resp-sharing-button__link"
        href={`mailto:?subject=${encodeURIComponent(
          shareText
        )}&body=${shareText} ${encodeURIComponent(url)}`}
        target="_self"
        rel="noopener"
        aria-label="E-Mail"
      >
        <div className="resp-sharing-button resp-sharing-button--email resp-sharing-button--medium">
          <div
            aria-hidden="true"
            className="resp-sharing-button__icon resp-sharing-button__icon--solid"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z" />
            </svg>
          </div>
          E-Mail
        </div>
      </a>

      <a
        className="resp-sharing-button__link"
        href={`http://vk.com/share.php?title=${encodeURIComponent(
          shareText
        )}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener"
        aria-label="VK"
      >
        <div className="resp-sharing-button resp-sharing-button--vk resp-sharing-button--medium">
          <div
            aria-hidden="true"
            className="resp-sharing-button__icon resp-sharing-button__icon--solid"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.734 3.23C14.734 12.813 14 12.126 14 11.11V7.603A1.104 1.104 0 0 0 12.896 6.5h-2.474a1.982 1.982 0 0 0-1.75.813s1.255-.204 1.255 1.49c0 .42.022 1.626.04 2.64a.73.73 0 0 1-1.272.503 21.54 21.54 0 0 1-2.498-4.543.693.693 0 0 0-.63-.403h-2.99a.508.508 0 0 0-.48.685C3.005 10.175 6.918 18 11.38 18h1.878a.742.742 0 0 0 .742-.742v-1.135a.73.73 0 0 1 1.23-.53l2.247 2.112a1.09 1.09 0 0 0 .746.295h2.953c1.424 0 1.424-.988.647-1.753-.546-.538-2.518-2.617-2.518-2.617a1.02 1.02 0 0 1-.078-1.323c.637-.84 1.68-2.212 2.122-2.8.603-.804 1.697-2.507.197-2.507z" />
            </svg>
          </div>
          VK
        </div>
      </a>

      <a
        className="resp-sharing-button__link"
        href={`https://telegram.me/share/url?text=${encodeURIComponent(
          shareText
        )}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener"
        aria-label="Telegram"
      >
        <div className="resp-sharing-button resp-sharing-button--telegram resp-sharing-button--medium">
          <div
            aria-hidden="true"
            className="resp-sharing-button__icon resp-sharing-button__icon--solid"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z" />
            </svg>
          </div>
          Telegram
        </div>
      </a>

      <a
        className="resp-sharing-button__link"
        href={`https://wa.me/?text=${encodeURIComponent(
          shareText + " " + url
        )}`}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
      >
        <div className="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--medium">
          <div
            aria-hidden="true"
            className="resp-sharing-button__icon resp-sharing-button__icon--solid"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z" />
            </svg>
          </div>
          WhatsApp
        </div>
      </a>
    </div>
  );
};

export default SharingMenu;
