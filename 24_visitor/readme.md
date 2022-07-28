## Motivation

- Need to define a new operation on an entire class hierarchy
  - E.g., make a document model printable to HTML/Markdown
- Do not want to keep modifying every class in the hierarchy
- Need access to the non-common aspects of classes in the hierarchy
- Create an external component to handler rendering
  - But avoid explicit type checks

## Formal definition

A component (visitor) that knows how to traverse a data structure composed of (possibly related) types.

## Summary

(classic)

- Propagate an accept(Visitor v) method throughout the entire hierarchy
- Create a visitor with visitFoo(Foo), visitBar(Bar), ...for each element in the hierarchy
- Each accpet() simply calls visitor.vistXxx(this)
