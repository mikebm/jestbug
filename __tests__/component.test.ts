jest.unmock("../component");
import { Component } from "../component";

describe("Component Tests", () => {
  let component: Component;
  let logSpy: jest.SpyInstance;

  beforeEach(() => {
    component = new Component();
    logSpy = jest.spyOn(console, "log");
  });

  it("should return 0", () => {
    const result = component.executeSomeLogic(123, 2);
    expect(result).toBe(0);
    expect(logSpy).toHaveBeenCalledWith("Started");
  });

  it("should return 5", () => {
    const result = component.executeSomeLogic(1, 5);
    expect(result).toBe(25);
  });

  it("should fail", () => {
    const result = component.executeSomeLogic(6, 10);
    expect(result).toBe(false);
  });
});
