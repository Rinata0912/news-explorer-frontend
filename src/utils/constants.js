import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as Facebook } from '../images/fb.svg';

const HEADER_NAVIGATION = [
  {
    name: 'Главная',
    path: '/',
  },
];
const HEADER_NAVIGATION_AUTHORIZED = [
  {
    name: 'Главная',
    path: '/',
  },
  {
    name: 'Сохранённые статьи',
    path: '/saved-news'
  },
];
const FOOTER_NAVIGATION = [
  {
    name: 'Главная',
    path: '/',
  },
  {
    name: 'Яндекс.Практикум',
    href: 'https://praktikum.yandex.ru/',
  },
];

const FOOTER_SOCIAL = [
  {
    name: <Github />,
    href: 'https://github.com/Rinata0912',
  },
  {
    name: <Facebook />,
    href: 'https://www.facebook.com/',
  },
];

const DARK_COLOR = '#1A1B22';

const MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

export { HEADER_NAVIGATION, HEADER_NAVIGATION_AUTHORIZED, FOOTER_NAVIGATION, DARK_COLOR, FOOTER_SOCIAL, MONTHS };