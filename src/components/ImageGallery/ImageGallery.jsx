import ImageList from "../ImageList/ImageList.jsx";
import css from "./ImageGallery.module.css"; // Подключаем модуль CSS



const ImageGallery = ({ images, onOpenModal }) => {

    return (
        <div>
            <ul className={css.list}>
                {images.map((image) => (
                    <li className={css.item} key={image.id} >
                        <ImageList image={image} onOpenModal={onOpenModal} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImageGallery;
