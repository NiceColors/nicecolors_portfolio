import { Button } from "@nextui-org/react";
import { DownloadIcon } from "lucide-react";

export const ResumeButton = () => {
  const downloadResume = () => {
    const link = document.createElement("a");

    link.href = "/assets/CV-2024.pdf";
    link.download = "CV-2024.pdf";
    link.click();
  };

  return (
    <Button
      className="font-semibold flex items-center justify-center"
      size="md"
      variant="bordered"
      onClick={downloadResume}
    >
      Currículo
      <DownloadIcon size={16} />
    </Button>
  );
};
