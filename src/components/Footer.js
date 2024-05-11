import {Link} from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <footer className="w-full bg-gray-200 border-gray-200 dark:bg-gray-900 shadow p-2">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to="/" className="hover:underline">
              Cinemate™ 
            </Link>
            . All rights reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="https://www.linkedin.com/in/ghenadii-borodaciov-b69726207/" rel="noreferrer noopener" target="_blank" className="hover:underline me-4 md:me-6">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/ghenadiib" rel="noreferrer noopener" target="_blank" className="hover:underline me-4 md:me-6">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </footer>
  );
};
