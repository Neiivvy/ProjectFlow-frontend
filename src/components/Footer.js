import {
  FaGithub,
  FaGithubSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const columns = [
  {
    heading: "Product",
    links: ["Features", "Tasks", "Team Collab", "Dashboard"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "API reference", "Blog"],
  },
  {
    heading: "Company",
    links: ["About", "How it works", "Contact"],
  },
  {
    heading: "Legal",
    links: ["Privacy", "Terms", "Security"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-gray-900 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-9 sm:px-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/10">
                <FaGithubSquare size={16} className="text-indigo-400" />
              </span>
              <span className="text-base font-semibold text-slate-100">
                Project Clarity
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-400">
              Plan, track, and ship work — one workspace for the whole team.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="text-slate-500 hover:text-slate-300"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-slate-500 hover:text-slate-300"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-slate-500 hover:text-slate-300"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {col.heading}
              </h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-indigo-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Project Clarity, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
