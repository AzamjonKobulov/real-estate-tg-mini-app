import { Link } from "react-router-dom";

const props = [
  {
    img: "./assets/images/owner-properties-1.jpg",
    title: "Blissful View Property",
    owner: "Navella Runte",
  },
  {
    img: "./assets/images/owner-properties-2.jpg",
    title: "Dream Scape",
    owner: "Garnet Nolan",
  },
  {
    img: "./assets/images/owner-properties-3.jpg",
    title: "Oasis Property",
    owner: "Elase Blick",
  },
  {
    img: "./assets/images/owner-properties-4.jpg",
    title: "Graund villa",
    owner: "Axozi Voalt",
  },
];

export default function OwnerProperty() {
  return (
    <section id="owner-property">
      <div className="max-w-base mx-auto space-y-5 px-5">
        <div className="max-w-base mx-auto flex-between">
          <h2>Owner Property</h2>
          <Link to="/" className="text-sm text-theme-main">
            See all
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {props.map((p) => (
            <div
              key={p.title}
              className="rounded-xl shadow-properties overflow-hidden"
            >
              <div className="h-30">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
              <div className="space-y-2 bg-theme-main-5 dark:bg-theme-main-text p-2.5">
                <h5 className="text-lg/[1.2] text-theme-main-text dark:text-white font-medium line-clamp-1">
                  {p.title}
                </h5>
                <Link to="/" className="font-medium  text-theme-main">
                  {p.owner}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
