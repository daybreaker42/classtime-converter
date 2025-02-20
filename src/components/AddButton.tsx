export default function AddButton({ add }: { add: () => void }) {
    return (
        <button
            onClick={add}
            className="bg-blue-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 mt-4 sm:mt-[30px] rounded-md text-sm sm:text-base hover:bg-blue-600 transition-colors"
        >
            + 변환 추가
        </button>
    );
}