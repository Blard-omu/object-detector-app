import { type DetectedObject } from '@tensorflow-models/coco-ssd';

function drawRect(
  detections: DetectedObject[],
  context: CanvasRenderingContext2D,
) {
  detections.forEach((predication) => {
    const [x, y, width, height] = predication.bbox;

    const score = (predication.score * 100).toFixed(2) + '%';
    const label = predication.class.toUpperCase() + ' - ' + score;

    // draw bounding box
    context.font = '16px Arial';
    context.strokeStyle = '#00FF00';
    context.lineWidth = 4;
    context.strokeRect(x, y, width, height);

    // draw label bg
    context.fillStyle = '#00FF00';
    const textW = context.measureText(label).width + 10;
    context.fillRect(x, y, textW, -16);

    // text on top
    context.fillStyle = '#000000';
    context.fillText(label, x, y);
  });
}

export { drawRect };
