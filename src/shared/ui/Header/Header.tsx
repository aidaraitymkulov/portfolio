import Image from 'next/image';
import styles from './Styles.module.scss';

interface IProps {}

export const Header = ({}: IProps) => {
    return (
        <header className={styles.header} id='header'>
            <div className='container'>
                <div className={styles.headerContent}>
                    <Image />
                </div>
            </div>
        </header>
    );
}