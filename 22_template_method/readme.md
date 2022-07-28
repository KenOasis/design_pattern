## Motivation

- Algorithm can be decomposed into common parts + specifics
- Strategy Pattern does this through <composition>
  - High level algorithm uses an interface
  - Concrete implementations implement the interface
- Template Method does the same thing through <inheritance>
  - Overall algorithm makes use of empty('abstract') members
  - Inheritors override those members
  - Parent template method invoke

## Formal definition

Allows us to define the 'skeleton' of the algorithm, with concrete implementations defined in subclasses.

## Summary

- Define an algorithm at a high level
- Define constituent parts as empty methods/properties
- Inherit the algorithm class, providing necessary overrides
