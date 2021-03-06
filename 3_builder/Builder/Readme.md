## Motivation

### Some objects are simple and can be created in a single initializer call

### Other objects require a lot of ceremony to create

### Having an object with 10 initializer arguments is not productive

### Instead, opt for piecewise construction

# Builder provides an API for construction an object step-by-step

- (Formal definition): When piecewise object construction is complicated, provide an API for doing it succinctly.

## Summary

- A builder is a separate component for building an object
- Can either give builder an initilizer or return it via a static function
- To make builder fluent, return self (this in js, represent the builder itself)
- Different facets of an object can be built with different builders working in tandem via a base class
