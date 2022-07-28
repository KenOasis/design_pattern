# Behavioral

## Chain of Responsibility

#### Keys: processing chain (link-list/event)

- Allows components to process information/events in a chain
- Each element in the chain can refers to next element; or
- Make a list and go through it

## Command

#### Keys: Encapsulate request, separating action

- Encapsulate a request into a separate object
- Good for audit, replay, undo/redo
- Part of CQS/CQRS

## Interpreter

#### Keys: Compliers work: Lexing, Parsing.

- Transform textual input into object-oriented structures
- Used by interpreters, compliers, static analysis tools, etc.
- Complier Theory is a separate branch of Computer Science

## Iterator

#### Keys: Iteration

- Provides an interface for accessing elements of an aggregate object
- Objects can be made iterable (for loop)

## Mediator

#### Keys: Decoupling object from communication (interaction)

- Provides mediation services between two objects without coupling two object
- E.g., message passing, chat room.

## Memento (Momento)

#### Keys: Snapshots of a system (at certain time)

- Yields tokens representing system states
- Tokens do not allow direct manipulation, but can be used in appropriate APIs.

## Observer

#### Keys: subscribe, un-subscribe, trigger events list

- Allows notifications of changes/happenings in a component

## State

#### Keys: States and transitions and affect each other

- We model systems by having one of a possible states and transitions between these states
- Such a system is called a state machine
- Special framework exists to orchestrate state machine

## Strategy & Template Method

#### Keys: Skeleton of Objects / Actions

- Both define a skeleton algorithm with details filled in by implementor
- Strategy uses ordinary composition,
  template method use inheritance

## Visitor

#### Keys: non-intrusive traverse for hierarchies of objects

- Allow non-intrusive addition of functionality to hierarchies
