import SubInfo from "./SubInfo";

interface InfoProps {
    title: string;
    subInfo: SubInfoProps[];
}

interface SubInfoProps {
    title: string;
    value: string;
    isDisabled?: boolean;
    add10?: () => void;
    sub10?: () => void;
}

export default function Info({ title, subInfo }: InfoProps) {
    return (
        <div className="w-full md:w-auto mb-4 md:mb-0">
            <span className="text-xl sm:text-2xl md:text-[28px] block mb-2 sm:mb-4">{title}</span>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-[30px]">
                {subInfo.map((info, index) => (
                    <SubInfo key={index} title={info.title} value={info.value} isDisabled={info.isDisabled} add10={info.add10} sub10={info.sub10} />
                ))}
            </div>
        </div>
    )
};