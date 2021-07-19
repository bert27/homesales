import Image from "next/image";
import styles from "../styles/Body.module.css";
export default function Body() {
  return (
    <div>
      <div className={styles.windowPicture}>
        <Image
          src={"/background1.png"}
          alt="img/ferran-fusalba-99194@2x.jpg 2x,
        img/ferran-fusalba-99194@3x.jpg 3x"
          width={1600}
          height={640}
          className={styles.ferran_fusalba_99194}
        />
      </div>
      <div className={styles.contentPicture}>
        <div className={styles.Vendetucasa}>Vende tu casa en un clic</div>
        <div>
          <div className={styles.Rectangle2}>
            <Image
              src={"/assets/homeico.svg"}
              alt="home_ico"
              width={26}
              height={26}
              className={styles.homeico}
            />
            <span className={styles.Introduce_la_direcci}>
              Introduce la dirección de tu casa o piso
            </span>
            <span className={styles.Button}>VENDER MI INMUEBLE</span>
          </div>

          <div className={styles.compramos_tucasa}>
            <div>Compramos tu casa directamente</div>
            <div>sin complicaciones ni preocupaciones.</div>

            <div className={styles.Rectangle3}>VER VíDEO</div>
          </div>
        </div>
      </div>

      <div>En Clicasa sólo hay ventajas</div>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>

      <div>Trabajamos con las mejores empresas</div>
    </div>
  );
}
