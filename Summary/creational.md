# Creational

## Builder

#### Keys: complicated construction, fluent interface

- Separate component for when object construction gets too complicated.
- Can create mutually cooperating sub-builders
- Often has a fluent interface (return this/self)

## Factory

#### Keys: Expressive, hierarchy factories

- Factory method more expressive than constructor
- A separate class with factory methods is a Factory
- Class hierarchies can have corresponding hierarchies (Abstract Factory / Inheritance)

## Prototype

#### Keys: Template of an object, deep copy, preserve type

- Creation of object from an existing object
- Requires either explicit deep copy
  or copy through serialization
- Additional work required to preserve type

## Singleton

#### Keys: Single instance for all, direct dependency

- When you need to ensure just a single instance exists
- Can return same object from constructor on every call
- Direct dependence on a Singleton is dangerous
