import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

import { ReactComponent as DogsImg } from '../../Assets/dogs.svg'
import { ReactComponent as UserImg } from '../../Assets/usuario.svg'
import useUser from '../../hooks/useUser'

export default function Header() {

    const { data, userLogout } = useUser()

    return (
            <header className={styles.headerContainer}>
                <nav className={`${styles.nav} container`}>
                    <Link className={styles.logo} to="/">
                        <DogsImg />
                    </Link>

                    <button onClick={userLogout}>Sair</button>

                    {!data ? (
                        <Link className={styles.login} to="/login">Login / Criar<UserImg /></Link>
                    ):(
                        <Link className={styles.login} to="/contaq">{data.email}<UserImg /></Link>
                    )}
                {/* {data && data.nome} */}
                </nav>
            </header>
    )
}
