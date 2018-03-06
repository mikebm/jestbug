import { TestClassDecorator, TestFunctionDecorator } from "./decorators";

@TestClassDecorator()
export class Component {
  /**
   * Does some stuff.
   * @param start
   * @param end
   */
  @TestFunctionDecorator("/test")
  public executeSomeLogic(start: number, end: number) {
    let log = "Started";
    this.log(log);
    if (start >= end) {
      return 0;
    }

    // Just loop from start to end. Test Comment.
    while (start < end) {
      this.log(start.toString());
      start++;
    }

    const multiplied = this.multiply(start, end);
    if (multiplied > 25) {
      (<any>console.error).blah();
    }

    this.log(multiplied.toString());
    log = "Ended";
    console.log(log);

    return multiplied;
  }

  /**
   * Generic Logging
   * @param text
   */
  private log(text: string) {
    console.log(text);
  }

  /**
   * Useless comment
   * @param value1
   * @param value2
   */
  private multiply(value1: number, value2: number) {
    const result = value1 * value2;
    console.log("Multiplied: " + result);
    return result;
  }

  /**
   * Who put this in here?
   * @param param1
   * @param param2
   */
  public unusedFunction(param1: number, param2: string) {
    let result;
    if (param1 === 5) {
      result = param1 * 2;
    } else {
      result = param1 * 10;
    }

    if (param2) {
      console.log(param2, param1);
    }
    return result;
  }
}
