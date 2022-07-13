## Motivation

- (In real-world) Complicated objects(e.g., cars) aren't designed from scratch
  - They reiterate existing designs
- An existing (partially or fully constructed) design is a Prototype
- We make a copy(clone) the prototype and customize it
  - Requires 'deep copy' support
- We make the cloning convening(e.g., via a Factory)

## Formal Definition

- A partially or fully initialized object that you copy (clone) and make use of.

## Summary

- To implement a prototype, partially construct an object and store it somewhere
- Deep copy the prototype
- Customize the resulting instance
- A factory provide a convenient API for using prototype
