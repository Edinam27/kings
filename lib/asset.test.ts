import { describe, it, expect } from "vitest";
import { asset, BASE_PATH } from "@/lib/asset";

describe("asset", () => {
  it("prefixes a root-relative path with the base path", () => {
    expect(asset("/assets/img/oil-rig.jpg")).toBe(`${BASE_PATH}/assets/img/oil-rig.jpg`);
  });

  it("normalizes a path missing the leading slash", () => {
    expect(asset("assets/img/oil-rig.jpg")).toBe(`${BASE_PATH}/assets/img/oil-rig.jpg`);
  });

  it("leaves absolute http(s) URLs unchanged", () => {
    expect(asset("https://cdn.example.com/a.jpg")).toBe("https://cdn.example.com/a.jpg");
    expect(asset("//cdn.example.com/a.jpg")).toBe("//cdn.example.com/a.jpg");
  });

  it("leaves data URIs unchanged", () => {
    expect(asset("data:image/png;base64,AAAA")).toBe("data:image/png;base64,AAAA");
  });
});
