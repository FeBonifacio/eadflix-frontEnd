import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";
import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss";

//cabeçario da aplicação
const HomeNoAuth = () => {
  return (
  <>
    <Head>
      <title>EducaPlayTec</title>
      {/* //imagem */}
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      <meta property="og:title" content="EducaPlayTec" key="title"/>
      <meta name="description" 
            content="Acesse diverços cursos gratuitos de alta qualidade!"/>
    </Head>
    {/* // todas as informações */}
    <main>
      {/* //Aqui vamos importar o cabeçalho */}
        <HeaderNoAuth/>  
    </main> 
  </>
  );
};

export default HomeNoAuth;

