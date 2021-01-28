import { Button } from '../Button/Button';
import './SearchForm.css';
import { useForm } from '../../utils/useForm';
import { useState } from 'react';

export function SearchForm({ onSearch }) {
  const { formValues, handleChange, setFormValues } = useForm({
    keyword: '',
  });
  const [isEmptyInput, setIsEmptyInput] = useState(false);
  // const { formValues, handleChange, setFormValues } = useFormValidation({
  //   keyword: '',
  // });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const keyword = formValues.keyword.trim();

    if(keyword === '') {
      setIsEmptyInput(true);
      return;
    }

    onSearch(keyword);

    setFormValues({
      ...formValues,
      keyword: '',
    });
  };

  const handleInputChange = (evt) => {
    setIsEmptyInput(false);
    handleChange(evt);
  };

  return (
    <form onSubmit={handleSubmit} className="searchForm">
      <input onChange={handleInputChange} value={formValues.keyword} className="searchForm__input" name="keyword" placeholder="Введите тему новости"></input>
      <Button theme="form">Искать</Button>
      {isEmptyInput && <span className="searchForm__error">Нужно ввести ключевое слово</span>}
    </form>
  );
}