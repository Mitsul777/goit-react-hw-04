import ImageCard from '../ImageCard/ImageCard.jsx'
import css from "./ImageGallery.module.css"; // Подключаем модуль CSS



const ImageGallery = ({ images, onOpenModal }) => {

    return (
        <div>
            <ul className={css.list}>
                {images.map((image) => (
                    <li className={css.item} key={image.id} >
                        <ImageCard image={image} onOpenModal={onOpenModal} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImageGallery;
