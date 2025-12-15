import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import SignInForm from "./SignInForm";

/* -------------------- MOCKS -------------------- */

// mock navigate
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// mock alert
global.alert = vi.fn();

// mock fetch
global.fetch = vi.fn();

/* -------------------- SETUP -------------------- */

const setup = (props = {}) => {
  const defaultProps = {
    isVisible: true,
    onSwitch: vi.fn(),
    onClack: vi.fn(),
  };

  return render(
    <MemoryRouter>
      <SignInForm {...defaultProps} {...props} />
    </MemoryRouter>
  );
};

beforeEach(() => {
  vi.clearAllMocks();
  localStorage.clear();
});

/* -------------------- TESTS -------------------- */

describe("SignInForm – Updated Version", () => {
  it("renders email and password inputs", () => {
    setup();

    expect(
      screen.getByLabelText(/email address/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/password/i, { selector: "input" })
    ).toBeInTheDocument();
  });

  it("toggles password visibility", async () => {
    setup();

    const passwordInput = screen.getByLabelText(/password/i, {
      selector: "input",
    });

    const toggleBtn = screen.getByRole("button", {
      name: /show password/i,
    });

    expect(passwordInput).toHaveAttribute("type", "password");

    await userEvent.click(toggleBtn);
    expect(passwordInput).toHaveAttribute("type", "text");

    await userEvent.click(toggleBtn);
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("shows alert for invalid email and does not call fetch", async () => {
    setup();

    await userEvent.type(
      screen.getByLabelText(/email address/i),
      "invalid-email"
    );

    await userEvent.type(
      screen.getByLabelText(/password/i, { selector: "input" }),
      "123456"
    );

    await userEvent.click(
      screen.getByRole("button", { name: /sign in/i })
    );

    expect(alert).toHaveBeenCalledWith(
      "Please enter a valid email address."
    );

    expect(fetch).not.toHaveBeenCalled();
  });

  it("shows alert when login fails (no user found)", async () => {
    fetch.mockResolvedValueOnce({
      json: async () => [],
    });

    setup();

    await userEvent.type(
      screen.getByLabelText(/email address/i),
      "test@example.com"
    );

    await userEvent.type(
      screen.getByLabelText(/password/i, { selector: "input" }),
      "wrongpass"
    );

    await userEvent.click(
      screen.getByRole("button", { name: /sign in/i })
    );

    await waitFor(() => {
      expect(alert).toHaveBeenCalledWith(
        "Login failed. Check email/password."
      );
    });
  });

  it("logs in successfully, stores user, and navigates", async () => {
    const user = {
      id: 1,
      email: "test@example.com",
      fullName: "Test User",
    };

    fetch.mockResolvedValueOnce({
      json: async () => [user],
    });

    const onClack = vi.fn();
    setup({ onClack });

    await userEvent.type(
      screen.getByLabelText(/email address/i),
      "test@example.com"
    );

    await userEvent.type(
      screen.getByLabelText(/password/i, { selector: "input" }),
      "password123"
    );

    const button = screen.getByRole("button", {
      name: /sign in/i,
    });

    await userEvent.click(button);

    expect(onClack).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(localStorage.getItem("user")).toEqual(
        JSON.stringify(user)
      );
    });

    expect(alert).toHaveBeenCalledWith(
      "Welcome back, Test User!"
    );

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

    it("disables button while loading", async () => {
    let resolveFetch;

    fetch.mockImplementationOnce(
        () =>
        new Promise((resolve) => {
            resolveFetch = resolve;
        })
    );

    setup();

    await userEvent.type(
        screen.getByLabelText(/email address/i),
        "test@example.com"
    );

    await userEvent.type(
        screen.getByLabelText(/password/i, { selector: "input" }),
        "123456"
    );

    const button = screen.getByRole("button", {
        name: /sign in/i,
    });

    await userEvent.click(button);

    // ✅ loading state is NOW observable
    await waitFor(() => {
        expect(button).toBeDisabled();
    });

    // finish the request
    resolveFetch({
        json: async () => [],
    });

    // loading ends
    await waitFor(() => {
        expect(button).not.toBeDisabled();
    });
    });


  it("calls onSwitch when clicking Sign up", async () => {
    const onSwitch = vi.fn();
    setup({ onSwitch });

    await userEvent.click(
      screen.getByRole("button", {
        name: /switch to sign up form/i,
      })
    );

    expect(onSwitch).toHaveBeenCalledTimes(1);
  });
});
