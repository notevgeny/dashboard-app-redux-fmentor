import { useSelector, useDispatch } from 'react-redux';
import { selectVisiblePositions } from 'store/positions/position-selector';
import { JobPosition } from './JobPosition';

import { addFilter } from 'store/filters/filters-actions';
import { selectFilters } from 'store/filters/filters-selector';

const JobList = () => {

  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) => selectVisiblePositions(state, currentFilters));

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition 
          handleAddFilter={handleAddFilter}
          key={item.id} 
          {...item} />
      ))}
    </div>
  )
}

export {JobList};