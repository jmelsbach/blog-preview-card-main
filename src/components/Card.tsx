import Tag from "./Tag";

interface CardProps {
  title: string;
  blogImage: string;
  description: string;
  categories: string[];
  date: string;
  authorName: string;
  authorImage: string;
}

function Card({
  title,
  blogImage,
  description,
  categories,
  date,
  authorName,
  authorImage,
}: CardProps) {
  return (
    <div className="font-custom bg-white border border-black max-w-[327px] sm:max-w-[384px] p-6 rounded-[20px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex-col">
      <img src={blogImage} alt="article illustration" className="rounded-[10px] w-full h-50 object-center"></img>
      <div className="my-6">
        <Tag name={categories[0]}></Tag>
        <div className="my-3 text-xs sm:text-sm">Published {date}</div>
        <h1 className="my-3 text-xl sm:text-2xl font-extrabold hover:text-[#F4D04E]">
          <a href="">{title}</a>
        </h1>
        <p className="text-sm sm:text-base text-[#7F7F7F]">{description}</p>
      </div>
      <div className="flex items-center gap-3">
        <img src={authorImage} className="w-8" alt="Author Image" />
        <span className="text-center font-extrabold text-xs sm:text-sm">{authorName}</span>
      </div>
    </div>
  );
}

export default Card;
