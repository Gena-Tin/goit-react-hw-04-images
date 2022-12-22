import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
    resetForm();
  };

  const handleChange = e => {
    const { value } = e.currentTarget;
    setSearchQuery(value);
  };

  const resetForm = () => {
    setSearchQuery('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          className={css.input}
          name="searchQuery"
          value={searchQuery}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
// import css from './Searchbar.module.css';

// class Searchbar extends Component {
//   state = {
//     searchQuery: '',
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.resetForm();
//   };
//   resetForm = () => {
//     this.setState({ searchQuery: '' });
//   };
//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <header className={css.searchbar}>
//         <form className={css.form} onSubmit={this.handleSubmit}>
//           <button type="submit" className={css.button}>
//             <span className={css.buttonLabel}>Search</span>
//           </button>

//           <input
//             className={css.input}
//             name="searchQuery"
//             value={this.state.searchQuery}
//             onChange={this.handleChange}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default Searchbar;
