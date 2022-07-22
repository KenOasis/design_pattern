## Motivation

- Iteration(traversal) is a core functionality of various data structures
- An iterator is a class that facilitates the traversal

  - Keeps a reference to the current element (current)
  - Knows how to move to a different element (next/pre/left/right...)
  - Knows when it's done and there are no elements to move to (break point)

- JavaScript supports this through:
  - Symbol.iterator member that returns
  - An iterator object with a function called next() that
  - Returns an object containing:
    - The value being iterated
    - The done flag indicating whether iteration is finished
  - An iterator object itself can also be made iterable

## Formal definition

An object that facilitates the traversal of a data structure

## Summary

- An iterator specified how you can traverse an object
- Stateful iterators cannot be recursive
- yield allows for much succinct iteratiro

## TO-learn

'[Symbol.iterator]
'\* method'
'yield'
