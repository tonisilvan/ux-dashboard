import { render, screen } from "@testing-library/react";
import { Card } from "@/components/ui/Card";

describe("Card", () => {
  it("renders title and children", () => {
    render(<Card title="Hello"><div>world</div></Card>);
    expect(screen.getByRole("region", { name: "Hello" })).toBeInTheDocument();
    expect(screen.getByText("world")).toBeInTheDocument();
  });
});
