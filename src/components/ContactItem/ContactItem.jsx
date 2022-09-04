import PropTypes from 'prop-types';
import { Contact, IconUser, Item, Button } from './ContactItem.styled';
import { RotatingLines } from 'react-loader-spinner';
import { RiDeleteBinLine } from 'react-icons/ri';
import { memo } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useRemoveContactsMutation } from 'redux/slice/contactSlice';

const ContactItem = ({ id, name, number }) => {
  const [removeContact, { isLoading }] = useRemoveContactsMutation();

  const handleRemoveContact = async id => {
    try {
      await removeContact(id);
      Notify.success(`Contact successfully removed`);
    } catch (error) {
      Notify.error(`Something went wrong`);
    }
  };

  return (
    <Item deleting={isLoading}>
      <Contact>
        <IconUser />
        {name} : {number}
      </Contact>
      <Button
        onClick={() => handleRemoveContact(id)}
        title="Delete"
        type="button"
        disabled={isLoading}
      >
        {isLoading ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="20"
            visible={true}
          />
        ) : (
          <RiDeleteBinLine />
        )}
      </Button>
    </Item>
  );
};

export default memo(ContactItem);

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
