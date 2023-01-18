import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
        <img src="https://media.tenor.com/eGrPITajENUAAAAC/bocchi-bocchi-the-rock.gif" alt="404NotFound" />
      <p className="text-2xl md:text-4xl font-bold text-red-500 my-10">404 Not Found</p>
      <Link to="/"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Home</button></Link>
    </div>
  );
}
