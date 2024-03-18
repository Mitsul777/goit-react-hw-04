import styles from './ImageList.module.css';

const ImageList = ({ image, onOpenModal }) => {

    return (
        <ul>
            <li>
                <img
                    src={image.urls.small}
                    alt={image.urls.description}
                    onClick={() => onOpenModal(image)}

                />
            </li>
        </ul>
    );
};

export default ImageList;
