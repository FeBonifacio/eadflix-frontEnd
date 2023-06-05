import styles from '../styles/registerLogin.module.scss';
import Head from "next/head";
import HeaderGeneric from "../src/components/common/headerGeneric"
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Footer from '@/src/components/common/footer';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import ToastComponent from '@/src/components/common/toast';
import authService from '@/src/services/authService';

const Login = function () {
    const router = useRouter();
    const [toastColor, setToastColor] = useState("");
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const registerSucess = router.query.registred;
    useEffect(() => {

        if(registerSucess === "true") {
            setToastColor("bg-success");
            setToastIsOpen(true);
            setTimeout(()=>{
                setToastIsOpen(false);
            }, 1000 * 3);
            setToastMessage("Cadastro realizado com sucesso!");
        }
    }, [router.query]);

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
	    const email = formData.get("email")!.toString();
	    const password = formData.get("password")!.toString();
	    const params = { email, password };

        const { status } = await authService.login(params);
        console.log(status)

        if (status === 200) {
            router.push("/home");
        } else {
            setToastColor("bg-danger");
            setToastIsOpen(true);
            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);
            setToastMessage("Email ou senha incorretos!");
        }
    };


    return (
        <> 
            <Head>
                <title>EducaPlayTec - Login</title>
                <link rel="shortcut icon" 
                href="/favicon2.png" 
                type="image/x-icon" />
            </Head>
            <main className={styles.main}>
                <HeaderGeneric 
                    logoUrl="/"
                    btnUrl="/register"
                    btnContent="CRIAR CONTA"/>
                
                <Container className="py-5">
                    <p className={styles.formTitle}>Bem-vindo(a) de volta VENCEDOR(A)</p>

                    <Form className={styles.form} onSubmit={handleLogin}>
                        <p className='text-center'>
                            <strong>VOCÊ É CAPAZ !</strong>
                        </p>
                        <FormGroup>
                            <Label for="email" className={styles.label}>
                                EMAIL:
                            </Label>
                            <Input id="email" name="email" 
                                type="email" placeholder="@email.com"
                                required
                                className={styles.input}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="password" className={styles.label}>
                                SENHA:
                            </Label>
                            <Input id="password" name="password" 
                                type="password" placeholder="*****"
                                required
                                className={styles.input}/>
                        </FormGroup>
                        <Button type="submit" outline className={styles.formBtn}>
                            ENTRAR
                        </Button>
                    </Form>
                    <ToastComponent 
                        color={toastColor}
                        isOpen={toastIsOpen} 
                        message={toastMessage} 
                    />
                </Container>
                <Footer />
            </main>
        </>
    );
};

export default Login;