'use client'

import { Chip, Link, Tooltip } from "@nextui-org/react";
import dayjs from "dayjs";
import { Calendar } from "lucide-react";

export interface CompanyliProp {
    name: string;
    homepageUrl?: string;
    position: string | string[];
    period: {
        start: string | Date;
        end: string | Date;
        isActual?: boolean;
    };
}

export const Companyli: React.FC<CompanyliProp> = ({
    name,
    homepageUrl,
    position,
    period,
}) => {



    const positionList = Array.isArray(position) ? position : [position];

    const periodStart = dayjs(period.start).format("YYYY/MM");

    const periodDurationYear = dayjs(period.end).diff(dayjs(period.start), 'year')
    const periodDurationMonth = dayjs(period.end).diff(dayjs(period.start), 'month') - periodDurationYear * 12

    const periodDurantionYearText = periodDurationYear > 0 ? `${periodDurationYear} ano${periodDurationYear > 1 ? 's' : ''}` : ''
    const periodDurantionMonthText = periodDurationMonth > 0 ? `e ${periodDurationMonth} mês${periodDurationMonth > 1 ? 'es' : ''}` : ''

    const periodDurationDay = `${periodDurantionYearText} ${periodDurantionMonthText}`



    return (
        <div className="flex flex-col flex-wrap justify-between items-start ">
            <div className="text-lg font-medium">{name}</div>
            {homepageUrl && (
                <div className="text-sm  text-cyan-700">
                    <Link href={homepageUrl} target="_blank">
                        <span>{homepageUrl}</span>
                    </Link>
                </div>
            )}
            <div className="flex flex-col gap-3 mt-1">
                <div className="flex gap-1">
                    {positionList.map((position) => (
                        <Chip radius="sm" size="sm">
                            {position}
                        </Chip>
                    ))}
                </div>
                <div className="flex items-center gap-1 text-xs">
                    <Calendar size={18} />
                    <Tooltip content={periodDurationDay} placement="right">
                        <p>
                            {periodStart} ~ {period.isActual ? 'Atual' : dayjs(period.end).format("YYYY/MM")}
                        </p>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};