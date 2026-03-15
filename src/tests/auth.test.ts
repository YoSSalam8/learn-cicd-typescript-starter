import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns API key when valid header is provided", () => {
    const headers = new Headers({
      Authorization: "ApiKey test123",
    });

    const key = getAPIKey(headers);

    expect(key).toBe("test123");
  });

  test("throws error when authorization header missing", () => {
    const headers = new Headers();

    expect(() => getAPIKey(headers)).toThrow();
  });

  test("throws error when header format is invalid", () => {
    const headers = new Headers({
      Authorization: "Bearer test123",
    });

    expect(() => getAPIKey(headers)).toThrow();
  });
});
