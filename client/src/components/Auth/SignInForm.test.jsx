import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import SignInForm from "./SignInForm";

const setup = (props = {}) => {
  const defaultProps = {
    isVisible: true,
    onSwitch: vi.fn(),
    onClack: vi.fn(),
  };

  return render(<SignInForm {...defaultProps} {...props} />);
};

describe("SignInForm – Form Validation", () => {
  it("renders email and password inputs", () => {
    setup();

    expect(
      screen.getByLabelText(/email address/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/password/i, { selector: "input" })
    ).toBeInTheDocument();
  });

  it("calls onClack even when fields are empty (no form validation)", async () => {
    const onClack = vi.fn();
    setup({ onClack });

    await userEvent.click(
      screen.getByRole("button", { name: /sign in/i })
    );

    expect(onClack).toHaveBeenCalledTimes(1);
  });

  it("email and password inputs are required", () => {
    setup();

    const email = screen.getByLabelText(/email address/i);
    const password = screen.getByLabelText(/password/i, {
      selector: "input",
    });

    expect(email).toBeRequired();
    expect(password).toBeRequired();
  });

  it("accepts valid email input", async () => {
    setup();

    const email = screen.getByLabelText(/email address/i);
    await userEvent.type(email, "test@example.com");

    expect(email).toHaveValue("test@example.com");
  });

  it("toggles password visibility", async () => {
    setup();

    const password = screen.getByLabelText(/password/i, {
      selector: "input",
    });

    const toggleBtn = screen.getByRole("button", {
      name: /show password/i,
    });

    expect(password).toHaveAttribute("type", "password");

    await userEvent.click(toggleBtn);
    expect(password).toHaveAttribute("type", "text");

    await userEvent.click(toggleBtn);
    expect(password).toHaveAttribute("type", "password");
  });

  it("calls onClack on valid submit", async () => {
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

    await userEvent.click(
      screen.getByRole("button", { name: /sign in/i })
    );

    expect(onClack).toHaveBeenCalledTimes(1);
  });

  it("switches to sign up when clicking Sign up", async () => {
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
