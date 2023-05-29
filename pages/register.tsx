import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import HeaderGeneric from "@/src/components/common/headerGeneric";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Footer from "@/src/components/common/footer";

const Register = function () {
    return (
        <>
        <Head>
            <title>EducaPlayTec - Registro</title>
            <link rel="shortcut icon" href="/favicon2.png" type="image/x-icon" />
            {/* isso aqui é para mascarar o telefone */}
            <script src="https://jsuites.net/v4/jsuites.js"></script>
        </Head>
        <main className={styles.main}>
            <HeaderGeneric 
            logoUrl="/" 
            btnUrl="/login" 
            btnContent="VOLTE A ESTUDAR "/>

            <Container className="py-5">

                <p className={styles.formTitle}>
                    AQUI VOCÊ CONSTRUIRÁ O SEU FUTURO!
                </p>

            <Form className={styles.form}>
                <p className="text-center">
                    <strong>CRIE SUA CONTA</strong>
                </p>

                {/* Nome */}
                <FormGroup>
                    <Label for="fistName" className={styles.label}>
                        NOME
                    </Label>
                    <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Digite o seu nome"
                        required
                        maxLength={20}
                        className={styles.inputName}
                        />
                </FormGroup>

                {/* Sobrenome */}
                <FormGroup>
                    <Label for="lastName" className={styles.label}>
                        SOBRENOME
                    </Label>
                    <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Digite o seu sobrenome"
                        required
                        maxLength={20}
                        className={styles.inputName}
                        />
                </FormGroup>

                {/* Contato Telefone */}
                <FormGroup>
                    <Label for="phone" className={styles.label}>
                        WHATSAPP
                    </Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(00) 12345-6789"
                        data-mask="[-]+55 (00) 00000-0000"
                        required
                        className={styles.input}
                        />
                </FormGroup>

                {/* Contato Email */}
                <FormGroup>
                    <Label for="email" className={styles.label}>
                        EMAIL
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Digite o seu email"
                        required
                        className={styles.input}
                        />
                </FormGroup>

                {/* Data de nascimento */}
                <FormGroup>
                    <Label for="birth" className={styles.label}>
                        DATA DE NASCIMENTO 
                    </Label>
                    <Input
                        id="birth"
                        name="birth"
                        type="date"
                        min="1930-01-01"
                        max="2023-12-31"
                        required
                        className={styles.input}
                        />
                </FormGroup>

                {/* Senha */}
                <FormGroup>
                    <Label for="password" className={styles.label}>
                        SENHA
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Digite a sua senha (Min: 6)"
                        required
                        minLength={6}
                        maxLength={20}
                        className={styles.input}
                        />
                </FormGroup>

                {/* confirma senha */}
                <FormGroup>
                    <Label for="password" className={styles.label}>
                        CONFIRME SUA SENHA
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Digite corretamente"
                        required
                        minLength={6}
                        maxLength={20}
                        className={styles.input}
                        />
                </FormGroup>

                <Button type="submit" outline className={styles.formBtn}>
                    CADASTRAR
                </Button>
            </Form>

        </Container>

        <Footer />
        </main>
        
        </>
    );
};

export default Register;