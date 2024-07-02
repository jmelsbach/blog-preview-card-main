
export default function Tag({ name }: { name: string }) {
  return (
    <div className="flex items-center text-xs sm:text-sm font-extrabold bg-[#F4D04E] rounded  w-[73px] h-[26px] sm:w-[82px] sm:h-[29px] justify-center">
      <span>{name}</span>
    </div>
  );
}