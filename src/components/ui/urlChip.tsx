'use client';

import { Chip } from "@nextui-org/react";

interface UrlChipProp {
    title: string;
    url: string;
}

export const UrlChip = ({ title, url }: UrlChipProp) => {
    return (
        <Chip radius="sm" className="px-0 mx-1 opacity-80" color="primary">
            {/* <Link href={url}> */}
            <span className="text-xs">{title}</span>
            {/* </Link> */}
        </Chip>
    );
};
