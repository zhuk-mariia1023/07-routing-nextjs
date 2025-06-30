import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function NotesFilterPage({ params }: Props) {
  const { slug } = await params;
  const tag = slug[0] === 'all' ? undefined : slug[0];

  const initialData = await fetchNotes(1, '', tag);

  return;
  <NotesClient initialData={initialData} filterTag={tag} />;
}
