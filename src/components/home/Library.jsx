import { LibraryCard } from './LibraryCard';
import { LibrarySelect } from './LibrarySelect';

export function Library() {
  const library = [
    {
      id: 'test-test',
      enemy: 'Enemy Team',
    },
    {
      id: 'test-test2',
      enemy: 'Enemy Team',
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <h2>DRAFT LIBRARY</h2>
      <LibrarySelect />
      {library ? (
        <div className="flex flex-col gap-5">
          {library.map((draft) => (
            <LibraryCard key={draft.id} draft={draft} />
          ))}
        </div>
      ) : (
        <p className="font-light">No drafts yet</p>
      )}
    </div>
  );
}
