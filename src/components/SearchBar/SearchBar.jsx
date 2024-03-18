import { useState } from 'react'; // Импортируем хук useState
import { Formik, Form, Field, ErrorMessage } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import styles from './SearchBar.module.css'; // Импортируем стили из модуля CSS
import * as Yup from 'yup';
import { FaSearch } from 'react-icons/fa';

const searchBarSchema = Yup.object().shape({
    query: Yup.string()
        .min(1, 'Too short!')
        .max(10, 'Too long!')
        .required('Required!'),
});

const SearchBar = ({ onSearch }) => {
    const [isClicked, setIsClicked] = useState(false); // Состояние для отслеживания клика на поле поиска

    const handleSearch = (values, actions) => {
        if (!values.query.trim()) {
            return toast.error('Can not be empty');
        }
        onSearch(values.query);
        actions.resetForm();
    };

    return (
        <>
            <Toaster />
            <div className={styles.searchContainer}>
                <Formik
                    initialValues={{ query: '' }}
                    validationSchema={searchBarSchema}
                    onSubmit={(values, actions) => handleSearch(values, actions)}
                >
                    {({ handleSubmit }) => (
                        <Form>
                            <div className={styles.searchInputContainer}>
                                <Field
                                    type="text"
                                    name="query"
                                    className={`${styles.searchInput} ${isClicked ? styles.active : ''}`}
                                    onFocus={() => setIsClicked(true)}
                                    onBlur={() => setIsClicked(false)}
                                    placeholder={isClicked ? '' : 'Search images and photos'}
                                />
                                <button type="button" onClick={handleSubmit} className={styles.searchButton}>
                                    <FaSearch className={styles.searchIcon} size="16px" />
                                </button>
                            </div>
                            <ErrorMessage name="query" component="div" className={styles.error} />
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}

export default SearchBar;


