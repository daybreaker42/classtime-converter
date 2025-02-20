import { useState } from 'react';
import { calculateClass } from '../utils/timeCalculator';
import { commonStyles as cs } from '../styles/common';

interface TimeToClassTableProps {
    startTime: string;
    timeInterval: number;
    id: number;
    onDelete: (id: number) => void;
}

export default function TimeToClassTable({ startTime, timeInterval, id, onDelete }: TimeToClassTableProps) {
    const [inputTime, setInputTime] = useState<string>("");
    const [result, setResult] = useState<number | null>(null);

    const handleTimeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputTime(value);

        // 정규식으로 HH:mm 형식 검증
        const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
        if (timeRegex.test(value)) {
            const classNum = calculateClass(value, startTime, timeInterval);
            setResult(classNum);
        } else {
            setResult(null);
        }
    };

    return (
        <div className="w-full mt-4">
            <div className={cs.section.container}>
                <div className="relative flex justify-between items-center mb-4">
                    <span className="text-lg font-medium">시간 → 교시 변환</span>
                    <button
                        onClick={() => onDelete(id)}
                        className={`${cs.colors.danger} ${cs.colors.dangerHover}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <input
                    type="text"
                    placeholder="시간 입력 (예: 09:30)"
                    value={inputTime}
                    onChange={handleTimeInput}
                    className={cs.input.base}
                />
                {result !== null && (
                    <div className="text-center text-lg mt-4">
                        {inputTime} = {result}교시
                    </div>
                )}
            </div>
        </div>
    );
}
