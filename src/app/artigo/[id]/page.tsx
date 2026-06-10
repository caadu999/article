import getArtigos from "@/lib/API/API";
import styles from "@/app/artigo/[id]/id.module.scss";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: number;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const artigos = await getArtigos();
  const detalhes = artigos.find((artigo) => artigo.id == id);
  if (!detalhes) return

  return {
    title: `${detalhes.authors[0].name} | Article`,
    description: detalhes.summary
  }
}

export default async function DetalheArtigo({ params }: Props) {
  const { id } = await params;
  const artigos = await getArtigos();
  const detalhes = artigos.find((artigo) => artigo.id == id);
  if (!detalhes) return <p>Artigo não encontrado.</p>;

  return (
    <article className={styles.article}>
      <h1>{detalhes?.title}</h1>
      <p className={styles.article__autor}>
        Por <span>{detalhes?.authors[0].name}</span>
      </p>
      <div className={styles.article__imagem}>
        <img src={detalhes?.image_url} alt="" />
      </div>
      <p
        className={styles.article__publicado}
      >{`Publicado em ${detalhes?.published_at}`}</p>

      <p className={styles.article__texto}>{detalhes?.summary}</p>
      <p className={styles.article__link}>
        Leia o artigo completo {<Link href={detalhes?.url}>aqui</Link>}
      </p>
    </article>
  );
}
