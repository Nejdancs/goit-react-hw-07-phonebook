import {
  AddContactsForm,
  Container,
  NavBar,
  ContactsList,
  Filter,
} from 'components';
import { useFilteredContacts } from 'hooks/useFilteredContacts';
import { useToggle } from 'hooks/useToggle';

export const App = () => {
  const [filteredContacts, filter, setFilter] = useFilteredContacts();
  const { isOpenFilter, isOpenAddForm, isOpenUpdateForm } = useToggle();

  return (
    <Container>
      <NavBar />
      {isOpenAddForm && <AddContactsForm type={'add'} />}
      {isOpenUpdateForm && <AddContactsForm type={'update'} />}
      {isOpenFilter && (
        <Filter value={filter} onSearch={e => setFilter(e.target.value)} />
      )}

      <ContactsList contacts={filteredContacts} />
    </Container>
  );
};
