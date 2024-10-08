import { LightDarkToggle } from "@/components/ui/light-dark-toggle";

type Props = {
  children: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex gap-4 flex-col min-h-screen items-center justify-center p-24">
        {children}
      </div>
      <LightDarkToggle className="fixed top-1/2 right-2 -mt-4" />
    </>
  );
}
