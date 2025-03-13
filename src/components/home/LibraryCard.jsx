import { NavLink } from 'react-router-dom';

export function LibraryCard({ draft }) {
  console.log(draft);
  return (
    <div className="flex items-center justify-between gap-5 bg-red-900 p-5 rounded-lg">
      <NavLink to={`/drafting/${draft.id}`} className="text-white">
        <span>{draft.enemy}</span>
      </NavLink>
      <div className="flex gap-2">
        <button className="bg-light text-dark w-12 h-8 rounded-sm">Edit</button>
        <button className="bg-dark text-white size-8 rounded-sm">X</button>
      </div>
    </div>
  );
}
