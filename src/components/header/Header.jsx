import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/auth";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const pagesArray = [
    { title: "Home", slug: "/" },
    { title: "Colleges", slug: "/colleges" },
    { title: "Admission", slug: "/admission" },
    { title: "My College", slug: "/my-college" },
  ];

  const [theme, setTheme] = useState("");
  const { user, role, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const userPreferredTheme = localStorage.getItem("theme");

    if (userPreferredTheme) {
      setTheme(userPreferredTheme);
    } else {
      if (prefersDarkScheme) {
        setTheme("night");
      } else {
        setTheme("light");
      }
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
      theme === "night"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "night" : "light";
    setTheme(newTheme);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successful");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = event.target.elements.search.value;

    // navigate(`/colleges?search=${encodeURIComponent(searchQuery)}`);

    navigate(`/college/search/${keyword}`);
  };

  return (
    <nav className="navbar bg-base-200 py-3 lg:py-4 top-0 left-0 w-full z-[1030] shadow-lg sticky">
      <div className="navbar-start gap-4 lg:gap-0">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="lg:hidden cursor-pointer hover:opacity-70 duration-150"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 bg-base-200 rounded-box w-52 border-2 border-gray-300 shadow-md"
          >
            {pagesArray.map((page) => (
              <li key={page.slug}>
                <NavLink to={page.slug} className="text-xl">
                  {page.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <NavLink to={`/`} className="font-bold normal-case text-3xl">
          <span className="text-primary">College</span>
          Hub
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium">
          {pagesArray.map((page) => (
            <li key={page.slug}>
              <NavLink to={page.slug} className="text-xl">
                {page.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <form onSubmit={handleSearch}>
          <div className="form-control">
            <label className="input-group">
              <input
                type="search"
                name="search"
                className="input input-bordered"
                placeholder="Search College"
              />
              <span className="dark:bg-slate-800 cursor-pointer">
                <button type="submit">
                  <AiOutlineSearch size={22} />
                </button>
              </span>
            </label>
          </div>
        </form>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            {user?.photoURL ? (
              <div className="w-12 rounded-full bg-slate-400">
                <img title={user?.displayName || user?.email} src={user?.photoURL} />
              </div>
            ) : (
              <RxAvatar size={45} />
            )}
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 menu menu-compact dropdown-content rounded-box w-52 bg-base-200 border-2 border-gray-300 shadow-md"
          >
            <li>
              <Link to={`#`} className="text-lg" onClick={toggleTheme}>
                Switch to:{" "}
                {theme === "night" ? (
                  <BsFillSunFill className="text-white" size={20} />
                ) : (
                  <BsFillMoonStarsFill size={17} />
                )}
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to={`/profile`} className="text-lg">
                    Profile
                  </Link>
                </li>
                <li>
                  <NavLink to={`/dashboard/${role}`} className="text-xl">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <Link onClick={handleLogout} to={`#`} className="text-lg">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={`/login`} className="text-lg">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to={`/register`} className="text-lg">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
