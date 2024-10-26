import { Spinner } from "@nextui-org/react";

export default function RootLoading() {
  return (
    <div className="fixed w-full h-full bg-inherit z-[9999] curosr-unset top-0 left-0">
      <Spinner
        color="secondary"
        size="lg"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

