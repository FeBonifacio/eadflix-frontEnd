import CardsSection from "@/src/components/homeNoAuth/cardsSection";
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/src/components/homeNoAuth/presentationSection";
import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss";

//cabeçario da aplicação
const HomeNoAuth = () => {
  return (
  <>
    <Head>
      <title>EducaPlayTec</title>
      {/* //imagem */}
      <link rel="shortcut icon" href="/favicon2.png" type="image/x-icon" />
      <meta property="og:title" content="EducaPlayTec" key="title"/>
      <meta name="description" 
            content="Acesse diverços cursos gratuitos de alta qualidade!"/>
    </Head>
    {/* // todas as informações */}
    <main>
      <div className={styles.sectionBackground}>
        {/* //Aqui vamos importar o cabeçalho */}
        <HeaderNoAuth/>
        
        {/* // Apresentação dos cursos */}
        <PresentationSection/>
      </div>
      {/* cardes */}
      <CardsSection/>
    </main> 
  </>
  );
};

export default HomeNoAuth;

