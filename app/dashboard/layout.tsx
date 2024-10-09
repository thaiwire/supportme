import MainMenu from "./components/main-menu";

export default function dashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <MainMenu />
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome to Back Jaruwat</h1>
        {children}
      </div>
    </div>
  );
}
