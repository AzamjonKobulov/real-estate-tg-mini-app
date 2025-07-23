import { Link } from "react-router-dom";

export default function Articles() {
  return (
    <section id="artcles">
      <div className="max-w-base mx-auto space-y-5">
        <div className="flex-between px-5">
          <h2>Articles</h2>
          <Link to="/" className="text-sm text-theme-main">
            See all
          </Link>
        </div>
        <div className="scroll-none overflow-auto pb-5 px-5">
          <div className="min-w-max flex items-center  gap-5">
            <Link to="/" className="w-58.5 rounded-xl overflow-hidden">
              <div className="h-25 relative">
                <img
                  src="./assets/images/article-1.jpg"
                  alt="Slide"
                  className="size-full absolute inset-0 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2.5 py-2.5">
                <h6 className=" font-medium text-theme-main-text dark:text-white line-clamp-2">
                  Residential property prices rise by 6% in Q2 2023: pro...
                </h6>

                <div className="space-y-2.5 text-theme-small-text text-xs ">
                  <p>
                    The Weighed average price of residential properties across 8
                    cities reached ...
                  </p>
                  <div className="flex items-center gap-2.5">
                    <span>Nov 24, 2023</span>
                    <ul className="list-disc pl-4">
                      <li>3min Read</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/" className="w-58.5 rounded-xl overflow-hidden">
              <div className="h-25 relative">
                <img
                  src="./assets/images/article-2.jpg"
                  alt="Slide"
                  className="size-full absolute inset-0 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2.5 py-2.5">
                <h6 className=" font-medium text-theme-main-text dark:text-white line-clamp-2">
                  Non Residential property prices rise by 4% in Q1 2023: pro...
                </h6>

                <div className="space-y-2.5 text-theme-small-text text-xs ">
                  <p>
                    The Weighed average price of residential properties across 8
                    cities reached ...
                  </p>
                  <div className="flex items-center gap-2.5">
                    <span>Nov 24, 2023</span>
                    <ul className="list-disc pl-4">
                      <li>3min Read</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
