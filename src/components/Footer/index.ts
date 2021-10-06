import styles from './styles.module.scss'

import { ReactComponent as DogsImg } from '../../Assets/dogs.svg'

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <DogsImg />
            Dogs. Alguns direitos reservados.
        </footer>
    )
}
