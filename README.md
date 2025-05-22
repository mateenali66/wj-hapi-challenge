# Intern Coding Challenge: Hapi Flight API

Welcome! In this challenge, you'll be working with a simple Node.js API built using the Hapi.js framework.

## 🧩 Challenge Objective

The `/getflights` endpoint is expected to behave as follows:

- Return **all flights** when no query parameters are provided
- Return **a specific flight** when a `flight` number is provided, e.g.:

```
/getflights?flight=1
```

However, the route is currently broken — it always returns all flights, even when a flight number is passed.

Your task is to:

1. Investigate the code and **identify why** the route isn’t working as expected
2. **Fix the issue** so that it correctly returns the requested flight
3. (Optional) Add or update a test case in `test/basic.test.js` to verify the fix

## ✅ Notes

- You can run the server using:
  ```bash
  npm run dev
  ```
- Use the Codespaces browser preview or curl to test your fix:
  ```
  /getflights
  /getflights?flight=1
  ```

Good luck!
