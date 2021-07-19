import IcoHead from "./page-1.svg";
import Image from "next/image";
import styles from "../styles/Head.module.css";
export default function HeadC() {
  return (
    <div>
      <Image
        src="/page-1.svg"
        alt="Vercel Logo"
        width={54}
        height={55}
        className={styles.logo}
      />
    </div>
  );
}
