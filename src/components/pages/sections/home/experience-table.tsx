'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from "@nextui-org/react";

import { Companyli, CompanyliProp } from "@/components/ui/company-list";
import { ExtraInfoDialog } from "@/components/ui/dialog";
import { StackChip, TStacks } from "@/components/ui/stack-chip";
import { Titleli } from "@/components/ui/title-list";

interface ITableHeader {
    name: string;
    align?: "start" | "center" | "end";
}

interface IExperienceData {
    company: CompanyliProp;
    responsibilities: string[];
    contributions: {
        learned: string[];
        results: string[];
        stackUsed?: TStacks[];
    };
}

const headers: ITableHeader[] = [
    { name: "Empresa" },
    { name: "Responsabilidades" },
    { name: "Contribuições", align: "center" },
];



const experienceData: IExperienceData[] = [
    {
        company: {
            name: "UFRRJ | LAPSI",
            homepageUrl: "https://portal.ufrrj.br/",
            position: ["Full-stack", "Analista de Dados", "Desenvolvedor"],
            period: {
                start: "2021/07",
                end: "2022/10",
            },
        },
        responsibilities: [
            "Manutenção e Criação de Aplicações Web",
            "Análise e Migração de Dados de Eventos",
        ],
        contributions: {
            learned: [
                "React, PHP, Python",
                "Análise de Dados",
                "Análise de Requisitos",
                "Engenharia de Software",
            ],
            results: [
                "Decisões e avanço de funções com base nos dados do usuário",
                "Desenvolver UX por meio de uma interface de usuário limpa e intuitiva",
                "Desenvolver e manter aplicações web",
                "Analisar dados de eventos e exportar insights valiosos para a equipe",
            ],
            stackUsed: ["React", "Typescript", "PHP", "Python", "JQuery", "Nextjs"],
        },
    },
    {
        company: {
            name: "UFRRJ | Projeto Story Girl",
            homepageUrl: "https://portal.ufrrj.br/",
            position: ["Tutor"],
            period: {
                start: "2021/01",
                end: "2022",
            },
        },
        responsibilities: [
            "Criação e edição de apostilas e exercícios",
            "Ensino de programação para crianças e adolescentes",
        ],
        contributions: {
            learned: ["Criação de materiais educativos", "Ensino de programação"],
            results: [
                "Aprimorar as habilidades pedagógicas em programação",
                "Contribuir para a educação inclusiva de jovens",
            ],
        },
    },
    {
        company: {
            name: "Sphera Educacional",
            homepageUrl: "https://sphera.com.br/",
            position: ["Desenvolvedor Front-end"],
            period: {
                start: "2022",
                end: new Date(),
                isActual: true,
            },
        },
        responsibilities: [
            "Desenvolvimento de soluções para sistemas educacionais",
            "Suporte na resolução de problemas",
            "Integração com serviços",
        ],
        contributions: {
            learned: [
                "Melhorias na usabilidade e performance",
                "Colaboração com back-end",
                "Desenvolvimento de soluções educacionais",
                "Resolução de problemas ",
            ],
            results: [
                "Soluções modernas",
                "Entrega de valor para os clientes",
                "Melhorias na usabilidade e performance",
                "Integração de sistemas de pagamento",
            ],
            stackUsed: [
                "React",
                "Nextjs",
                "Typescript",
                "Redux",
                "Tailwindcss",
                "PHP",
            ],
        },
    },
];

export default function ExperienceTable() {
    return (
        <Table isHeaderSticky>
            <TableHeader>
                {headers.map((header) => (
                    <TableColumn key={header.name} align={header.align ?? "start"}>
                        {header.name}
                    </TableColumn>
                ))}
            </TableHeader>
            <TableBody>
                {experienceData.map((exp) => (
                    <TableRow key={exp.company.name}>
                        <TableCell>
                            <Companyli
                                homepageUrl={exp.company.homepageUrl}
                                name={exp.company.name}
                                period={exp.company.period}
                                position={exp.company.position}
                            />
                        </TableCell>
                        <TableCell>
                            <Titleli list={exp.responsibilities} />
                        </TableCell>
                        <TableCell align="center">
                            <ExtraInfoDialog
                                dialogTitle={"Contribuições"}
                                iconType={"contribution"}
                                size="xl"
                            >
                                <Titleli
                                    list={exp.contributions.learned}
                                    title={"O que eu aprendi / aprimorei"}
                                />
                                <Titleli
                                    list={exp.contributions.results}
                                    title={"Resultados Esperados"}
                                />
                                {exp.contributions.stackUsed && (
                                    <StackChip
                                        size={40}
                                        stackList={exp.contributions.stackUsed}
                                        title={"O que eu usei"}
                                    />
                                )}
                            </ExtraInfoDialog>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
