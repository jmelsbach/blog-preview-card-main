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
    <div className="max-w-96">
      <img src={blogImage}></img>
      <div className="tag-row">{categories}</div>
      <div>Published {date}</div>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <img src={authorImage} alt="Author Image" />
        <span>{authorName}</span>
      </div>
    </div>
  );
}

export default Card;
