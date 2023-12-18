declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: number;
      DATABASE_URL: string;
      SECRET_KEY: string;
      SECRET_REFRESH_KEY: string
    }
  }
}
