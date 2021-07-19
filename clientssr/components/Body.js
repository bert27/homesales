import Image from "next/image";
import styles from "../styles/Body.module.css";
export default function Body() {
  return (
    <div>
      <Image
        src={"/background1.png"}
        alt="Vercel Logo"
        width={1600}
        height={640}
      />
      <div className={styles.Vendetucasa}>Vende tu casa en un clic</div>
      <div>
        <div>Compramos tu casa directamente</div>
        <div>sin complicaciones ni preocupaciones.</div>
      </div>

      <div>VER VíDEO</div>

      <div>En Clicaca sólo hay ventajas</div>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>

      <div>Trabajamos con las mejores empresas</div>
    </div>
  );
}
