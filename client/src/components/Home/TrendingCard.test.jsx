import { render, screen } from "@testing-library/react";
import TrendingCard from "./TrendingCard";

describe("TrendingCard", () => {
  const mockProps = {
    rank: 1,
    image: "https://example.com/poster.jpg",
  };

  test("renders the rank number", () => {
    render(<TrendingCard {...mockProps} />);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("renders the image with correct src and alt text", () => {
    render(<TrendingCard {...mockProps} />);

    const image = screen.getByRole("img", {
      name: "Trending item 1",
    });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProps.image);
  });
});
