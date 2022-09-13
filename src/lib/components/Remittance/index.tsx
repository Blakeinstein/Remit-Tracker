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
import "chartjs-adapter-luxon";
import classNames from "classnames";
import type React from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import uniqolor from "uniqolor";

import type {
  RemitSource,
  FilteredSources,
  Accessors,
  Provider,
} from "lib/types/Remit";
import { formatProvider, formatAccessor } from "lib/utils/Remit";

ChartJS.register(
  TimeSeriesScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TimeScales = ["day", "hour", "week", "month", "quarter", "year"] as const;

type TimeScale = typeof TimeScales[number];

const Remittance: React.FC<{ data: RemitSource[] }> = ({ data }) => {
  const [timeUnit, setTimeUnit] = useState<TimeScale>("day");

  const [accessor, setAccessor] = useState<Accessors>("remit");

  const sources = data.reduce((acc, curr) => {
    if (curr.name) {
      if (acc[curr.name]) {
        acc[curr.name].push(curr);
      } else {
        acc[curr.name] = [curr];
      }
    }
    return acc;
  }, {} as FilteredSources);

  (Object.keys(sources) as Provider[]).forEach((source) => {
    sources[source] = sources[source].sort((a, b) => b.timestamp - a.timestamp);
  });

  const lineData = {
    datasets: Object.entries(sources).map(([name, remit]) => ({
      label: formatProvider(name as Provider),
      data: remit.map((r) => ({
        x: new Date(r.timestamp * 1000),
        y: r.data[accessor],
      })),
      borderColor: uniqolor(btoa(formatProvider(name as Provider))).color,
    })),
  };

  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  const options: React.ComponentProps<typeof Line>["options"] = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
        type: "timeseries",
        time: {
          round: timeUnit,
          unit: timeUnit,
        },
        ticks: {
          source: "data",
        },
      },
      y: {
        title: {
          display: true,
          text: formatAccessor(accessor),
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Remittance history",
      },
    },
  };

  const id = "remittance";

  return (
    <div className="flex min-h-[75vh] w-screen flex-col items-center justify-center gap-4">
      <div className="stats stats-vertical bg-primary text-primary-content sm:stats-horizontal">
        {Object.entries(sources).map(([name, remit]) => (
          <div className="stat sm:w-52" key={name}>
            <div className="stat-title capitalize">
              {formatProvider(name as Provider)}
            </div>
            <div className="stat-value text-center">
              {formatter.format(remit[0].data[accessor])}
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-72 min-w-[80vw] flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div className="form-control">
            <label
              htmlFor={`${id}-accessorSelector`}
              className="input-group input-group-sm"
            >
              <span>Time Scale</span>
              <select
                id={`${id}-accessorSelector`}
                className="select select-bordered select-primary select-sm text-sm"
                value={timeUnit}
                onChange={(e) => setTimeUnit(e.target.value as TimeScale)}
              >
                {TimeScales.map((scale) => (
                  <option value={scale} key={scale}>
                    {scale}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className={classNames("btn btn-sm", {
                "btn-active": accessor === "remit",
              })}
              onClick={() => setAccessor("remit")}
            >
              {formatAccessor("remit")}
            </button>
            <button
              type="button"
              className={classNames("btn btn-sm", {
                "btn-active": accessor === "forex",
              })}
              onClick={() => setAccessor("forex")}
            >
              {formatAccessor("forex")}
            </button>
          </div>
        </div>
        <Line data={lineData} options={options} />
      </div>
    </div>
  );
};

export default Remittance;
