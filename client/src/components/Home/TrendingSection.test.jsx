import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import TrendingSection from "./TrendingSection";

describe("TrendingSection", () => {
  const mockData = [
    { id: 1, image: "https://example.com/movie1.jpg" },
    { id: 2, image: "https://example.com/movie2.jpg" },
  ];

  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("shows loading state initially", async () => {
    render(<TrendingSection />);

    // Loading text appears immediately
    expect(
      screen.getByText(/loading trending movies/i)
    ).toBeInTheDocument();

    // Wait until loading disappears (avoids act warning)
    await waitFor(() => {
      expect(
        screen.queryByText(/loading trending movies/i)
      ).not.toBeInTheDocument();
    });
  });

  test("renders trending movies after fetch", async () => {
    render(<TrendingSection />);

    // Images come from real TrendingCard component
    const images = await screen.findAllByRole("img");

    expect(images).toHaveLength(mockData.length);

    expect(images[0]).toHaveAttribute(
      "alt",
      "Trending item 1"
    );
    expect(images[0]).toHaveAttribute(
      "src",
      mockData[0].image
    );

    expect(images[1]).toHaveAttribute(
      "alt",
      "Trending item 2"
    );
    expect(images[1]).toHaveAttribute(
      "src",
      mockData[1].image
    );
  });

  test("handles fetch failure gracefully", async () => {
    global.fetch = vi.fn(() => Promise.reject("API error"));

    render(<TrendingSection />);

    await waitFor(() => {
      expect(
        screen.queryByText(/loading trending movies/i)
      ).not.toBeInTheDocument();
    });
  });
});
