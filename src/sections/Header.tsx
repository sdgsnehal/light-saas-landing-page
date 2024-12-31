import ArrowRight from "../assets/arrow-right.svg";
export const Header = () => {
  return (
    <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
      <p> Get Started for free</p>
      <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
    </div>
  );
};
