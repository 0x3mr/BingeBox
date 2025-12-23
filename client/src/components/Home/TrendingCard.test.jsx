import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TrendingCard from "./TrendingCard";

describe("TrendingCard", () => {
  const mockProps = {
    rank: 1,
    image: "https://example.com/poster.jpg",
  };

  test("renders the rank number", () => {
    render(
      <MemoryRouter>
        <TrendingCard {...mockProps} />
      </MemoryRouter>
    );

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("renders the image with correct src and alt text", () => {
    render(
      <MemoryRouter>
        <TrendingCard {...mockProps} />
      </MemoryRouter>
    );

    const image = screen.getByRole("img", {
      name: "Trending item 1",
    });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProps.image);
  });
});
