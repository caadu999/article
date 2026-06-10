import { Article } from "@/types/types";
import Link from "next/link";
import styles from "@/components/ArtigoCard/ArtigoCard.module.scss";
type ArtigoCardProps = {
  artigo: Article;
};

export default function ArtigoCard({ artigo }: ArtigoCardProps) {
  const resumo = `${artigo.summary.substring(0, 140)}...`;
  return (
    <Link href={`artigo/${artigo.id}`}>
      <article className={styles.article}>
        <img src={artigo.image_url} alt="" />
        <div className={styles.article__info}>
          <h1>{artigo.title}</h1>
          <p className={styles.article__texto}>
            {artigo.summary.length > 140 ? resumo : artigo.summary}
          </p>
        </div>
      </article>
    </Link>
  );
}
