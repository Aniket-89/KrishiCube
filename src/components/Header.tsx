import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-gradient-to-r from-green-700 to-green-600">
      <a className="flex items-center justify-center" href="/">
        <Leaf className="h-6 w-6 text-yellow-400" />
        <span className="ml-2 text-lg font-bold text-white">
          Krishi Cube
        </span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <a
          className="text-sm lg:text-base font-medium text-white hover:text-yellow-200"
          href="" 
          onClick={(e) => {
            e.preventDefault();
            const visionSection = document.getElementById('vision');
            if (visionSection) {
              visionSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Vision
        </a>
        <a
          className="text-sm lg:text-base font-medium text-white hover:text-yellow-200"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const teamSection = document.getElementById('team');
            if (teamSection) {
              teamSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          About Us
        </a>
        <Button
          variant="outline"
          className="text-green-700 h-9 bg-yellow-400 hover:bg-white hover:text-green-700 text-base font-medium"
          onClick={() => {
            const contactSection =
              document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Contact
        </Button>
      </nav>
    </header>
  );
};

export default Header;
