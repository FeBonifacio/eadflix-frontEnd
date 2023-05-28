import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import HeaderGeneric from "@/src/components/common/headerGeneric";

const Register = function () {
    return (
        <>
        <Head>
            <title>EducaPlayTec - Registro</title>
            <link rel="shortcut icon" href="/favicon2.png" type="image/x-icon" />
        </Head>
        <main>
            <HeaderGeneric 
            logoUrl="/" 
            btnUrl="/login" 
            btnContent="VOLTE A ESTUDAR"/>
        </main>
        </>
    );
};

export default Register;