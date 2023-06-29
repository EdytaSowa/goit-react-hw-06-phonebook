import css from './Filter.module.css';

export const Filter = ({ filter, handleChange }) => (
  <div className={css.filter}>
    <label className={css.filterLabel}> Find contacts by name </label>
    <input
      className={css.filterName}
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={handleChange}
    />
  </div>
);


