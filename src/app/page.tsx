import Grid from "@/components/grid/grid";
import styles from "./page.module.scss";

export const revalidate = 3600;

export default function Home() {
  return (
    <div className={styles.container}>
      <Grid />
    </div>
  );
}
