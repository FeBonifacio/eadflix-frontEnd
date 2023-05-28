import Link from "next/link";
import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";


// Eu fiz como generico para poder reutilizar esse botao como cadastra novo usuario

// ISSO AQUI É A CHAMADA DELES NA URL
interface props {
    logoUrl: string;
    btnUrl: string;
    btnContent: string;
}

const HeaderGeneric = function ({logoUrl, btnUrl, btnContent}: props) {
    return (
    <>
        <div className={styles.header}>
            <Container className={styles.headerContainer}>
                <Link href={logoUrl}>
                    <img src="/logoEducaPlay.svg" 
                    alt="LogoEducaPlayTec" 
                    className={styles.headerLogo}/>
                </Link>
                <Link href={btnUrl}>
                    <Button outline color="light" 
                    className={styles.headerBtn}>{btnContent}</Button>
                </Link>
            </Container>
        </div>
    </>
    );
};

export default HeaderGeneric;