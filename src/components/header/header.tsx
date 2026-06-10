import Link from "next/link";
import styles from "@/components/header/header.module.scss";
import Botao from "../botao/botao";

export default function Header() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header__left}>
          <Link href="/">
            <h1>Article</h1>
          </Link>
          <nav>
            <ul>
              <li>
                <Link href="/">Artigos</Link>
              </li>
              <li>
                <Link href="#">Sobre Nós</Link>
              </li>
              <li>
                <Link href="#">Produtos</Link>
              </li>
              <li>
                <Link href="#">Membros</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Botao texto="Nos contate"/>
      </header>
    </div>
  );
}
