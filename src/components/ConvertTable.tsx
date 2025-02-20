import { converts, classTime } from "../types";
import { calculateTime } from "../utils/timeCalculator";

interface ConvertTableProps {
    classCount: number;
    convert: converts;
    startTime: string;
    timeInterval: number;
    setConverts: React.Dispatch<React.SetStateAction<converts[]>>;
}

export default function ConvertTable({ classCount, convert, startTime, timeInterval, setConverts }: ConvertTableProps) {
    // 교시 목록 생성
    let classTimes: classTime[] = [];
    for (let i = 1; i <= classCount; i++) {
        classTimes.push({
            id: i,
            selected: (convert.startClass && convert.endClass) ?
                (i >= convert.startClass && i <= convert.endClass) : false,
            class: i,
            time: calculateTime(i, startTime, timeInterval),
        });
    }

    const handleSelection = (time: classTime) => {
        setConverts((prevConverts) => {
            return prevConverts.map((prevConvert) => {
                if (prevConvert.id === convert.id) {
                    // 첫 선택인 경우
                    if (!prevConvert.startClass) {
                        return {
                            ...prevConvert,
                            startClass: time.class,
                            startTime: calculateTime(time.class, startTime, timeInterval),
                            isSelecting: true,
                        };
                    }
                    // 두 번째 선택인 경우
                    else if (prevConvert.isSelecting) {
                        const [start, end] = [
                            Math.min(prevConvert.startClass!, time.class),
                            Math.max(prevConvert.startClass!, time.class)
                        ];
                        return {
                            ...prevConvert,
                            startClass: start,
                            endClass: end,
                            startTime: calculateTime(start, startTime, timeInterval),
                            endTime: calculateTime(end, startTime, timeInterval),
                            isSelecting: false,
                        };
                    }
                    // 새로운 선택 시작
                    return {
                        ...prevConvert,
                        startClass: time.class,
                        endClass: undefined,
                        startTime: calculateTime(time.class, startTime, timeInterval),
                        endTime: undefined,
                        isSelecting: true,
                    };
                }
                return prevConvert;
            });
        });
    };

    return (
        <div className="w-full mt-4">
            <div className="flex flex-col w-full">
                {/* 결과 표시 영역 */}
                <div className="mb-4 text-lg font-medium text-center">
                    {convert.startClass && convert.endTime ? (
                        <span>
                            {convert.startClass}교시 ~ {convert.endClass}교시
                            ({convert.startTime} ~ {convert.endTime})
                        </span>
                    ) : (
                        <span className="text-gray-500">
                            {convert.isSelecting ? "종료 교시를 선택하세요" : "시작 교시를 선택하세요"}
                        </span>
                    )}
                </div>

                {/* 교시 선택 그리드 */}
                <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-2 p-4 border border-black rounded-[10px]">
                    {classTimes.map((time) => (
                        <div
                            key={time.id}
                            onClick={() => handleSelection(time)}
                            className={`
                                p-2 text-center rounded cursor-pointer transition-colors
                                ${time.selected ?
                                    'bg-blue-500 text-white' :
                                    'bg-gray-100 hover:bg-gray-200'
                                }
                            `}
                        >
                            {time.class}교시
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}