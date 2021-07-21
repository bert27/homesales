import Image from "next/image";
import styles from "../styles/Head.module.css";
export default function HeadC() {
  const sizesLogos = 60;
  return (
    <>
      <div className={"container-fluid mt-4 mb-4 "}>
        <div className={"row " + styles.itemscenter}>
          <logo_bmobile className={"d-md-none " + styles.logoBurger}>
            <Image
              src={"/assets/burger.svg"}
              alt="burgerMenu"
              //width={sizesLogos}
              //height={sizesLogos}
              layout="fill"
              objectFit="contain"
            />
          </logo_bmobile>
          <div className={"mt-0 " + styles.logo}>
            <Image
              src={"/logo-principal.svg"}
              alt="logoweb"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className={"col-5  mt-4 d-none d-lg-block"}>
            <span className={styles.VENDER}>VENDER</span>
            <span className={styles.COMPRAR}>COMPRAR</span>
            <span className={styles.YOELIJOCLICPISO}>#YOELIJOCLICPISO</span>
            <span className={styles.PORQUCLICPISO}>¿POR QUÉ CLICPISO?</span>
          </div>
          <div className={"col-5 col-xs-3 mt-1 " + styles.numberf}>
            <div className={styles.imaged}>
              <Image
                src={"/assets/phone.svg"}
                alt="calls"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.number}>910 123 456</div>

            <div className={styles.imaged}>
              <Image
                src={"/assets/whatsapp.svg"}
                alt="whatsapp"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className={styles.imaged}>
              <Image
                src={"/assets/mail.svg"}
                alt="messages"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
