import Link from 'next/link';
import css from './Header.module.css';
import TagsMenu from '@/components/TagsMenu/TagsMenu';

const Header = () => {
  const staticTags = [
    { id: '1', name: 'Work' },
    { id: '2', name: 'Personal' },
    { id: '3', name: 'Meeting' },
    { id: '4', name: 'Shopping' },
    { id: '5', name: 'Todo' },
  ];
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <TagsMenu tags={staticTags} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
