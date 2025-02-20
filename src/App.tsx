import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Title from './components/Title'
import { classTime, converts } from './types';
import Info from './components/Info';
import AddButton from './components/AddButton';
import ConvertTable from './components/ConvertTable';


export default function App() {
  const classCount = 23;
  const [startTime, setStartTime] = useState('09:00');
  const [timeInterval, setTimeInterval] = useState(30);
  const [converts, setConverts] = useState<converts[]>(() => [createConvert()]);

  /**
   * Create a new converts object
   */
  function createConvert(currConvert?: converts): converts {
    return {
      // 기존 id가 있다면 유지하고, 없다면 새로운 id 생성
      id: currConvert?.id || Date.now(),
      startClass: undefined,
      endClass: undefined,
      startTime: undefined,
      endTime: undefined,
      isSelecting: false,
    };
  }

  useEffect(() => {
    setConverts((prevConverts) => {
      return prevConverts.map((prevConvert) => ({
        ...createConvert(),
        id: prevConvert.id // 기존 id 유지
      }));
    });
  }, [startTime, timeInterval]);

  const handleStartTimeAdd10 = () => {
    const [hours, minutes] = startTime.split(':').map(Number);
    const newMinutes = minutes + 10;
    const newHours = hours + Math.floor(newMinutes / 60);
    if (newHours < 24) {
      setStartTime(`${newHours.toString().padStart(2, '0')}:${(newMinutes % 60).toString().padStart(2, '0')}`);
    }
  };

  const handleStartTimeSub10 = () => {
    const [hours, minutes] = startTime.split(':').map(Number);
    let newMinutes = minutes - 10;
    let newHours = hours;
    if (newMinutes < 0) {
      newHours -= 1;
      newMinutes += 60;
    }
    if (newHours >= 0) {
      setStartTime(`${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`);
    }
  };

  const handleIntervalAdd10 = () => {
    if (timeInterval + 10 <= 120) {
      setTimeInterval(timeInterval + 10);
    }
  };

  const handleIntervalSub10 = () => {
    if (timeInterval - 10 >= 10) {
      setTimeInterval(timeInterval - 10);
    }
  };

  // converts 객체를 JSON 문자열로 변환하여 로그에 출력
  console.log(`converts: ${JSON.stringify(converts)}`);

  console.log(`startTime: ${startTime}, timeInterval: ${timeInterval}`);

  return (
    <>
      <div className='w-full bg-white'>
        <main className='w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-[70px] py-[30px] sm:py-[60px] md:py-[90px]'>
          <Title />
          <div className="w-full flex justify-between mb-[30px]">
            {/* info */}
            <Info title={"변환"} subInfo={[
              {
                title: "변환 공식",
                value: "교시 = (시간 - 9) * 2 + 1",
                isDisabled: true,
              }
            ]} />
            <Info title={"기본 설정"} subInfo={[
              {
                title: "1교시 시작 시각",
                value: startTime,
                // onChange: handleStartTimeChange,
                add10: handleStartTimeAdd10,
                sub10: handleStartTimeSub10,
                isDisabled: false,
              },
              {
                title: "교시 간격 (분)",
                value: timeInterval.toString(),
                // onChange: handleIntervalChange,
                add10: handleIntervalAdd10,
                sub10: handleIntervalSub10,
                isDisabled: false,
              }
            ]} />
          </div>
          {/* 변환 칸 */}
          <div className="w-full flex flex-col items-center">
            {converts.map((convert, index) => (
              <ConvertTable key={index} classCount={classCount} convert={convert} startTime={startTime} timeInterval={timeInterval} setConverts={setConverts} />
            ))}
          </div>
          <AddButton add={() => {
            setConverts((prevConverts) => {
              return [...prevConverts, createConvert()];
            });
          }
          } />
        </main>
      </div>
      <Footer />
    </>
  )
}
