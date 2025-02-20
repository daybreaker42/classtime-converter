type classTime = {
    id: number;
    selected: boolean;
    class: number;
    time: string;
};

// 변환 정보를 담는 타입 수정
type converts = {
    id: number;
    startClass?: number;  // 시작 교시
    endClass?: number;    // 종료 교시
    startTime?: string;   // 시작 시각
    endTime?: string;     // 종료 시각
    isSelecting: boolean; // 선택 진행 중인지 여부
}

export type { classTime, converts };