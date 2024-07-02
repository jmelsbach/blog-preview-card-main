
export default function Tag({ name }: { name: string }) {
  return (
    <div className="flex items-center text-xs font-extrabold bg-[#F4D04E] rounded w-[82px] h-[29px] justify-center">
      <span>{name}</span>
    </div>
  );
}