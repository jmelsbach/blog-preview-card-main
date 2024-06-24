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
    <div className="border-2 max-w-96 p-6 rounded-[20px]">
        <img src={blogImage} className="rounded-[20px] w-full"></img>
        <div className="my-6">
        <div className="my-3">{categories}</div>
        <div className="my-3">Published {date}</div>
        <h1 className="my-3">{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <img src={authorImage} alt="Author Image" />
        <span>{authorName}</span>
      </div>
    </div>
  );
}

export default Card;
