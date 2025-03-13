import { CreateDraft } from '../components/home/CreateDraft.jsx';
import { YourTeam } from '../components/home/YourTeam.jsx';
import { Library } from '../components/home/Library.jsx';

export function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[150px] text-white w-full">
      {/* Hero */}
      <div className="flex flex-col gap-5">
        <div>
          <h1>WAR ROOM</h1>
          <p className="font-extralight">
            A tool for drafting and managing team compositions in League of
            Legends.
          </p>
        </div>
        <CreateDraft />
        <YourTeam />
      </div>
      {/* Library */}
      <Library />
    </div>
  );
}
