import { Link } from "react-router-dom";

export default function OwnerProperty() {
  return (
    <section id="owner-property">
      <div className="max-w-base mx-auto px-5">
        <div className="max-w-base mx-auto flex-between px-5">
          <h2>Owner Property</h2>
          <Link to="/" className="text-sm text-theme-main">
            See all
          </Link>
        </div>
      </div>
    </section>
  );
}
