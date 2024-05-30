import type { InferInput } from 'valibot';
import { object, string, parse } from 'valibot';

const envVariables = object({
  NODE_ENV: string(),
});

parse(envVariables, process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends InferInput<typeof envVariables> {}
  }
}

export {};
