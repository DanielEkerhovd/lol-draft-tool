import { NavLink } from 'react-router-dom';

export function CreateDraft() {
  return (
    <NavLink
      to="/Setup"
      className="p-4 bg-light rounded-sm text-black font-semibold w-full sm:w-fit text-center"
    >
      NEW DRAFT
    </NavLink>
  );
}
