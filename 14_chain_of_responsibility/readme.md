## Motivation

- Unethical behavior by an employee; who takes the blame?
  - Employee
  - Manager
  - CEO
- You click a graphical element on a form
  - Button handles it, stops further processing
  - Underlying group box
  - Underlying window
- CCG computer game
  - Creature has attack and defense value
  - Those can be boost by other cards

## Formal definition

- A chain of components who all get a chance to process a command or a query, optionally having default processing implementation and an ability to terminate the process chain

## Summary

- Chain of Responsibility can be implemented as a chain of references or a centralized construct (event broker)
- Enlist objects in the chain, possibly controlling their order/priority
- In a linked-list implementation, one member can impede further processing
- Support removal of objects from the chain (lifetime control)
