import Card from "./components/Card";
import avatar from "./assets/images/image-avatar.webp"
import blogImage from "./assets/images/illustration-article.svg"

export default function App() {
  return (
    <div>
      <Card
        title="HTML & CSS foundations"
        blogImage={blogImage}
        description="These languages are the backbone of every website, defining structure, content, and presentation."
        categories={['Learning']}
        date="21 Dec 2023"
        authorName="Greg Hooper"
        authorImage={avatar}
      ></Card>
    </div>
  );
}
