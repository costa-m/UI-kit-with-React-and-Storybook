# UI React Component Library

## Project Description
This is a still-in-development UI Kit based on free license [Figma designs]( 
https://www.figma.com/community/file/817436609226882468).
It is written with React, and the components are documented using [Storybook](https://storybook.js.org/).

## Development choices
- We use custom CSS instead of libraries such as Bootstrap.
- We use [CSS modules](https://github.com/css-modules/css-modules) to deal with the issue of global CSS classes, which is especially relevant for this project since a component library is meant to be used in other projects.
- [Icons](https://github.com/costa-m/UI-kit-with-React-and-Storybook/blob/main/src/components/Icon.jsx) are implemented as a React component wrapper around an SVG element.
- The project was created using Create React App, which accepts CSS modules [without further configuration](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/).
- For code style and linting, we use [Prettier](https://prettier.io/), and [quick-lint-js](https://quick-lint-js.com/).
 
## See some code
- The [Select component](https://github.com/costa-m/UI-kit-with-React-and-Storybook/blob/main/src/components/Select.jsx) is the component with the most complex logic/css so far.
- The [Island](https://github.com/costa-m/UI-kit-with-React-and-Storybook/blob/main/src/components/Island.jsx) is a component that uses other components.

## Installation
1. Git clone the project
2. Inside the project folder, run `npm install`
3. Run `npm run storybook`
4. The storybook will be available at http://localhost:6006

## Future development
- Continue implementing the components 
following the [Figma designs]( 
https://www.figma.com/community/file/817436609226882468).
- Experiment with a custom toolchain, instead of relying on Create React App default configurations.

