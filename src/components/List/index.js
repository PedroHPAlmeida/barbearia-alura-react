import './List.css';

const List = ({items}) => {
    return (
        <ul className='list'>
            {items.map(item => {
                return <li className='item'>{item}</li>
            })}
        </ul>
    );
};

export default List;