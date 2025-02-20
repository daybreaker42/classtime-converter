interface SubInfoProps {
    title: string;
    value: string;
    isDisabled?: boolean;
    add10?: () => void;
    sub10?: () => void;
}

export default function SubInfo({ title, value, isDisabled, add10, sub10 }: SubInfoProps) {
    return (
        <div className="flex flex-col">
            <span className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3">{title}</span>
            <div className="flex outline-none border border-black rounded-[10px] px-4 sm:px-[28px] py-1 sm:py-2 mb-1 max-w-[300px]">
                <span className="text-base sm:text-lg md:text-xl whitespace-pre-wrap">{value}</span>
            </div>
            {!isDisabled && (
                <div className="flex justify-center gap-1">
                    <button
                        onClick={add10}
                        className="w-16 sm:w-20 h-8 sm:h-10 text-sm sm:text-base bg-gray-500 text-white rounded-[10px] hover:bg-gray-600 transition-colors"
                    >
                        +10분
                    </button>
                    <button
                        onClick={sub10}
                        className="w-16 sm:w-20 h-8 sm:h-10 text-sm sm:text-base bg-gray-500 text-white rounded-[10px] hover:bg-gray-600 transition-colors"
                    >
                        -10분
                    </button>
                </div>
            )}
        </div>
    );
}