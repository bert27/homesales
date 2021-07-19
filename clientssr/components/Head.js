import Image from "next/image";
import styles from "../styles/Head.module.css";
export default function HeadC() {
  const sizesLogos = 60;
  return (
    <div>
      <div className={styles.containerTitle}>
        <Image
          src={"/logo-principal.svg"}
          alt="logoweb"
          width={200}
          height={150}
          className={styles.logo}
        />
        <div className={styles.VENDER}>VENDER</div>
        <div className={styles.COMPRAR}>COMPRAR</div>
        <div className={styles.YOELIJOCLICPISO}>#YOELIJOCLICPISO</div>
        <div className={styles.COMPRAR}>¿POR QUÉ CLICPISO?</div>
        <Image
          src={"/assets/phone.svg"}
          alt="call"
          width={sizesLogos}
          height={sizesLogos}
        />
        910 123 456
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
  );
}
