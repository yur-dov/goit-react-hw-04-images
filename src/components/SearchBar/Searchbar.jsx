import { useState } from "react";
import css from './Searchbar.module.css'
import PropTypes from 'prop-types';

const Searchbar = ({showImage}) => {
const [name, setName] = useState('')
  
const handleChange = event => {
  setName(event.currentTarget.value.toLowerCase());
};

const handleSubmit = event => {
    event.preventDefault();
    showImage(name);
    setName('');
}

return (
    <header className={ css.header}>
        <form className={css.form}  onClick={handleSubmit}>
            <button className={css.btnForm} type="submit" >
            <span>🔍</span>
            </button>

            <input
                className={css.inoutForm}
                value={name}
                type="text"
                name="name"
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                placeholder="Search images and photos"
                required
            />
            
        </form>
    </header>)
}

Searchbar.propTypes = {  
  showImage: PropTypes.func.isRequired,
};

export default Searchbar
  
