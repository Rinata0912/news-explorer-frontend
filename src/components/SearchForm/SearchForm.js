import { Button } from '../Button/Button';
import './SearchForm.css';
import { useForm } from '../../utils/useForm';

export function SearchForm({ onSearch }) {
  const { formValues, handleChange, setFormValues } = useForm({
    keyword: '',
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSearch(formValues.keyword);

    setFormValues({
      ...formValues,
      keyword: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="searchForm">
      <input onChange={handleChange} value={formValues.keyword} className="searchForm__input" name="keyword" placeholder="Введите тему новости"></input>
      {/* <button className="searchForm__button">Искать</button> */}
      <Button theme="form">Искать</Button>
    </form>
  );
}