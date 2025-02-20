export const commonStyles = {
    // 색상
    colors: {
        primary: 'bg-blue-500',
        primaryHover: 'hover:bg-blue-600',
        secondary: 'bg-gray-500',
        secondaryHover: 'hover:bg-gray-600',
        danger: 'text-red-500',
        dangerHover: 'hover:text-red-700',
        textLight: 'text-white',
        border: 'border-black',
    },

    // 둥글기
    rounded: {
        default: 'rounded-[10px]',
        sm: 'rounded-md',
    },

    // 섹션 스타일
    section: {
        wrapper: 'w-full flex flex-col items-center mt-8',
        title: 'text-2xl font-bold mb-4',
        container: 'w-full border border-black rounded-[10px] p-4',
    },

    // 버튼 스타일
    button: {
        base: 'transition-colors',
        primary: 'bg-blue-500 hover:bg-blue-600 text-white',
        secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
        size: {
            sm: 'w-16 sm:w-20 h-8 sm:h-10 text-sm sm:text-base',
            md: 'px-4 py-2 text-base',
        }
    },

    // 입력 필드
    input: {
        base: 'p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
    }
};
