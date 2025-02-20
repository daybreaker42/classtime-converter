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
            <div className="flex outline-none border border-black rounded-[10px] px-4 sm:px-[28px] py-1 sm:py-2 mb-1">
                <span className="text-base sm:text-lg md:text-xl">{value}</span>
            </div>
            {!isDisabled &&
                <div className="flex justify-center gap-1">
                    <button
                        className="w-16 sm:w-20 h-8 sm:h-10 text-sm sm:text-base bg-gray-500 text-white rounded-[10px] hover:bg-gray-600 transition-colors"
                        onClick={add10}
                        disabled={isDisabled}
                    >
                        +10분
                    </button>
                    <button
                        className="w-16 sm:w-20 h-8 sm:h-10 text-sm sm:text-base bg-gray-500 text-white rounded-[10px] hover:bg-gray-600 transition-colors"
                        onClick={sub10}
                        disabled={isDisabled}
                    >
                        -10분
                    </button>
                </div>
            }
        </div>
    );
}

/*

        < div className="flex flex-col" >
            <input
                className="outline-none border border-black rounded-[20px] w-30 h-[50px] px-6"
                type="tel"
                id="subinfo-input"
                name={title}
                value={value}
                onChange={(e) => setValue(e.target.value)} // onChange 이벤트 핸들러를 추가하여 값이 변경될 때 setValue를 호출합니다.
            />
            <div>
                <button onClick={add10} className="bg-gray-100 rounded-md">+10분</button>
                <button onClick={sub10} className="bg-gray-100 rounded-md">-10분</button>
            </div>
        </div>
*/