import styles from "./styles.module.scss";
import { Container, Row, Col, Button } from 'reactstrap'
import Link from "next/link";

//Aqui é apresentação dos cursos no site
const PresentationSection = function () {
    return ( 
    <>
        <Container className="py-4">
            <Row>
                {/* //Inicio da apresentação */}
                <Col md className="d-flex flex-column justify-content-center align-items-start">
                    <p className={styles.subTitle}>ACESSO ILIMITADO</p>
                    <p className={styles.title}>
                        Acesso gratuito em diversos cursos de alta Qualidade!
                    </p>
                    <p className={styles.description}>Acesse de onde estiver, a qualquer momento.</p>
                    <Link href="/register">
                        <Button outline className={styles.btnCta}>ACESSE AGORA
                        <img src="/buttonPlay.svg" alt="buttonImg" className={styles.btnImg}/>
                    </Button>
                    </Link>
                </Col>

                {/* // Imagem principal */}
                <Col md>
                    <img src="/fundo1.jpg" 
                    alt="imgIndex" 
                    className={styles.imgPresentation} />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center pt-5" data-aos="fade-down">
                    <img src="/homeNoAuth/iconArrowDown.svg" alt="arrowDown" 
                    className={styles.arrowDown} />
                </Col>
            </Row>
        </Container>
    </>
    );
};

export default PresentationSection;