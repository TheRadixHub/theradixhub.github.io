# Writing Tests
- A Vitest, must have 2 files & a execution 'call', in the package.json.

### Example
- A simple test that verifies the output of a function that adds two numbers.

// sum.js
export function sum(a,b) {
    return a + b
}

// sum.*test*.js
import { expect, test } from 'vitest'
import { sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
})

// package.json
{
    "scripts": {
        "test": "vitest"
    }
}

## Run

- You can run 'npm run test', yarn test, or 'pnpm test', depending on your package manager.


# Configuring Vitest
- Since we are already using Vite, we only need to add 'test' property in our Vite config. And add a reference to Vitest types using a triple slash directive at the top of your config file.

// vite.config.ts

/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig ({
    test: {
        // your test here
    }
})

documentation: https://vitest.dev/guide/
