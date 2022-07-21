## Motivation

Ordinary statement are perishable

- Cannot undo member assignment
- Cannot directly serialize a sequence of actions (calls)

Want an object that represents an operation

- Person should change its age to value 22
- car should do explode()

Use: GUI commands, multi-level undo/redo, macro recording and more!

## Formal definition

An object which represents an instruction to perform a particular action. Contains all the information necessary for the action to be taken.

## Summary

- Encapsulate all the details of an operation in a separate object
- Define instruction for applying the command (either in the command itself, or elsewhere)
- Optionally define instructions for undoing the command
- Can create composite commands (a.k.a. macros)
