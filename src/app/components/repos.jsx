"use client";
import { useEffect, useState } from "react";
import CardRepo from "./card-repo";
import Lenis from "@studio-freight/lenis";

export default function Repos({ repos_url }) {
  const [repos, setRepos] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  useEffect(() => {
    fetch(repos_url)
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, [repos_url]);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  function handleClick() {
    setViewAll(!viewAll);
  }
  return (
    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
      {repos.length > 0 &&
        repos
          .slice(0, viewAll ? repos.length : 4)
          .map((repo) => <CardRepo key={repo.id} {...repo} />)}
      {repos.length > 4 && (
        <button
          onClick={handleClick}
          className="col-span-1 mt-4 mb-10 md:col-span-2 text-gris hover:underline"
        >
          {viewAll ? "Ver Menos" : "Ver todos los repositorios"}
        </button>
      )}
    </div>
  );
}
