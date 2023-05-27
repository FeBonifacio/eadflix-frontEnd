import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Footer = function () {
    return (
    <>
        {/* <Container className={styles.footer}>
            <img src="" 
            alt="logoFooter" 
            className={styles.footerLogo} />
            <a href=""></a>
        </Container> */}
        <div className={styles.footer}>
        <p className={styles.slideTitle}>SOBRE</p>
        <p className={styles.slideDescription}>
            Apresentamos a você o nosso incrível site de cursos!
            Aqui, você encontrará uma variedade de opções educacionais 
            para aprimorar seus conhecimentos e desenvolver novas habilidades.
            Nossa plataforma oferece cursos abrangentes em diversas áreas, desde 
            negócios e tecnologia até arte e ciências. Temos orgulho de contar com 
            uma equipe de instrutores experientes e qualificados, que estão prontos 
            para guiá-lo em sua jornada de aprendizado.
        </p>
    </div>

    </>
    );
};

export default Footer;