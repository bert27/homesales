import Image from "next/image";
import styles from "../styles/Footer.module.css";
export default function Footer() {
  return (
    <>
      <line className={styles.Line}></line>
      <footer1>© 2017 CLICASA. TODOS LOS DERECHOS RESERVADOS</footer1>

      <footer2>Mapa web Contacto Aviso Legal</footer2>
      <footer3>
        <Image
          src={"/assets/1489335132-facebook-circle-color.svg"}
          alt="facebook"
          width={30}
          height={30}
        />
        <Image
          src={"/assets/1489335133-twitter-circle-color.svg"}
          alt="twitter"
          width={30}
          height={30}
        />
        <Image
          src={"/assets/1489335130-linkedin-circle-color.svg"}
          alt="lidkelin"
          width={30}
          height={30}
        />
        <Image
          src={"/assets/1489335135-youtube-circle-color.svg"}
          alt="youtube"
          width={30}
          height={30}
        />
      </footer3>
      <line className={styles.Line}></line>
    </>
  );
}
