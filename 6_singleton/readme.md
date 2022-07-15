## Motivation

- For some components it only makes sense to have one in the system
  - Database repository
  - Object factory
- E.g., the constructor call is expensive
  - We want initialization to only happen once
  - We provide everyone with the same instance
- Want to prevent anyone creating additional copies.

## Formal definition

- A component which is instantiated only once.

# Summary

- A constructor can choose what to return; we can keep returning the same instance
- Monostate: many instances, shared data
- Directly depending on the Singleton is a bad idea; introduce a dependency instead
