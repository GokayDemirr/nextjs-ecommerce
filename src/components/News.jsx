import { news } from "@/data/news";

const News = () => {
  return (
    <div className="max-w-screen-xl pt-20">
      <div className="flex items-center justify-center ">
        <div className="w-14 h-[2px] bg-black rounded-lg"></div>
        <div className="mx-4 text-2xl font-semibold">NEWS</div>
        <div className="w-14 h-[2px] bg-black rounded-lg"></div>
      </div>
      <div className="italic text-center text-sm mb-8">
        The freshest and most exciting news
      </div>

      <div className="flex flex-wrap gap-8">
        {news.slice(-3).map((post) => (
          <div
            key={post.id}
            className="flex flex-col w-full max-w-[calc(33.333%-32px)] "
          >
            <img src={post.img} className="cursor-pointer mb-2" />
            <div className="font-semibold">{post.title}</div>
            <div className="text-xs italic mb-2 text-gray-500">{post.date}</div>
            <div className="text-sm text-gray-700  leading-relaxed  italic break-words">
              {post.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
