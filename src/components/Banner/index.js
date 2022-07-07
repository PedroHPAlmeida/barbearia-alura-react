import Menu from '../Menu';
import './Banner.css';

const Banner = ({image, alt}) => {
    const menuItems = ['home', 'produtos', 'contatos']

    return (
        <header className='banner'>
            <img src={image} alt={alt}></img>
            <Menu items={menuItems}/>
        </header>
    );
};

export default Banner;