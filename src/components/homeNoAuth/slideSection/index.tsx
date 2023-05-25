import { CourseType } from "@/src/services/courseService";
import Link from "next/link";
import { Button, Container } from "reactstrap";
import SlideComponent from "../../common/slideComponent";
import styles from "./styles.module.scss";

interface props {
    newestCourses: CourseType[];
}

//informção dos slides e conexao com o back para puxar
const SlideSection = function ({ newestCourses }: props) {
    return (
    <>
    <Container>
        <p className={styles.sectionTitle}>AULAS DISPONÍVEIS</p>
        <SlideComponent course={newestCourses} />
        <Link href="/register">
            <Button outline color="light" className={styles.slideSectionBtn}>
                Cadastre-se para acessar!
            </Button>
        </Link>
    </Container>
    </>
    );
};

export default SlideSection;