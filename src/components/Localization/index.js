import Title from '../Title';
import './Localization.css';

const Localization = ({title, text}) => {
    return (
        <section className='localization'>
            <div>
                <Title text='Nosso estabelecimento'/>
                <p>{text}</p>
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4498404770056!2d-46.63452594917395!3d-23.588194784594286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0xab35da2f5ca62674!2sCaelum%20-%20Escola%20de%20Tecnologia!5e0!3m2!1spt-BR!2sbr!4v1652789828697!5m2!1spt-BR!2sbr" width='100%' height="300" style={{ border:0 }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
                </div>
            </div>
        </section>
    );
};

export default Localization;