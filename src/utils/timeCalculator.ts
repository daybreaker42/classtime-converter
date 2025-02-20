export function calculateTime(classNumber: number, startTime: string, timeInterval: number): string {
    // classNumber를 시간으로 변환: 역공식 적용
    // 교시 = (시간 - 9) * 2 + 1 
    // => 시간 = (교시 - 1) / 2 + 9
    const hours = Math.floor((classNumber - 1) / 2) + 9;
    const minutes = ((classNumber - 1) % 2) * 30;

    // 시간 문자열 생성 (HH:mm 형식)
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

// 교시를 계산하는 함수 (시간 -> 교시)
export function calculateClass(time: string, startTime: string, timeInterval: number): number {
    const [hours, minutes] = time.split(':').map(Number);
    // 교시 = (시간 - 9) * 2 + 1
    return (hours - 9) * 2 + (minutes >= 30 ? 2 : 1);
}
