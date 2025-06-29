
interface FilterHeaderProps {
  title: string;
}

export function FilterHeader({ title }: FilterHeaderProps) {
  return (
    <div className="col-span-3">
      <h2 className="text-base font-semibold text-foreground">{title}</h2>
    </div>
  );
}
