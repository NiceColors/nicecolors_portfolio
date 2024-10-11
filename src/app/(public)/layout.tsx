import { Spacer } from "@nextui-org/react";

import { Navbar } from "@/components/ui/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative flex flex-col min-h-lvh container mx-auto max-w-6xl">
        <Navbar />
        <main className=" h-full px-2">{children}</main>
        <Spacer y={6} />
      </div>
    </>
  );
}
