export const add = a => b => a + b

export const subtract = a => b => add(a)(-b)
