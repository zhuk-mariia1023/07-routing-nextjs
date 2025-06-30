'use client';

import { useState } from 'react';
import Link from 'next/link';
import css from './TagsMenu.module.css';
import { Tag } from '@/lib/api';

type TagsMenuProps = {
  tags: Tag[];
};

const TagsMenu = ({ tags }: TagsMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={css.menuContainer}>
      <button onClick={toggle} className={css.menuButton}>
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          <li className={css.menuItem}>
            <Link
              href="/notes/filter/all"
              onClick={toggle}
              className={css.menuLink}
            >
              All notes
            </Link>
          </li>
          {tags.map(tag => (
            <li key={tag.id} className={css.menuItem}>
              <Link
                href={`/notes/filter/${tag.name}`}
                onClick={toggle}
                className={css.menuLink}
              >
                {tag.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsMenu;
