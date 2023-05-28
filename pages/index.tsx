import Footer from "@/src/components/common/footer";
import CardsSection from "@/src/components/homeNoAuth/cardsSection";
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/src/components/homeNoAuth/presentationSection";
import SlideSection from "@/src/components/homeNoAuth/slideSection";
import courseService, { CourseType } from "@/src/services/courseService";
import { GetStaticProps } from "next";
import Head from "next/head";
import { ReactNode, useEffect } from "react";
import styles from "../styles/HomeNoAuth.module.scss";
import AOS from 'aos';
import "aos/dist/aos.css";


//interfaces que tera as props do index/page
interface IndexPageProps {
  chrildren?: ReactNode;
  course: CourseType[];
}

//cabeçario da aplicação
const HomeNoAuth = ({course}: IndexPageProps) => {

  //usando o bootstrap
  useEffect(() => {
    AOS.init();
  }, [])

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
      <div className={styles.sectionBackground} data-aos="fade-zoom-in" 
      data-aos-duration="1600">
        {/* //Aqui vamos importar o cabeçalho */}
        <HeaderNoAuth/>
        {/* // Apresentação dos cursos */}
        <PresentationSection/>
      </div>
      {/* cardes */}
      <div data-aos="fade-right" data-aos-duration="1200">
      <CardsSection/>
      </div>
      <div data-aos="fade-up" data-aos-duration="1200">
      <SlideSection newestCourses={course} />
      </div>
      <Footer/>
    </main> 
  </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewestCourses();
  return {
    props: {
      course: res.data,
    },
    //isso aqui é para pagina atualizar sozinha por um dia para pegar as novas informações do back
    // deixei um dia, vi no curso onebitcode
    revalidate: 3600 * 24,
  };
};

export default HomeNoAuth;

