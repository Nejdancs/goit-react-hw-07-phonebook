import { Button, Wrapper, Title } from './NavBar.styled';
import { RiUserSearchLine, RiUserAddLine } from 'react-icons/ri';
import { useToggle } from 'hooks/useToggle';

const NavBar = () => {
  const { isOpenFilter, isOpenForm, toggleFilter, toggleForm } = useToggle();

  return (
    <Wrapper>
      <Title>PHONEBOOK</Title>
      <Button
        onClick={toggleForm}
        isOpen={isOpenForm}
        title="Add contact"
        type="button"
      >
        <RiUserAddLine />
      </Button>
      <Button
        onClick={toggleFilter}
        isOpen={isOpenFilter}
        title="Search"
        type="button"
      >
        <RiUserSearchLine />
      </Button>
    </Wrapper>
  );
};

export default NavBar;
