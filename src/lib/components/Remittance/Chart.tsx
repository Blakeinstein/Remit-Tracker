import {
  Chart as ChartJS,
  TimeSeriesScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import "chartjs-adapter-luxon";
import { Line } from "react-chartjs-2";

ChartJS.register(
  TimeSeriesScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

const Chart = Line;

export default Chart;
