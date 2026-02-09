import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-50 px-8 py-6">
      <div className="flex justify-between items-start">
        <Link to="/" className="font-courier text-tiny text-foreground no-underline hover:opacity-60 transition-opacity">
          Tarane Bazrafshan & Max Broda
        </Link>
        
        {isHomePage && (
          <nav className="flex gap-3">
            <Link to="/news" className="font-courier text-micro text-foreground no-underline hover:opacity-60 transition-opacity">
              News
            </Link>
            <Link to="/projects" className="font-courier text-micro text-foreground no-underline hover:opacity-60 transition-opacity">
              Projects
            </Link>
            <Link to="/about" className="font-courier text-micro text-foreground no-underline hover:opacity-60 transition-opacity">
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
