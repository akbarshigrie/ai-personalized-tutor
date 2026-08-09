interface WeakAreaCardProps {
  area: string;
  score?: number;
}

export default function WeakAreaCard({
  area,
  score,
}: WeakAreaCardProps) {
  return (
    <div className="border rounded-xl p-4 bg-white">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold">
            {area}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            This topic needs more practice.
          </p>
        </div>

        <div className="text-right">
          <span className="text-xs text-gray-500">
            Score
          </span>

          <p className="font-bold text-lg">
            {score !== undefined
              ? `${score}%`
              : "Needs Improvement"}
          </p>
        </div>
      </div>
    </div>
  );
}