"use client";
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  navMenu,
  PROJECT_LIST_ROUTE,
} from "@/constants/route";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  if (pathName.startsWith(PROJECT_LIST_ROUTE)) {
    return null;
  }
  return (
    <nav className=" sticky bg-linear-to-r from-green-500 via-green-300  to-green-600 w-full  top-0 p-1 shadow-2xl">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href={HOME_ROUTE}>PMS</Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            href={LOGIN_ROUTE}
            className="bg-orange-500 hover:bg-orange-600 text-white shadow-xs font-medium rounded-lg text-sm px-5 py-1.5 "
          >
            Login
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navMenu.map((menu) => {
              const isActive =
                pathName === menu.route ||
                (menu.route !== HOME_ROUTE && pathName.startsWith(menu.route));

              return (
                <li key={menu.route}>
                  <Link
                    href={menu.route}
                    className={`block py-2 px-3 text-xl rounded-sm md:bg-transparent md:text-fg-brand md:p-0 ${
                      isActive ? "text-orange-500" : ""
                    }`}
                    aria-current="page"
                  >
                    {menu.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
