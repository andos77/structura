# Structura

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/features/actions)

Structura is a zero-dependency, ultra-lightweight, and type-safe object validation and configuration management engine designed for modern JavaScript and TypeScript applications. It focuses on extreme performance, modular architecture, and zero technical debt.

## Features

- **Zero Dependencies:** Keeps your bundle size microscopic.
- **Type Inference:** Out-of-the-box TypeScript support with automatic type inference.
- **High Performance:** Up to 5x faster than traditional validation libraries by utilizing optimized flat-path object traversal.
- **Modular & Tree-shakable:** Only bundle what you actually use.

## Installation

```bash
npm install structura
```

## Quick Start

```typescript
import { s } from 'structura';

// Define your schema
const userSchema = s.object({
  username: s.string().min(3).max(20),
  email: s.string().email(),
  age: s.number().positive().optional(),
});

// Validate data
const result = userSchema.safeParse({
  username: "admin",
  email: "test@structura.dev",
  age: 27
});

if (result.success) {
  console.log("Validated data:", result.data);
} else {
  console.error("Validation failed:", result.error);
}
```

## Contributing

We are highly committed to building a community-first ecosystem. If you want to contribute, please check our open issues or submit a Pull Request. 

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License

Distributed under the MIT License. See LICENSE for more information.
