import Link from "next/link";
import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";

const HeaderNoAuth = function () {
    return (
    <>
    {/* // HEADER */}
        <div className={styles.ctaSection}>
            < img 
                src="/homeNoAuth/logoCta2.png"
                alt="logoCta"
                className={styles.imgCta}/>
                <p>Cadastre-se para acessar todos os cursos disponiveis.</p>
            < img 
                src="/homeNoAuth/logoCta.png"
                alt="logoCta"
                className={styles.imgCta}/>
        </div>

    {/* // Botao de registro de login e Logo GRANDE */}
        <Container className={styles.nav}>
            {/* //lOGO GRANDE */}
            <img  src="/logoOnebitflix.svg" alt="EducaPlayTec" className={styles.imgLogoNav} />
            <div>
                <Link href="/login">
                    <Button className={styles.navBtn} outline>Entrar</Button>
                </Link>
                <Link href="/register">
                    <Button className={styles.navBtn} outline>Cadastrar</Button>
                </Link>
            </div>
        </Container>
    </>
    );
}

export default HeaderNoAuth;