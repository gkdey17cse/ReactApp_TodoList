import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../static/images/logo.png";

export default function Header({ title = "Default Title", searchBar = false }) {
  //   console.log("Title Prop:", title); // Debugging

  return (
    <>
      <nav className="bg-slate-100">
        <div className="flex justify-around items-center">
          <Link
            to="/"
            className="text-xl flex justify-center items-center gap-2 tracking-wider py-1.5 px-4"
          >
            <img src={logo} className="w-8" alt="Img Logo" />
            {title} {/* No need to use props.title now */}
          </Link>
          <ul className="flex justify-around items-center gap-4 font-semibold">
            <li className="hover:text-teal-600 duration-100">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-teal-600 duration-100">
              <Link to="/todo">TODO List</Link>
            </li>
          </ul>
          <div className="flex justify-between items-center gap-6 m-1">
            {searchBar ? (
              <form
                className="flex gap-0.5 items-center justify-center"
                role="search"
              >
                <input
                  className="my-1 px-2 py-1.5 border border-teal-800 active:border-teal-800 bg-white shadow-sm"
                  type="search"
                  placeholder="Search Anything"
                  aria-label="Search"
                />
                <button
                  className="px-3 py-1.5 my-1 bg-teal-500 hover:bg-teal-600 duration-200 w-full h-full text-white border border-teal-800"
                  type="submit"
                >
                  Search
                </button>
              </form>
            ) : (
              <p>No Searchbar is here</p>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool,
};
