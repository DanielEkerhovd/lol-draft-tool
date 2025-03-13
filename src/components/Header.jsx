export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-dark text-light h-[80px]">
      <div className="flex items-center">logo</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-400">
              Drafts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
