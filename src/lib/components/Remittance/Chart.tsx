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

export type LineProps = React.ComponentProps<typeof Line>;
export type ChartProps = LineProps & { forwardedRef?: LineProps["ref"] };

// eslint-disable-next-line react/prop-types
const Chart: React.FC<ChartProps> = ({ forwardedRef, ...props }) => (
  <Line ref={forwardedRef} {...props} />
);

export default Chart;
