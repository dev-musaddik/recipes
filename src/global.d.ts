// src/global.d.ts

declare global {
    interface Window {
      dataLayer: any[]; // Specify the type of dataLayer (e.g., any[] or specific object structure)
    }
  }
  
  // If this file is the entry point, ensure it's treated as a module
  export {};
  