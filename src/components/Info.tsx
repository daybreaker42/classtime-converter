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
            <span className="text-xl sm:text-2xl md:text-[28px] block mb-2 sm:mb-4">
                {title === "변환" ? "시간표 기준" : "수업 시간 설정"}
            </span>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-[30px]">
                {subInfo.map((info, index) => {
                    // 타이틀 텍스트 변경
                    const modifiedInfo = {
                        ...info,
                        title: info.title === "변환 공식" ? "계산 방식" :
                            info.title === "1교시 시작 시각" ? "1교시 시작" :
                                info.title === "교시 간격 (분)" ? "수업 길이" : info.title,
                        value: info.title === "변환 공식" ? "수업 시간 = 시작 시간 + ((교시-1) × 수업 길이)" : info.value
                    };
                    return <SubInfo key={index} {...modifiedInfo} />;
                })}
            </div>
        </div>
    )
};