import { Link } from "react-router-dom";

interface BackArrowProps {
  to: string;
}

const BackArrow = ({ to }: BackArrowProps) => {
  return (
    <Link 
      to={to} 
      className="fixed top-8 left-8 font-courier text-tiny text-foreground no-underline hover:opacity-60 transition-opacity z-50"
    >
      ←
    </Link>
  );
};

export default BackArrow;
