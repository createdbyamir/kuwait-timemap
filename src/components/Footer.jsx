import { Github, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-white">
      <div className="container-page py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
            About
          </h3>
          <p className="mt-3 text-neutral-700">
            An interactive map + timeline exploring Kuwait’s places and moments.
            Built as a portfolio project to learn mapping and scrollytelling.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
            Tech & Credits
          </h3>
          <ul className="mt-3 space-y-2 text-neutral-700">
            <li>React, Vite, Tailwind, React Router</li>
            <li>Framer Motion, React Leaflet</li>
            <li>
              Map tiles by{" "}
              <a
                className="a-link"
                href="https://www.maptiler.com/"
                target="_blank"
                rel="noreferrer"
              >
                MapTiler
              </a>{" "}
              · Data © OpenStreetMap contributors
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
            Links
          </h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                className="a-link inline-flex items-center gap-2"
                href="https://github.com/createdbyamir/kuwait-timemap"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="w-4 h-4" />
                GitHub Repo
              </a>
            </li>
            <li>
              <a
                className="a-link inline-flex items-center gap-2"
                href="https://github.com/createdbyamir/kuwait-timemap/issues"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                Issues / Feedback
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="container-page py-4 text-sm text-neutral-600 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Kuwait TimeMap</span>
          <span className="text-neutral-500">v0.1.0</span>
        </div>
      </div>
    </footer>
  );
}
