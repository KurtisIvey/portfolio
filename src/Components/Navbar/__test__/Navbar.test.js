import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "../Navbar.js";
import { store } from "../../../store/store";

// had to import MemoryRouter in order to not get error due to reactRouter

const MockNavbar = () => {
  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
};

test("navbar renders", () => {
  render(<MockNavbar />, { wrapper: MemoryRouter });
  const nameElement = screen.getByText(/k. ivey/i);
  expect(nameElement).toBeInTheDocument();
});

test("Home active tab works upon loading of page", () => {
  render(<MockNavbar />, { wrapper: MemoryRouter });
  const homeTab = screen.getByText(/Home/i);
  const aboutTab = screen.getByText(/about me/i);
  const projectsTab = screen.getByText(/projects/i);
  const contactTab = screen.getByText(/contact/i);

  // rgb(23,23,23) indicates active
  expect(homeTab.style.color).toBe("rgb(23, 23, 23)");
  expect(homeTab.style.color).not.toBe("white");
  expect(aboutTab.style.color).toBe("white");
  expect(projectsTab.style.color).toBe("white");
  expect(contactTab.style.color).toBe("white");
});

test("can change active tab to About me when clicked", () => {
  render(<MockNavbar />, { wrapper: MemoryRouter });
  const homeTab = screen.getByText(/Home/i);
  const aboutTab = screen.getByText(/about me/i);
  const projectsTab = screen.getByText(/projects/i);
  const contactTab = screen.getByText(/contact/i);

  fireEvent.click(aboutTab);
  expect(homeTab.style.color).toBe("white");
  expect(aboutTab.style.color).toBe("rgb(23, 23, 23)");
  expect(aboutTab.style.color).not.toBe("white");
  expect(projectsTab.style.color).toBe("white");
  expect(contactTab.style.color).toBe("white");
});

test("can change active tab to Projects when clicked", () => {
  render(<MockNavbar />, { wrapper: MemoryRouter });
  const homeTab = screen.getByText(/Home/i);
  const aboutTab = screen.getByText(/about me/i);
  const projectsTab = screen.getByText(/projects/i);
  const contactTab = screen.getByText(/contact/i);

  fireEvent.click(projectsTab);
  expect(homeTab.style.color).toBe("white");
  expect(aboutTab.style.color).toBe("white");
  expect(projectsTab.style.color).toBe("rgb(23, 23, 23)");
  expect(projectsTab.style.color).not.toBe("white");
  expect(contactTab.style.color).toBe("white");
});

test("can change active tab to Contact when clicked", () => {
  render(<MockNavbar />, { wrapper: MemoryRouter });
  const homeTab = screen.getByText(/Home/i);
  const aboutTab = screen.getByText(/about me/i);
  const projectsTab = screen.getByText(/projects/i);
  const contactTab = screen.getByText(/contact/i);

  fireEvent.click(contactTab);
  expect(homeTab.style.color).toBe("white");
  expect(aboutTab.style.color).toBe("white");
  expect(projectsTab.style.color).toBe("white");
  expect(contactTab.style.color).toBe("rgb(23, 23, 23)");
  expect(contactTab.style.color).not.toBe("white");
});
