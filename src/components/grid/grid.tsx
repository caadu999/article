import getArtigos from "@/lib/API/API";
import ArtigoCard from "../ArtigoCard/ArtigoCard";
import styles from '@/components/grid/grid.module.scss'

export default async function Grid() {
  const artigos = await getArtigos();
  return (
    <div className={styles.container}>
        {artigos.map((artigo) => (
          <ArtigoCard artigo={artigo} key={artigo.id} />
        ))}
  
    </div>
  );
}
