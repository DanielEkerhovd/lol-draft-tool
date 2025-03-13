import { CreateTeam } from './CreateTeam';
import { TeamCard } from './TeamCard';

export function YourTeam() {
  const team = [
    {
      name: 'Snøstorm',
      players: [
        {
          name: 'Player 1',
          role: 'Top',
          champions: [
            { name: 'Champion 1', role: 'Top' },
            { name: 'Champion 2', role: 'Jungle' },
          ],
        },
        {
          name: 'Player 2',
          role: 'Jungle',
          champions: [
            { name: 'Champion 3', role: 'Mid' },
            { name: 'Champion 4', role: 'ADC' },
          ],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold">Your teams</h2>
      {team && team.length > 0 ? (
        <div>
          {team.map((team, index) => (
            <TeamCard key={index} team={team} />
          ))}
        </div>
      ) : (
        <span className="">No teams found</span>
      )}
      <CreateTeam />
    </div>
  );
}
