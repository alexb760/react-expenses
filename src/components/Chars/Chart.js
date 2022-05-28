import ChartBart from "./CharBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxValue = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBart
          key={dataPoint.lebel}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
