export default function Chip({children, value}) {
  return (
    <div className="flex gap-4 px-5 py-4 text-base divide-x divide-gris bg-navy rounded-xl size-fit">
      <span className="font-medium text-gris">{value}</span>
      <span className="pl-4">{children}</span>
    </div>
  );
}
