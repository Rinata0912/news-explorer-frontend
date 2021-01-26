import { useState } from 'react';

export function useForm(values) {
  const [formValues, setFormValues] = useState(values);

  const handleChange = (evt) => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value,
    });
  };

  return { formValues, handleChange };
}