## Motivation

- We need to be informed when certain things happen
  - Object's property changes
  - Object does something
  - Some external event occurs
- We want to listen to events and be notified when they occur
  - Notifications should include useful data
- Want to un-subscribe from events if we're no longer interested

## Formal Definition

An observer is an object wishes to be informed about events happening in the system. The entity generating the events is an observable

## Summary

- Observer is an intrusive approach: an observable must provide an event to subscribe to
- Subscription and un-subscription handled with addition/removal items in a list
- Property notifications are easy; dependent property notifications are tricky
