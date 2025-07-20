import BottomMenu from "../components/shared/BottomMenu";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen">
      {children}
      <BottomMenu />
    </div>
  );
}
