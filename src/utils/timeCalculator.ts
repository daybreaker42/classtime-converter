// 교시를 해당하는 시각으로 변환하는 함수 (교시 -> 시간)
export function calculateTime(classNumber: number, startTime: string, timeInterval: number): string {
    // 시작 시간을 기준으로 계산
    const [startHour, startMinute] = startTime.split(':').map(Number);

    const baseTime = new Date(2025, 0, 1, startHour, startMinute);

    // (교시 - 1) * 시간 간격만큼 시간 추가
    const additionalMinutes = (classNumber - 1) * timeInterval;
    baseTime.setMinutes(baseTime.getMinutes() + additionalMinutes);

    // HH:mm 형식으로 반환
    return `${baseTime.getHours().toString().padStart(2, '0')}:${baseTime.getMinutes().toString().padStart(2, '0')}`;
}

// 교시를 계산하는 함수 (시간 -> 교시)
export function calculateClass(time: string, startTime: string, timeInterval: number): number {
    // 입력된 시간과 시작 시간을 Date 객체로 변환
    const [timeHour, timeMinute] = time.split(':').map(Number);
    const [startHour, startMinute] = startTime.split(':').map(Number);

    const timeDate = new Date(2025, 0, 1, timeHour, timeMinute);
    const startDate = new Date(2025, 0, 1, startHour, startMinute);

    // 분 단위로 차이 계산
    const diffMinutes = (timeDate.getTime() - startDate.getTime()) / (1000 * 60);

    // 교시 = (차이 분) / timeInterval + 1
    return Math.floor(diffMinutes / timeInterval) + 1;
}
