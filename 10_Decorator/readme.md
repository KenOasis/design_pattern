## Motivation

- Want to augment an object with additional functionality
- Do not want to rewrite or alter existing code (OCP)
- Want to keep new functionality separate (SRP)
- Need to be able to interact with existing structure
- Two options:
  - Inherit from required object (if possible, this is the best choice)
  - Build a Decorator, which simply references the decorated objects

## Formal Definition

- Facilitates the addition of behaviors to individual objects without inheriting from them.

## Summary

- A decorator keeps the reference to the decorated object(s)
- Adds utility fields and methods to augment the object's features
- May or may not forward calls to the underlying object
