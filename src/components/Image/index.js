import './Image.css';

const Image = ({image, alt}) => {
    return (
        <img className='image' src={image} alt={alt}></img>
    );
};

export default Image;