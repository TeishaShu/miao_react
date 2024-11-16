import React from "react";
import LogoWhite from "./../../assets/logo_white.png"
import Styles from "./index.scss"

export const Footer: React.FC = () => {
  return (
    <footer className={Styles.footer}>
      <img 
        src={LogoWhite} 
        alt="Footer Logo" 
      />
      <p>資料、圖片來源皆來自網路，僅個人練習使用．不做商業用途。</p>
      <p>
        更多訊息: 
        <a 
          href="https://teishashu.github.io/blogger/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Teisha blogger
        </a>
      </p>
    </footer>
  )
} 