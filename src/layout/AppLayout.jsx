import BottomMenu from "../components/shared/BottomMenu";
import { useTheme } from "../contexts/ThemeContext";

export default function AppLayout({ children }) {
  const { theme } = useTheme();

  return (
    <body className={`min-h-screen ${theme} dark:bg-theme-dark`}>
      <main>{children}</main>
      <BottomMenu />
    </body>
  );
}
