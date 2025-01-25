# Intermittent Next.js Navigation Failure

This repository demonstrates a seemingly intermittent issue with Next.js navigation where a callback function after `router.push` doesn't always execute.  The problem is difficult to reliably reproduce, but this example highlights the conditions under which it might occur. 

## Issue Description

The `console.log` statement within the `handleClick` function isn't always triggered after successful route change using `router.push`.  This makes it challenging to guarantee the navigation completed as expected.

## Setup

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.

## Steps to (Potentially) Reproduce

While not consistently reproducible, rapidly clicking the button might increase the chances of observing the issue.

## Proposed Solution (See bugSolution.js)

This uses an event listener to detect successful navigation via `routeChangeComplete` event.  This provides more reliable feedback on navigation completion.