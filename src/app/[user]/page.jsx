import { redirect } from "next/navigation";
import Chip from "../components/chip";
import Repos from "../components/repos";

export async function generateMetadata({ params: { user } }) {
  const { name } = await fetch(`https://api.github.com/users/${user}`).then(
    (res) => res.json()
  );
  return {
    title: "Perfil de Github | " + name,
  };
}
export default async function page({ params: { user } }) {
  const {
    name,
    avatar_url,
    html_url,
    bio,
    repos_url,
    followers,
    following,
    message,
    location,
  } = await fetch(`https://api.github.com/users/${user}`).then((res) =>
    res.json()
  );
  if (!name || message === "Not Found") {
    redirect("/github");
  }
  return (
    <section className="flex flex-col w-full max-w-6xl px-8 sm:px-16 m-auto min-h-[calc(100vh-256px)]">
      <div className="flex flex-col mb-4 sm:flex-row">
        <img
          src={avatar_url}
          className="self-center -mt-10 border-8 sm:self-start size-32 rounded-2xl bg-celeste-oscuro border-celeste-oscuro"
          alt={`Foto de perfil de Github de ${name}`}
        />
        <div className="flex flex-row items-start justify-center w-full">
          <div className="flex flex-col items-center gap-4 p-4 sm:items-start lg:flex-row">
            <Chip value="Seguidores">{followers}</Chip>
            <Chip value="Seguidos">{following}</Chip>
            {location && <Chip value="Ubicación">{location}</Chip>}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
      <a href={html_url} className="text-[2rem] hover:underline" target="_blank" rel="noopener noreferrer">{name}</a>
        <p className="text-base text-gris">{bio}</p>
      </div>
      <Repos repos_url={repos_url} />
    </section>
  );
}
