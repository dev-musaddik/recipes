// src/global.d.ts

declare global {
    interface Window {
      dataLayer: any[]; // Specify the type of dataLayer (e.g., any[] or specific object structure)
      $crisp: any[];
      CRISP_WEBSITE_ID: string;
    }
  }
  
  // If this file is the entry point, ensure it's treated as a module
  export {};
  