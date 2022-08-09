import React from "react";
import { act, render, renderHook } from "@testing-library/react";
import { describe, test } from "vitest";
import { Footer } from "~/client/components/Footer";
import useCounter from "~/hooks/useCounter";
import { Homepage } from "../index.page";
import { RenderWithClient } from "~/__tests__/Handlers";

describe("demo", () => {
  test("should be testable", ({ expect }) => {
    expect(1 + 1).toBe(2);
  });

  test("should be able to test component", ({ expect }) => {
    const { getByText } = render(<Footer />);
    expect(getByText("Repo")).toBeInTheDocument();
  });

  test("if todos is fetch, data will be show", async ({ expect }) => {
    const result = RenderWithClient(<Homepage />);
    expect(await result.findByText(/Do Something/i)).toBeInTheDocument();
  });

  test("should be able to test hook", ({ expect }) => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
});
