import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">About Page</h1>
      <Button asChild>
        <Link to="/">Go to Home</Link>
      </Button>
    </div>
  );
}

export default About;
