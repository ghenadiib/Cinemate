import { useTitle } from "../hooks/useTitle";
import { Link } from "react-router-dom";



export const PageNotFound = () => {
  useTitle("Page not found - Cinemate");
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            Oops, page not found!
          </p>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="w-48 h-10 text-xl text-white dark:text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-800 dark:hover:bg-sky-900 dark:focus:ring-blue-800">
              Back to Cinemate
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
