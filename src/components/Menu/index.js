import './Menu.css';

const Menu = ({items}) => {
    return (
        <nav className='menu'>
            <ul>
                {items.map(item => {
                    return <li><a>{item}</a></li>
                })}
            </ul>
        </nav>
    );
};

export default Menu;