import { ChieldIcon } from "./icons/chield-alt-svg";
import { NestingIcon } from "./icons/nesting-svg";
import { StarIcon } from "./icons/star-svg";
import { getTimeAgo } from "@/lib/dateFormat";

export default function CardRepo({
    name,
    description,
    license,
    forks_count,
    stargazers_count,
    updated_at,
    html_url,
  }) {
  
  const update = new Date(updated_at);
  return (
    <a
      href={html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-full p-4 cursor-pointer group rounded-xl bg-gradient-to-br from-navy to-azul"
    >
      <h2 className="mb-4 text-xl group-hover:underline">{name}</h2>
      {description && <p className="mb-4 text-base text-gris">{description}</p>}

      <div className="flex max-[520px]:flex-col flex-row gap-2 text-sm md:max-lg:flex-col text-gris">
        <div className="flex flex-row gap-2">
        {license && (
          <div className="inline-flex ">
            <ChieldIcon className="mr-1 size-5" />{" "}
            <p className="uppercase">{license.key}</p>
          </div>
        )}
        <div className="inline-flex ">
          <NestingIcon className="mr-1 size-5" /> {forks_count}
        </div>
        <div className="inline-flex ">
          <StarIcon className="mr-1 size-5" /> {stargazers_count}
        </div>
        </div>
        <p className="text-xs">
          actualizado{" "}
          {getTimeAgo(update.getTime())}
        </p>
      </div>
    </a>
  );
}
