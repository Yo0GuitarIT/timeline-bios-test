// TimeAxis.js

function TimeAxis() {
  const secondsInTimeline = 16; // 時間軸總秒數

  const renderTimeTicks = () => {
    const ticks = [];
    for (let i = 0; i <= secondsInTimeline; i++) {
      let heightPercentage;
      if (i % 4 === 0) {
        heightPercentage = 50;
      } else {
        heightPercentage = 25;
      }

      ticks.push(
        <div
          key={i}
          style={{
            width: "1px",
            height: `${heightPercentage}%`,
            backgroundColor: "black",
          }}
        ></div>
      ); //time-tick
    }
    return ticks;
  };

  return (
    <div id="time-axis" className="h-1/2 flex flex-col">
      <div id="timeScale" className="h-full flex  justify-between">
        {renderTimeTicks()}
      </div>
    </div>
  );
}

export default TimeAxis;
