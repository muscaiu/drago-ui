# Drago-UI v0.4.9
 
 A multipurpose Storybook UI Library
 <br>

Links: [Demo](https://6647358832ebdbe9a0ba8e06-zrsegatxmt.chromatic.com) | 
[Github](https://github.com/muscaiu/drago-ui) | [NPM](https://www.npmjs.com/package/drago-ui) | [Chromatic](https://www.chromatic.com/builds?appId=6647358832ebdbe9a0ba8e06)

![hero](/public/example.png)

<br><br>

## Development:

Clone Repository:
```bash
git clone https://github.com/muscaiu/drago-ui
```
Install dependencies:
```bash
pnpm i
```
Run Storybook locally:
```bash
 pnpm run storybook
```
Publish new version:
- increment version in `package.json` and `Readme.md`
- merge changes
```bash
pnpm publish
```

<br><br>

## Using the components:

Install the package from npm:
```bash
pnpm install drago-ui
```
Import components in your project. Example:
```javascript
import { Button } from 'drago-ui';
import 'drago-ui/dist/style.css'; //in layout, before your styles

<Button>Click Me</Button>
```

<br><br>

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