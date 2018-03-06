export function TestClassDecorator(): ClassDecorator {
  return (target: Object) => {};
}

export function TestFunctionDecorator(...routes: string[]): MethodDecorator {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {};
}
