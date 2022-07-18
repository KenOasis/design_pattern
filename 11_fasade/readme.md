## Motivation

- Balancing complexity and presentation/usability
- Example: Typical house(home)
  - Many subsystems (electrical, sanitation)
  - Complex internal structure
  - End user is not exposed to internals
- Same with software
  - Many systems working to provide flexibility, but...
  - API consumers want it to 'just work'

## Formal definition

- Provides a simple, easy to understand/user interface over a large and sophisticated body of code

## Summary

- Build a Facade to provide a simplified API over a set of classes
- May wish to (optionally) expose internals through the facade
- May allow users to 'escalate' to use more complex APIs if the need to
