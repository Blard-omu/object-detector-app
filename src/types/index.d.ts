
export {};

  declare global {

    interface Detection {
        bbox: [number, number, number, number]; // [x, y, width, height]
        class: string; // e.g., "person", "book"
        score: number; // Confidence score (0 to 1)
      }
      
    interface Annotation {
        timestamp: string;
        label: string;
        score: number;
      }
  }