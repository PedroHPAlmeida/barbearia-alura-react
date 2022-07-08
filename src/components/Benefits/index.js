import List from '../List';
import Title from '../Title';
import './Benefits.css';

const Benefits = ({title, list, image, alt}) => {
    return (
        <section className='benefits'>
            <div>
                <Title text={title}/>
                <List items={list}/>
                <img src={image} alt={alt}></img>
            </div>
        </section>   
    );
};

export default Benefits;