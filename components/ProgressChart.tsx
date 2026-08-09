"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ProgressData {
  date: string;
  progress: number;
}

interface ProgressChartProps {
  data: ProgressData[];
}

export default function ProgressChart({
  data,
}: ProgressChartProps) {
  return (
    <div className="bg-white border rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-6">
        Learning Progress
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis dataKey="date" />

            <YAxis
              domain={[0, 100]}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="progress"
              stroke="currentColor"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}