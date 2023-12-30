import { Input } from "@nextui-org/input";
import { SearchIcon } from "./icons/search-svg";

export default function InputSearch() {
  return (
    <Input
      autoFocus
      name="user"
      variant="bordered"
      classNames={{
        input: [
          "bg-celeste-oscuro",
          "text-gris-claro",
          "placeholder:text-gris",
          "w-full"
        ],
        base: [
          "bg-celeste-oscuro",
          "text-gris-claro",
          "rounded-xl",
        ],
        inputWrapper:[
          "border-celeste-oscuro",
          "group-data-[focus=true]:border-celeste",
          "data-[hover=true]:border-gris-claro"
        ]
      }}
      placeholder="username"
      startContent={
        <SearchIcon className="flex-shrink-0 mr-2 pointer-events-none" />
      }
    />
  );
}
