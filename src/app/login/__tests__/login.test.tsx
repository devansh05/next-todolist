import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../page.jsx";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Login", () => {
  it("renders login form", () => {
    render(<Login />);
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Login/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Signup/i })).toBeInTheDocument();
  });

  // it('navigates to signup form when sign up button is clicked', () => {
  //   const push = jest.fn();
  //   (useRouter as jest.Mock).mockReturnValue({ push });

  //   render(<Login />);
  //   fireEvent.click(screen.getByRole('button', { name: /sign up/i }));
  //   expect(push).toHaveBeenCalledWith('/signup');
  // });
});
