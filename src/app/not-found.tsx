import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-dvh">
      <h1 className="text-6xl font-bold dark:text-gray-500 text-gray-900 mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold dark:text-gray-50 text-gray-900 mb-4">
        Página Não Encontrada
      </h2>
      <p className="dark:text-gray-100 text-gray-900 mb-8">
        Desculpe, a página que você está procurando não existe.
      </p>
      <Link className="px-4 py-2 text-white rounded " href="/">
        <Button>Voltar para a Página Inicial</Button>
      </Link>
    </div>
  );
}
