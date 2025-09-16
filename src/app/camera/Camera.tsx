"use client";

import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";
import { useRouter } from "next/navigation";
import { Home, LucideArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";

import {
  load as cocoSSDLoad,
  type ObjectDetection,
  type DetectedObject,
} from "@tensorflow-models/coco-ssd";

import { drawRect } from "../../utils/drawRectangle";
import DetectionList from "./DetectedList";

let detectInterval: NodeJS.Timeout;

const Camera = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  const [detections, setDetections] = useState<DetectedObject[]>([]);

  async function runCoco() {
    const net = await cocoSSDLoad();
    detectInterval = setInterval(() => {
      runObjectDetection(net);
    }, 200);
  }

  function showMyVideo() {
    if (webcamRef.current?.video?.readyState === 4) {
      const myVideoWidth = webcamRef.current.video.videoWidth;
      const myVideoHeight = webcamRef.current.video.videoHeight;
      webcamRef.current.video.width = myVideoWidth;
      webcamRef.current.video.height = myVideoHeight;
    }
  }

  async function runObjectDetection(net: ObjectDetection) {
    if (canvasRef.current && webcamRef.current?.video?.readyState === 4) {
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      const detectedObjects = await net.detect(
        webcamRef.current.video,
        undefined,
        0.5
      );

      setDetections(detectedObjects);

      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        drawRect(detectedObjects, context);
      }
    }
  }

  useEffect(() => {
    showMyVideo();
    runCoco();
    return () => clearInterval(detectInterval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white via-lilac-100 to-purple-200 p-6 space-y-6">
      <h1 className="text-2xl font-bold text-[#5c4efc]">
        Real-Time Object Detection
      </h1>

      <div className="relative rounded-2xl shadow-xl overflow-hidden border border-purple-300">
        <Webcam ref={webcamRef} className="rounded-2xl" muted />
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      <DetectionList detections={detections} />

      <div className="flex items-center gap-x-2">
        <Link
          href="/"
          className="flex items-center gap-x-2 bg-[#5c4efc] text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-all"
        >
          <LucideArrowLeft className="size-5 xl:size-6" />
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Camera;
