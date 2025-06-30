import css from './LayoutNotes.module.css';

type NotesLayoutProps = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: NotesLayoutProps) => {
  return (
    <section className={css.section}>
      <aside className={css.aside}>{sidebar}</aside>
      <div className={css.container}>{children}</div>
    </section>
  );
};

export default NotesLayout;
