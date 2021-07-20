import Image from "next/image";
import styles from "../styles/Head.module.css";
export default function HeadC() {
  const sizesLogos = 60;
  return (
    <>
      <div>
        <div className={styles.containerTitle}>
          <buttonburger className={styles.buttonBurger}>
            <Image
              src={"/assets/burger.svg"}
              alt="burgerMenu"
              width={sizesLogos}
              height={sizesLogos}
            />
          </buttonburger>
          <div className={styles.contentLogo}>
            <Image
              src={"/logo-principal.svg"}
              alt="logoweb"
              width={200}
              height={150}
              object-fit={"contain"}
              // layout={"fill"}
              //layout={"responsive"}
              className={styles.logo}
            />
          </div>
          <div className={styles.titleMenu}>
            <div className={styles.VENDER}>VENDER</div>
            <div className={styles.COMPRAR}>COMPRAR</div>
            <div className={styles.YOELIJOCLICPISO}>#YOELIJOCLICPISO</div>
            <div className={styles.PORQUCLICPISO}>¿POR QUÉ CLICPISO?</div>
          </div>
          <Image
            src={"/assets/phone.svg"}
            alt="call"
            width={sizesLogos}
            height={sizesLogos}
          />
          <div className={styles.number}>910 123 456</div>

          <Image
            src={"/assets/whatsapp.svg"}
            alt="callwhatsap"
            width={sizesLogos}
            height={sizesLogos}
          />
          <Image
            src={"/assets/mail.svg"}
            alt="messages"
            width={sizesLogos}
            height={sizesLogos}
          />
        </div>
      </div>
    </>
  );
}
