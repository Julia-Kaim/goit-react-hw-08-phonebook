import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filterContact } from 'redux/sliceFilter';
import { selectFilter } from 'redux/selectors';
import styles from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div className={styles.filter}>
      <label className={styles.labelFilter}>Filter</label>
      <input
        className={styles.filterInput}
        value={filter}
        onChange={evt => dispatch(filterContact(evt.currentTarget.value))}
        type="text"
        name="filter"
        placeholder="Find contacts by name"
      />
    </div>
  );
};
