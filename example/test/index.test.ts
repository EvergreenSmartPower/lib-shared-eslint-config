export const foo = 'hello' as any
foo()
foo.bar()

type Bar = {
  fn: () => void
}

const bar: Bar | undefined = undefined as Bar | undefined

bar!.fn()

export function baz () {
  const foo: any = 'something'
  return foo
}
