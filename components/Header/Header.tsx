import Link from 'next/link';
import css from './Header.module.css';
import { getTags } from '@/lib/api';
import TagsMenu from '@/components/TagsMenu/TagsMenu';

const Header = async () => {
  const tags = await getTags();

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
            <TagsMenu tags={tags} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
