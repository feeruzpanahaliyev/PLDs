import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FilterSort.css';

const FilterSort = ({ onFilter, onSort }) => {
  const [filterText, setFilterText] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
    onFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    const newOrder = e.target.value;
    setSortOrder(newOrder);
    onSort(newOrder);
  };

  return (
    <div className="filter-sort">
      <input
        type="text"
        placeholder="Filter by name"
        value={filterText}
        onChange={handleFilterChange}
      />
      <button onClick={() => handleSortChange({ target: { value: sortOrder === 'asc' ? 'desc' : 'asc' } })}>
        Sort by age ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>
    </div>
  );
};

FilterSort.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default FilterSort;
