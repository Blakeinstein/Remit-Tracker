import classNames from "classnames";
import dynamic from "next/dynamic";
import type React from "react";
import { useState } from "react";
import type { Line } from "react-chartjs-2";
import uniqolor from "uniqolor";

import type { FilteredSources, Accessors, Provider } from "lib/types/Remit";
import { formatProvider, formatAccessor } from "lib/utils/Remit";

const TimeScales = ["hour", "day", "week", "month"] as const;

type TimeScale = typeof TimeScales[number];

const ChartComponent = dynamic(() => import("./Chart"), { ssr: false });

const Remittance: React.FC<{ data: FilteredSources }> = ({ data }) => {
  const [timeUnit, setTimeUnit] = useState<TimeScale>("hour");

  const [accessor, setAccessor] = useState<Accessors>("remit");

  const lineData = {
    datasets: Object.entries(data)
      .filter(([, remit]) => remit[0]?.data[accessor])
      .map(([name, remit]) => ({
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
    maintainAspectRatio: false,
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
      zoom: {
        pan: {
          enabled: true,
        },
        limits: {
          // axis limits
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },
    },
  };

  const id = "remittance";

  return (
    <div className="flex min-h-[75vh] w-screen flex-col items-center justify-center gap-8">
      <div className="stats stats-vertical bg-primary text-primary-content sm:stats-horizontal">
        {Object.entries(data).map(([name, remit]) => {
          if (remit[0]?.data[accessor]) {
            return (
              <div className="stat sm:w-52" key={name}>
                <div className="stat-title capitalize">
                  {formatProvider(name as Provider)}
                </div>
                <div className="stat-value text-center">
                  {formatter.format(remit[0].data[accessor] as number)}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="flex w-72 min-w-[80vw] flex-col items-center gap-6">
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
        <p className="text-secondary">Data is retained for 4 months.</p>
        <div className="min-h-[400px] w-[600px] min-w-[95vw]">
          <ChartComponent data={lineData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Remittance;
