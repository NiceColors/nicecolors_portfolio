import { Image } from "@nextui-org/react";
import WaveCard from "./wavecard";

export default function WaveCards() {
    return (
        <div className="flex flex-wrap ">
            <WaveCard duration={2}>
                <Image height={30} width={30} src={`/assets/icons/react.svg`} />
            </WaveCard>
            <WaveCard duration={4}>
                <Image height={30} src={`/assets/icons/typescript.svg`} width={30} />
            </WaveCard>
            <WaveCard duration={6}>
                <Image height={30} src={`/assets/icons/tailwindcss.svg`} width={30} />
            </WaveCard>
            <WaveCard duration={4}>
                <Image height={30} src={`/assets/icons/node.svg`} width={30} />
            </WaveCard>
            <WaveCard duration={2}>
                <Image height={30} src={`/assets/icons/python.svg`} width={30} />
            </WaveCard>
        </div>
    )
}
