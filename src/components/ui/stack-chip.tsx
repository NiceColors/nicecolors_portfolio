import { Spacer, Tooltip } from "@nextui-org/react";
import Image from "next/image";

export type TStacks =
  | "Python"
  | "JQuery"
  | "PHP"
  | "Laravel"
  | "Nextjs"
  | "React"
  | "Typescript"
  | "Javascript"
  | "Html"
  | "CSS"
  | "Tailwindcss"
  | "Sass"
  | "Mysql"
  | "Wordpress"
  | "Redux";

interface StackChipProp {
  title?: string;
  stackList: TStacks[];
  size?: number;
}

export const StackChip = ({ title, stackList, size = 25 }: StackChipProp) => {
  return (
    <div className="mt-2">
      {title && <span className="text-sm font-bold"># {title}</span>}
      <Spacer y={2} />
      <div className="flex flex-row flex-wrap gap-3">
        {stackList.map((stack, index) => (
          <Tooltip key={stack} content={stack}>
            <div className="flex flex-row items-center">
              <Image
                alt={stack}
                height={size}
                src={`/assets/icons/${stack.toLowerCase()}.svg`}
                width={size}
              />
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
