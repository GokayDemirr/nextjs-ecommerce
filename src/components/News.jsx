import { getNews } from "@/utils/neon/action";

const News = async () => {
  const news = await getNews();

  if (!news || news.length === 0) {
    return <div>No news available.</div>;
  }

  return (
    <div className="max-w-screen-xl pt-20 px-8">
      <div className="flex items-center justify-center">
        <div className="w-14 h-[2px] bg-black rounded-lg"></div>
        <div className="mx-4 text-2xl font-semibold">NEWS</div>
        <div className="w-14 h-[2px] bg-black rounded-lg"></div>
      </div>
      <div className="italic text-center text-sm mb-8">
        The freshest and most exciting news
      </div>

      <div className="md:flex-row flex-col flex justify-center md:items-start items-center flex-wrap gap-8">
        {news.slice(-3).map((post) => (
          <div
            key={post.id}
            className="flex flex-col w-full md:max-w-[calc(33.333%-32px)] "
          >
            <img
              src={post.img_url}
              className="cursor-pointer mb-2 transform transition-transform duration-300 ease-out hover:-translate-y-2 "
              alt={post.title}
            />
            <div className="font-semibold cursor-pointer">{post.title}</div>
            <div className="text-xs italic mb-2 text-gray-500">
              {new Date(post.created_at).toLocaleDateString()}
            </div>
            <div className="text-sm text-gray-700 leading-relaxed italic break-words cursor-pointer">
              {post.content.length > 100
                ? `${post.content.slice(0, 100)}...`
                : post.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
