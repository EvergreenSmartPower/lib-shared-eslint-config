export const foo = 'hello' as any
foo()
foo.bar()

type Bar = {
  fn: () => void
}

const bar = {
  fn: () => undefined
} as Bar | undefined

bar!.fn()
