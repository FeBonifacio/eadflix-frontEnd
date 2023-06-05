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
                {/* <p className={styles.cardDescription}>
                Descubra o sabor da arte culinária! Nosso curso de culinária é uma 
                jornada emocionante pelo mundo dos sabores, texturas e aromas. Aprenda 
                técnicas essenciais, receitas irresistíveis e segredos culinários de 
                chefs renomados.
                </p> */}
            </div>

            <div className={styles.card2}>
                <p className={styles.cardTitle}>PROGRAMAÇÃO</p>
                {/* <p className={styles.cardDescription}>
                Desvende os segredos da programação! 
                Nosso curso de programação é a porta de entrada 
                para o fascinante mundo da tecnologia. Aprenda a 
                linguagem dos computadores, desenvolva habilidades 
                de resolução.
                </p> */}
            </div>

            <div className={styles.card3}>
                <p className={styles.cardTitle}>LUTAS</p>
                {/* <p className={styles.cardDescription}>
                Descubra o poder que existe dentro de você! 
                Nosso curso de luta é uma oportunidade única para você aprender 
                técnicas de defesa pessoal, desenvolver força física e mental, e 
                adquirir confiança inabalável. Com treinadores especializados e um ambiente 
                </p> */}
            </div>

            <div className={styles.card4}>
                <p className={styles.cardTitle}>MATEMÁTICA</p>
                {/* <p className={styles.cardDescription}>
                Desvende os mistérios dos números! Nosso curso de Matemática é a chave 
                para desbravar os fascinantes segredos dessa ciência exata. Aprenda conceitos 
                fundamentais, resolva problemas complexos e desenvolva sua habilidade de 
                raciocínio lógico. Com uma abordagem prática e dinâmica.
                </p> */}
            </div>

            <div className={styles.card5}>
                <p className={styles.cardTitle}>PINTURA</p>
                {/* <p className={styles.cardDescription}>
                Libere sua criatividade e mergulhe no mundo da pintura! Nosso curso de 
                Pintura é uma oportunidade única para você explorar sua expressão 
                artística e dominar as técnicas de pintura em diferentes estilos. 
                Aprenda a misturar cores, criar texturas envolventes                
                </p> */}
            </div>

            <div className={styles.card6}>
                <p className={styles.cardTitle}>DANÇA</p>
                {/* <p className={styles.cardDescription}>
                Descubra a magia da dança! Nosso curso de dança é uma jornada envolvente
                que irá despertar seu ritmo interior e liberar sua expressão corporal. 
                Aprenda diferentes estilos, desde salsa e hip-hop até ballet e 
                </p> */}
            </div>
        </Container>
    </>
    );
};

export default CardsSection;