import { commonStyles as cs } from '../styles/common';

interface AddButtonProps {
    add: () => void;
}

export default function AddButton({ add }: AddButtonProps) {
    return (
        <button
            onClick={add}
            // mt-4를 my-4로 변경하여 위아래 여백을 동일하게 설정
            className={`my-4 ${cs.button.base} ${cs.button.primary} ${cs.button.size.md} ${cs.rounded.default}`}
        >
            + 추가하기
        </button>
    );
}