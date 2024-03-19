import css from './ImageCard.module.css';
const ImageCard = ({ image, onOpenModal }) => {

    return (
        <ul>
            <li>
                <img className={css.img}
                    src={image.urls.small}
                    alt={image.urls.description}
                    onClick={() => onOpenModal(image)}

                />
            </li>
        </ul>
    );
};

export default ImageCard;
