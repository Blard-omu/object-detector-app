import { type DetectedObject } from "@tensorflow-models/coco-ssd";

interface DetectionListProps {
  detections: DetectedObject[];
}

const DetectionList: React.FC<DetectionListProps> = ({ detections }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-md border border-purple-200">
      <h2 className="text-lg font-semibold text-[#5c4efc] mb-3">Detections</h2>
      {detections.length === 0 ? (
        <p className="text-sm text-gray-500">No objects detected</p>
      ) : (
        <ul className="divide-y divide-purple-100">
          {detections.map((det, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center py-2 text-sm"
            >
              <span className="font-medium text-[#5c4efc]/80">{det.class}</span>
              <span className="text-[#5c4efc]/80">{(det.score * 100).toFixed(1)}%</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DetectionList;
