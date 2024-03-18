import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';
const Loader = () => {
    return (
        <div className={styles.loaderContainer}>
            <ThreeDots
                visible={true}
                height={80}
                width={80}
                ariaLabel="loader"
                color="#000"
            />
        </div>
    )
}
export default Loader