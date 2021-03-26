export const test = () => 'hello'

export type Foo = {
  foo: string
  bar: string
}

export type Bar = { foo: string, bar: string }

function test2 (): string | undefined {
  return 'truthy'
}
if (test2() !== undefined) {
  test()
}

export function test3 (): string {
  function getMeAFooBarOrBaz (): 'foo' | 'bar' | 'baz' {
    return 'foo'
  }
  switch (getMeAFooBarOrBaz()) {
    case 'foo':
      const hello = 'foo'
      return hello
    default:
      return 'default'
  }
}

type Foo2 = {
  bar: () => void
}

function foo2 (): Foo2 | undefined {
  return undefined
}

foo2()?.bar()

export class Foo3 {
  constructor (private readonly foo: string) { }

  bar () {
    return this.foo
  }
}

export namespace Foo3 { }
