import { useState } from 'react';

export function useFormValidation(values) {
  const [formValues, setFormValues] = useState(values);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value, validationMessage } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: validationMessage,
    })

    console.log(validationMessage);

    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = (newValues = {}, newErrors = {}, newIsValid = false) => {
    setFormValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  };

  return { formValues, errors, isValid, handleChange, resetForm };
}