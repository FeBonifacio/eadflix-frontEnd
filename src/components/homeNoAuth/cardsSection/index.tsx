import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const CardsSection = function () {
    return ( 
    <>
        <p className={styles.sectionTitle}>ACESSE NOSSOS CURSOS</p>
        <Container className='d-flex flex-wrap justify-content-center gap-4'>
            {/* apresentação dos cursos na home */}
            <div className={styles.card1}>
                <p className={styles.cardTitle}>CULINÁRIA</p>
                <p className={styles.cardDescription}>
                    Acesse os nossos cursos de culinária, milhares de video aulas com receitas deliciosas,
                    aulas 100% atualizadas e organizadas por dificuldade, vire um cozinheiro(a) de alto padrão.
                </p>
            </div>

            <div className={styles.card2}>
                <p className={styles.cardTitle}>PROGRAMAÇÃO</p>
                <p className={styles.cardDescription}>
                    Acesse os nossos cursos de culinária, milhares de video aulas com receitas deliciosas,
                    aulas 100% atualizadas e organizadas por dificuldade, vire um cozinheiro(a) de alto padrão.
                </p>
            </div>

            <div className={styles.card3}>
                <p className={styles.cardTitle}>LUTAS</p>
                <p className={styles.cardDescription}>
                    Acesse os nossos cursos de culinária, milhares de video aulas com receitas deliciosas,
                    aulas 100% atualizadas e organizadas por dificuldade, vire um cozinheiro(a) de alto padrão.
                </p>
            </div>

            <div className={styles.card4}>
                <p className={styles.cardTitle}>INGLÊS</p>
                <p className={styles.cardDescription}>
                    Acesse os nossos cursos de culinária, milhares de video aulas com receitas deliciosas,
                    aulas 100% atualizadas e organizadas por dificuldade, vire um cozinheiro(a) de alto padrão.
                </p>
            </div>

            <div className={styles.card5}>
                <p className={styles.cardTitle}>COSTURA</p>
                <p className={styles.cardDescription}>
                    Acesse os nossos cursos de culinária, milhares de video aulas com receitas deliciosas,
                    aulas 100% atualizadas e organizadas por dificuldade, vire um cozinheiro(a) de alto padrão.
                </p>
            </div>

            <div className={styles.card6}>
                <p className={styles.cardTitle}>DANÇA</p>
                <p className={styles.cardDescription}>
                    Acesse os nossos cursos de culinária, milhares de video aulas com receitas deliciosas,
                    aulas 100% atualizadas e organizadas por dificuldade, vire um cozinheiro(a) de alto padrão.
                </p>
            </div>
        </Container>
    </>
    );
};

export default CardsSection;