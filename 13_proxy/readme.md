## Motivation

- Proxy provide same interface for different behavior
- Communication proxy (logging, virtual, guarding,...)

## Formal definition

- A class that functions as an interface to a particular resource. That resource may be remote, expensive to construct, or may require logging or some other added functionality.

## Summary

- A proxy has the same interface as the underlying object
- To create a proxy, simply replicate the existing interface to an object
- Add relevant functionality to the redefined member functions
- Different proxies(communication, logging, caching, etc.) have completely different behavior
