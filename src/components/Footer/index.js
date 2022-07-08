import './Footer.css';

const Footer = ({image, alt, text, backgroundImage}) => {
    return (
        <footer className='footer'>
            <img src={image} alt={alt}></img>
            <p className='copyright'>{text}</p>
        </footer>
    );
};

export default Footer;