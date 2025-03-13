export function TeamCard({ team }) {
  const { name } = team;
  return (
    <div className="flex justify-between bg-light rounded-sm p-5 text-black font-semibold w-full text-center">
      <h3 className="">{name}</h3>
      <div className="flex gap-5">
        <button className="bg-red-500 px-2 rounded-sm uppercase">select</button>
        <button className="bg-dark text-white px-2 rounded-sm uppercase">
          edit
        </button>
      </div>
    </div>
  );
}
