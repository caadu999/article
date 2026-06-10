import styles from '@/components/botao/botao.module.scss'

type BotaoProps = {
  texto: string;
};

export default function Botao({ texto }: BotaoProps) {
  return <button className={styles.botao}>{texto}</button>;
}
