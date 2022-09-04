import { Formik, Form } from 'formik';
import {
  Button,
  ErrorMsg,
  FormInner,
  FormWrapper,
  Input,
  Label,
} from './AddContactsForm.styled';
import { useForm } from '../../hooks/useForm';
import { useToggle } from 'hooks/useToggle';

const AddContactsForm = () => {
  const { initialValues, schema, handleSubmit } = useForm();
  const { toggleForm } = useToggle();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormWrapper>
        <Form autoComplete="off">
          <FormInner>
            <Label htmlFor="name">
              Name
              <Input
                id="name"
                type="text"
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
              <ErrorMsg name="name" component="div" />
            </Label>

            <Label htmlFor="number">
              Number
              <Input
                id="number"
                type="tel"
                name="number"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              />
              <ErrorMsg name="number" component="div" />
            </Label>
          </FormInner>
          <Button type="submit">Add contact</Button>
          <Button onClick={toggleForm} type="button">
            Cancel
          </Button>
        </Form>
      </FormWrapper>
    </Formik>
  );
};

export default AddContactsForm;
