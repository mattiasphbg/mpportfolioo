import "server-only";

import { createTRPCClient, loggerLink, TRPCClientError } from "@trpc/client";
import { callTRPCProcedure } from "@trpc/server";
import { observable } from "@trpc/server/observable";
import { cookies } from "next/headers";
import { cache } from "react";

import { appRouter, type AppRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";

const createContext = cache(() => {
  return createTRPCContext({
    headers: new Headers({
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      cookie: cookies().toString(),
      "x-trpc-source": "rsc",
    }),
  });
});

export const api = createTRPCClient<AppRouter>({
  links: [
    loggerLink({
      enabled: (op) =>
        process.env.NODE_ENV === "development" ||
        (op.direction === "down" && op.result instanceof Error),
    }),
    /**
     * Custom RSC link that lets us invoke procedures without using http requests. Since Server
     * Components always run on the server, we can just call the procedure as a function.
     */
    () =>
      ({ op }) =>
        observable((observer) => {
          createContext()
            .then((ctx) => {
              const abortController = new AbortController();
              return callTRPCProcedure({
                router: appRouter,
                path: op.path,
                // v11 expects lazy input materialization
                getRawInput: async () => op.input,
                ctx,
                type: op.type,
                signal: abortController.signal,
              });
            })
            .then((data) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              observer.next({ result: { data } });
              observer.complete();
            })
            .catch((cause: object | Error) => {
              observer.error(TRPCClientError.from(cause));
            });
        }),
  ],
});
