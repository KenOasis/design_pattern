## Motivation

- Bridge prevents a 'Cartesian product' complexity explosion
- Example:
  - base class ThreadScheduler
  - Can be preemptive or cooperative
  - Can run on Windows or Unix
  - End up with a 2X2 scenario: WindowsPTS, UnixPTS, WindowsCTS, UnixCTS
- Bridge pattern avoids the entity explosion

## Formal definition

- Bridge Pattern is a mechanism that decouples an interface (hierarchy) from an implementation (hierarchy).
- (For JS) JS has duck typing, so definitions of interfaces are not strictly necessary.

## Summary

- Decouple abstraction from implementation
- Both can exist as hierarchies
- A stronger form of encapsulation
