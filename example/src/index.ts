export const test = () => 'hello'

export type Foo = {
  foo: string
  bar: string
}

export type Bar = { foo: string, bar: string }

const test2 = 'truthy' as string | undefined
if (test2 !== undefined) {
  test()
}

export function test3 (): string {
  const test3 = 'foo' as 'foo' | 'bar' | 'baz'
  switch (test3) {
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

const foo = undefined as Foo2 | undefined

foo?.bar()

export class Foo3 {
  constructor (private readonly foo: string) { }

  bar () {
    return this.foo
  }
}

export namespace Foo3 { }
