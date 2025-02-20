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
      id: Date.now(), // ID를 타임스탬프로 변경
      startClass: currConvert?.startClass,
      endClass: currConvert?.endClass,
      startTime: currConvert?.startTime,
      endTime: currConvert?.endTime,
      isSelecting: false,
    };
  }

  useEffect(() => {
    setConverts((prevConverts) => {
      return prevConverts.map((convert) => createConvert(convert));
    });
  }, [startTime, timeInterval]);

  // converts 객체를 JSON 문자열로 변환하여 로그에 출력
  console.log(`converts: ${JSON.stringify(converts)}`);
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
                value: "09:00",
              },
              {
                title: "교시 간격 (분)",
                value: "30",
              }
            ]} />
          </div>
          {/* 변환 칸 */}
          <div className="w-full flex flex-col items-center">
            {converts.map((convert, index) => (
              <ConvertTable key={index} classCount={classCount} convert={convert} startTime={startTime} timeInterVal={timeInterval} setConverts={setConverts} />
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
