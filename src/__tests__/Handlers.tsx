import { render } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import React, { PropsWithChildren, ReactElement } from "react";
import type { prettyFormat } from "@testing-library/dom";

const queryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

export const handlers = [
  rest.get("*/users/*", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Leanne Graham",
      }),
    );
  }),

  rest.get("*/todos/*", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: "Do something",
      }),
    );
  }),
];

export const RenderWithClient = (ui: ReactElement) => {
  const testQueryClient = queryClient();
  const { rerender, ...result } = render(<QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>);
  return {
    ...result,
    rerender: (rerenderUi: ReactElement) =>
      rerender(<QueryClientProvider client={testQueryClient}>{rerenderUi}</QueryClientProvider>),
  };
};

export const CreateWrapper = <T extends PropsWithChildren>() => {
  const testQueryClient = queryClient();
  // eslint-disable-next-line react/display-name
  return ({ children }: T) => <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>;
};
