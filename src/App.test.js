import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders latitude and longitude input", () => {
  render(<App />);
  const latLabel = screen.getByLabelText(/Latitude/i);
  const lngLabel = screen.getByLabelText(/Longitude/i);
  expect(latLabel).toBeInTheDocument();
  expect(lngLabel).toBeInTheDocument();
});
