import { NavLink } from 'react-router-dom';

export function CreateTeam() {
  return (
    <NavLink
      to="/Team"
      className="p-2 bg-light rounded-sm text-black font-semibold w-full sm:w-fit text-center"
    >
      ADD TEAM
    </NavLink>
  );
}
