import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { describe, it, expect, beforeEach } from "vitest";
import { AppRoutes } from "./App";
import authReducer from "./store/slices/authSlice";
import profileReducer from "./store/slices/profileSlice";
import subscriptionReducer from "./store/slices/subscriptionSlice";
import userContentReducer from "./store/slices/userContentSlice";

describe("App routing integration tests", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const createTestStore = () => {
    return configureStore({
      reducer: {
        auth: authReducer,
        profile: profileReducer,
        subscription: subscriptionReducer,
        userContent: userContentReducer,
      },
    });
  };

  const renderRoute = (route) => {
    const store = createTestStore();
    return render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <AppRoutes />
        </MemoryRouter>
      </Provider>
    );
  };

  it("renders Home page on / and shows Header", () => {
    renderRoute("/");

    // Header exists (header component renders a <header>)
    expect(
      document.querySelector("header")
    ).toBeInTheDocument();
  });

  it("renders Auth page on /auth and hides Header", () => {
    renderRoute("/auth");

    // Auth main content
    expect(
      screen.getByRole("main")
    ).toBeInTheDocument();

    // Header should be hidden
    expect(
      document.querySelector("header")
    ).not.toBeInTheDocument();
  });

  it("redirects unauthenticated user from /profile to /auth", () => {
    renderRoute("/profile");

    // Auth page rendered instead
    expect(
      screen.getByRole("main")
    ).toBeInTheDocument();
  });

  it("renders NotFound page on unknown route", () => {
    renderRoute("/this-route-does-not-exist");

    expect(
      screen.getByText(/oops! this screen is blank/i)
    ).toBeInTheDocument();
  });
});
