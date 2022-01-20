import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders latitude and longitude input", () => {
  render(<App />);
  const latLabel = screen.getByLabelText(/Latitude/i);
  const lngLabel = screen.getByLabelText(/Longitude/i);
  expect(latLabel).toBeInTheDocument();
  expect(lngLabel).toBeInTheDocument();
});

test("can add a location", async () => {
  render(<App />);
  expect(screen.queryByText(/89/)).toBeNull();
  expect(screen.queryByText(/-179/)).toBeNull();

  await userEvent.type(screen.getByLabelText("Latitude"), "89");
  await userEvent.type(screen.getByLabelText("Longitude"), "-179");

  await userEvent.click(screen.getByText("Next"));
  // screen.debug();

  expect(screen.getByText(/89/)).toBeInTheDocument();
  expect(screen.getByText(/-179/)).toBeInTheDocument();
});
