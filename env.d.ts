// env.d.ts

declare namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GATEWAY_URL: string;                     
      APISecret: string;     
      PINATA_JWT: string;
      APIKey: string;
    }
  }
  