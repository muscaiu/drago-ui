# Drago-UI v0.4.2
 
Demo: https://6647358832ebdbe9a0ba8e06-zrsegatxmt.chromatic.com

Repo: https://github.com/muscaiu/drago-ui


## How to Use:

1. Install the package from npm:
```bash
pnpm install drago-ui
```
2. Import components in your project:
```javascript
import { Button } from 'drago-ui';
import "drago-ui/dist/style.css";
```
```tsx
<Button variant="primary">Click me</Button>
```

## Development:

```bash
 pnpm run storybook
 http://localhost:6006/
```

### Dependencies:

- Vite
- Storybook
- Tailwind

### Features:

- Components and stories located in the /lib folder
- Integrated Tailwind CSS for rapid UI development.


### Published on npm as [drago-ui](https://www.npmjs.com/package/drago-ui)

To publish, run `pnpm publish` and increment the version in `package.json`.


Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests to the GitHub repository.

License:

This project is licensed under the MIT License - see the LICENSE file for details.