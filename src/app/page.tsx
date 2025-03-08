import styles from "./page.module.scss";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>
          Implementação da topbar
        </main>
      </div>
    </>
  );
}
