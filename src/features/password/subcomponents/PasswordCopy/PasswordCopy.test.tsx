// PasswordCopy.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PasswordCopy } from "./PasswordCopy";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useClipboard } from "@/hooks/useClipboard";

const PASSWORD = "Test123!";

vi.mock("@/hooks/useClipboard");

const mockedUseClipboard = vi.mocked(useClipboard);

const setupClipboard = (
  overrides?: Partial<ReturnType<typeof useClipboard>>,
) => {
  mockedUseClipboard.mockReturnValue({
    copied: false,
    copy: vi.fn(),
    ...overrides,
  });
};

describe("PasswordCopy component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders enabled button when password exists", () => {
    setupClipboard();

    render(<PasswordCopy password={PASSWORD} />);

    const button = screen.getByRole("button", {
      name: /copy password/i,
    });

    expect(button).not.toBeDisabled();
  });

  it("disables button when password is empty", () => {
    setupClipboard();

    render(<PasswordCopy password="" />);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("calls copy with password on click", async () => {
    const copyMock = vi.fn();
    setupClipboard({ copy: copyMock });

    render(<PasswordCopy password={PASSWORD} />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    expect(copyMock).toHaveBeenCalledWith(PASSWORD);
  });

  it("shows COPIED state when copied = true", () => {
    setupClipboard({ copied: true });

    render(<PasswordCopy password={PASSWORD} />);

    expect(
      screen.getByRole("button", { name: /password copied/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/^copied$/i)).toBeInTheDocument();

    expect(screen.getByRole("status")).toHaveTextContent(
      "Password copied to clipboard",
    );
  });
});
