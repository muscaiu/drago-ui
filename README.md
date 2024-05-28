# Drago-UI v0.4.3
 
 A multipurpose Storybook UI Library
 <br>

Links: [Demo](https://6647358832ebdbe9a0ba8e06-zrsegatxmt.chromatic.com) | 
[Github](https://github.com/muscaiu/drago-ui) | [NPM](https://www.npmjs.com/package/drago-ui) | [Chromatic](https://www.chromatic.com/builds?appId=6647358832ebdbe9a0ba8e06)

![hero](/public/example.png)


## Development:

1. Clone Repository:
```bash
git clone https://github.com/muscaiu/drago-ui
```
2. Install dependencies:
```bash
pnpm i
```
3. Run Storybook locally:

```bash
 pnpm run storybook
```

<br><br><br>

## How to use the components in a separate project:

1. Install the package from npm:
```bash
pnpm install drago-ui
```
2. Import components in your project. Example:
```javascript
import { Button } from 'drago-ui';
import 'drago-ui/dist/style.css'; //in layout

<Button>Click Me</Button>
```

<br><br><br>

## Dependencies:

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