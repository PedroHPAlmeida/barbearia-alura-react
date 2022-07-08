import Title from '../Title';
import './About.css';

const About = ({image, alt, title, text1, text2, text3}) => {
    return (
        <section className='about'>
            <Title text='Sobre a Barbearia Alura' />
            <img src={image} alt={alt}></img>
            <p>{text1}</p>
            <p className='mission'>{text2}</p>
            <p>{text3}</p>
        </section>
    );
};

export default About;