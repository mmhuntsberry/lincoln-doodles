import clsx from "clsx";

interface Card {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: Card) => {
  return (
    <div
      className={clsx("rounded-2xl p-8 py-4 bg-orange-200 shadow", className)}
    >
      {children}
    </div>
  );
};

export default Card;
