import { Search } from '../Search/Search';
import { AboutAuthor } from '../AboutAuthor/AboutAuthor';
import { Header } from '../Header/Header';
import './Main.css';
import { Results } from '../Results/Results';

export function Main() {
  return (
    <>
      <div className="main__banner">
        <Header theme="light"/>
        <Search />
      </div>
      <Results />
      
      <AboutAuthor />
    </>
  );
}