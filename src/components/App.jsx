import './App.css';
import SearchBar from "./SearchBar/SearchBar.jsx";
import { useState, useEffect } from 'react';
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import fetchImages from "../image-api.js";
import ImageModal from "./ImageModal/ImageModal.jsx";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn.jsx";
import Loader from "./Loader/Loader.jsx";

function App() {
    const [images, setImages] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    useEffect(() => {
        if (searchQuery === '') {
            return;
        }
        async function getImage() {
            setIsLoading(true);
            try {
                setError(false);
                const data = await fetchImages(searchQuery, page);
                setImages((prevImages) => [...prevImages, ...data.results]);
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getImage();
    }, [page, searchQuery]);

    const handleSubmit = (newQuery) => {
        setSearchQuery(newQuery);
        setImages([]);
        setPage(1);
    };

    const handleLoadMore = () => {
        setPage(page + 1);
        setIsLoading(true);
    };
    const handleOpenModal = value => {
        setModalIsOpen(true);
        setModalContent(value);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };


    return (
        <div>
            <SearchBar onSearch={handleSubmit}/>
            {error && <b>Error!!!</b>}
            {images.length > 0 && <ImageGallery images={images} onOpenModal={handleOpenModal}/>}
            {images.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore}/>}
            {isLoading && <Loader />}
            {Object.keys(modalContent).length !== 0 && (
                <ImageModal
                    isOpen={modalIsOpen}
                    onClose={handleCloseModal}
                    content={modalContent}
                />
            )}
        </div>
    );
}

export default App;
