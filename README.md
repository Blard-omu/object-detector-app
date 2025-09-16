# Object Detector App

A modern, browser-based **real-time object detection** application that leverages your device’s webcam and TensorFlow\.js. It detects everyday objects (people, bottles, books, etc.) using the **COCO-SSD model** and overlays them with bounding boxes, confidence scores, and a detection list — all in a sleek **white & lilac-themed UI** styled with Tailwind CSS.

---

## Overview

The Object Detector App provides:

* **Real-time webcam detection** directly in the browser.
* **TensorFlow\.js + COCO-SSD** integration for fast object recognition.
* **Bounding boxes + confidence scores** drawn on top of the webcam feed.
* **Live detection list** showing unique detected objects.
* **Clean responsive UI** built with Next.js and Tailwind CSS.

This app runs **entirely client-side** — no external APIs, no backend, and no data storage.

---

## Tech Stack

* **Framework**: [Next.js](https://nextjs.org/) (React + TypeScript)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Object Detection**: [TensorFlow.js](https://www.tensorflow.org/js) + [COCO-SSD](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd)
* **Webcam Handling**: [react-webcam](https://www.npmjs.com/package/react-webcam)
* **Deployment**: [Vercel](https://vercel.com/)

---

## How It Works

1. Requests webcam permission via the browser.
2. Loads the **COCO-SSD model** with TensorFlow\.js.
3. Processes each video frame and runs object detection.
4. Draws bounding boxes + labels on an HTML `<canvas>`.
5. Updates a live **list of detected objects** below the video feed.

---

## Codebase Structure

```
/
├── src/
│   ├── components/        # UI components (Home, Camera, DetectionList)
│   ├── utils/             # Utility functions (drawRect for bounding boxes)
│   ├── styles/            # Global + Tailwind CSS styles
│   ├── app/               # Next.js App Router pages & layouts
│   └── types/             # TypeScript interfaces (Detection types)
├── public/                # Static assets (images, favicon, promo graphics)
├── tailwind.config.ts     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── README.md
```

---

## Getting Started

### Prerequisites

* **Node.js** v22.14.0+
* **npm** v10.9.2+
* A **webcam-enabled device**
* A **GitHub account** (for deployment on Vercel)

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/object-detection-app.git
cd object-detection-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

App will be live at **[http://localhost:3000](http://localhost:3000)**.

### 4. Build for Production

```bash
npm run build
npm start
```

---

## Security & Privacy

* **Permissions**: Requests **webcam access** with explicit user consent.
* **Privacy**: All processing happens **locally in the browser**. No video or detection data leaves your device.
* **Type Safety**: Built with **TypeScript** to reduce runtime errors.

---

## Testing

### Manual Testing

* Open in Chrome/Firefox.
* Grant webcam permissions.
* Confirm bounding boxes + detection list update in real time.

### Automated Testing (Optional)

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
npm test
```

---

## Deployment

1. Push your repo to GitHub.
2. Connect repo to **Vercel**.
3. Deploy with default Next.js settings (no env vars required).

 **Live URL**: [Object-Detector](https://eny-bot-fe.vercel.app)

---

## Author

Built by **Peter Omu** for the **Getlinked Frontend Developer Assessment**.

