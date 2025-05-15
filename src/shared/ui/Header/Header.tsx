import styles from './Styles.module.scss';
import { ThemeSwitcher } from './ThemeSwitcher';

interface IProps {}

export const Header = ({}: IProps) => {
    return (
        <header className={styles.header} id='header'>
            <div className='container'>
                <div className={styles.headerContent}>
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    );
}