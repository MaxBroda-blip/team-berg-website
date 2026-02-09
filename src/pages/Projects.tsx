import { Link } from "react-router-dom";
import BackArrow from "@/components/BackArrow";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <BackArrow to="/" />
      <div className="fixed top-8 right-8 z-50">
        <nav className="flex gap-3">
          <Link 
            to="/projects/works" 
            className="font-courier text-micro text-foreground no-underline hover:opacity-60 transition-opacity"
          >
            Works
          </Link>
          <Link 
            to="/projects/teamberg" 
            className="font-courier text-micro text-foreground no-underline hover:opacity-60 transition-opacity"
          >
            Team Berg
          </Link>
          <Link 
            to="/projects/derbau" 
            className="font-courier text-micro text-foreground no-underline hover:opacity-60 transition-opacity"
          >
            special project: Der Bau
          </Link>
        </nav>
      </div>
      <main className="pt-32 px-8 min-h-screen">
      </main>
    </div>
  );
};

export default Projects;

