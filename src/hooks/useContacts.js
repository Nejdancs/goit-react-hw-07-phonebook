import {
  useAddContactsMutation,
  useGetContactsQuery,
  useRemoveContactsMutation,
} from 'redux/slice/contactSlice';

export const useContacts = () => {
  const { data: contacts, isLoading, isFetching } = useGetContactsQuery();
  const [removeContact] = useRemoveContactsMutation();
  const [addContact] = useAddContactsMutation();

  return { contacts, isLoading, isFetching, addContact, removeContact };
};
