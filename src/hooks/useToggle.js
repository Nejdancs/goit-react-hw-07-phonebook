import { toggleFilterAction } from '../redux/slice/filterSlice';
import { toggleFormAction } from 'redux/slice/addContactFormSlice';
import { useSelector, useDispatch } from 'react-redux';

export const useToggle = () => {
  const isOpenFilter = useSelector(state => state.filter.isOpen);
  const isOpenForm = useSelector(state => state.addContactForm.isOpen);

  const dispatch = useDispatch();

  const toggleFilter = () => {
    dispatch(toggleFilterAction());
  };

  const toggleForm = () => {
    dispatch(toggleFormAction());
  };

  return { isOpenForm, isOpenFilter, toggleFilter, toggleForm };
};
