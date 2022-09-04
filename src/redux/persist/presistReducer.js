import persistReducer from 'redux-persist/es/persistReducer';
import { addContactFormReducer } from 'redux/slice/addContactFormSlice';
// import { contactsReducer } from 'redux/slice/contactSlice';
import { filterReducer } from 'redux/slice/filterSlice';
import { persistFilterConfig, persistFormConfig } from './persistConfig';

// export const persistedContactsReducer = persistReducer(
//   persistContactsConfig,
//   contactsReducer
// );

export const persistedFilterReducer = persistReducer(
  persistFilterConfig,
  filterReducer
);

export const persistedContactFormReducer = persistReducer(
  persistFormConfig,
  addContactFormReducer
);
