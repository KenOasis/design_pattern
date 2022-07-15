## Motivation

- Just like the "adapter" in the real world
- Electrical devices in different are may have different electrical requirement (different voltage(120v, 220v....), different plug type (2 pins / 3 pins))
- Modified the device is not a good choice (You have to modified again when you move to another are...), so an adapter (interface) is a good choice: You only need to use different adapter in different are, but keep the device unchanged.

## Formal definition

- A construct which adapts an existing interface X to conform to the required interface Y.

## Summary

- Implementing an Adapter is easy
- Determine the API you have and the api you need
- Create a component which aggregates (has a reference to, ...) to adaptee
- Intermediate representations can pile up: use caching and other optimizations;
