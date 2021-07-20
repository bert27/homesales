import Image from "next/image";
import styles from "../styles/Body.module.css";
export default function Body() {
  return (
    <>
      <div className={styles.windowPicturef}>
        <imgbanner className={styles.windowPicture}>
          <Image
            src={"/background1.png"}
            alt="img/ferran-fusalba-99194@2x.jpg 2x,
           img/ferran-fusalba-99194@3x.jpg 3x"
            width={1600}
            height={640}
            object-fit={"contain"}
            layout="responsive"
            className={styles.ferran_fusalba_99194}
          />
        </imgbanner>

        <imgbanner className={styles.windowPictureMobile}>
          <Image
            src={"/assets/mobile1.jpg"}
            alt={"pictureMobile"}
            width={375}
            height={340}
            className={styles.pictureMobile}
          />
        </imgbanner>
        <div className={styles.contentPicture}>
          <titlebanner className={styles.Vendetucasa}>
            <div> Vende tu casa</div>
            <div>
              en un <span className={styles.bold}>clic</span>
            </div>
          </titlebanner>
          <div>
            <searchbar className={styles.Rectangle2}>
              <Image
                src={"/assets/homeico.svg"}
                alt="home_ico"
                width={26}
                height={26}
              />
              <hola className={styles.Introduce_la_direcci}>
                Introduce la dirección de tu casa o piso
              </hola>
              <span className={styles.Button}>VENDER MI INMUEBLE</span>
            </searchbar>

            <div className={styles.compramos_tucasa}>
              <div>Compramos tu casa directamente</div>
              <div>sin complicaciones ni preocupaciones.</div>

              <buttonvideo className={styles.Rectangle3}>
                <span className={styles.verVideo}>VER VíDEO</span>
                <Image
                  src={"/assets/play.svg"}
                  alt="home_ico"
                  width={30}
                  height={30}
                  className={styles.icoVideo}
                />
              </buttonvideo>
            </div>
          </div>
        </div>
      </div>

      <div>En Clicasa sólo hay ventajas</div>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>

      <div>Trabajamos con las mejores empresas</div>
    </>
  );
}
