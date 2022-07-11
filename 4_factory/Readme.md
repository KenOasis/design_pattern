## Motivation

- Object creation logic becomes too convolute
- Initializer is not descriptive
  - Name is always _init_
  - Cannot overload with same sets of arguments with different names
  - Cannot turn into 'optional parameter hell'
- Wholesale object creation(non-piecewise, unlike Builder) can be outsourced to
  - A separate method (Factory Method)
  - That may exist in a separate class (Factory)
  - Can create hierarchy of factories with Abstract Factory

## Formal definition

- A component responsible solely for the wholesale (not piecewise) creation of object

## Summary

- A factory method is a static method that creates objects
- A factory is any entity that can take care of object creation
- A factory can be external or resider inside the object as the inner class
- Hierarchies of factories can be used to create related objects
