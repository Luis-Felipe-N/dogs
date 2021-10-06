import { Link } from "react-router-dom";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";
import useUser from "../../../hooks/useUser";

import styles from "./styles.module.scss";


export default function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useUser();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    console.log("teset");
    if (username.validate() && password.validate()) {
      userLogin({ username: username.value, password: password.value });
    }
  };

  return (
    <section className={styles.loginFormContainer}>
      <h1 className="title">Login</h1>
      <form onSubmit={handleLogin}>
        <Input label="Usuario" type="text" {...username} />
        <Input label="Senha" type="password" {...password} />
        <Button>{loading ? 'Carregando...' : 'Enviar'}</Button>
        { error && <p className="error">{error} </p>}
      </form>
      <Link className={styles.perdeu} to="/perdeu">Perdeu a senha?</Link>
      <div className={styles.cadastrar}>
          <h2 className="subtitle">Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Link className={styles.cadastro} to="/criar">Cadastro</Link>
      </div>
    </section>
  );
}
