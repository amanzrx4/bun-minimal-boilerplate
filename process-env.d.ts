import type { InferInput } from 'valibot';
import { object, string } from 'valibot';

const envVariables = object({
  NODE_ENV: string(),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends InferInput<typeof envVariables> {}
  }
}

export {};
