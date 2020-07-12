# Components

Components are the building blocks that make up your pages and layouts. They're where you define HTML, CSS and (optionally) client-side JS behaviour. Build them quickly in Storybook then compose them into pages.

Tropical components are built with 2 opinionated conventions:

- Style with [Fela](https://fela.js.org/)
- Opt-in client-side JS

## Style with Fela

Tropical uses [Fela](https://fela.js.org/) for styling components. See the [Fela docs](https://fela.js.org/) for more info, but essentially you write CSS-in-JS that looks like inline styles, which Fela translates into optimised atomic classes:

```js
<button className={css({
  background: 'green',
  borderRadius: 5
})}>

// Renders <button class='a b'>
```

## Opt-in client-side JS

By default, Tropical components are **only prerendered** and have **no client-side JS behaviour**.

For example, this button will appear in the page's prerendered HTML, but by default nothing will happen when it's clicked.

```js
const HiButton = () => (
  <button onClick={() => alert('hi')}>
    Say Hi
  </button>
)
```

### Progressive enhancement

Your prerendered HTML can be [progressively enhanced](https://en.wikipedia.org/wiki/Progressive_enhancement) in the browser by any client-side JS added to `client.js`.

### React component hydration

A single React component can be used to both:

- prerender static HTML in a server environment, and
- attach client-side behaviour to that prerendered HTML in a browser environment via [hydration](https://reactjs.org/docs/react-dom.html#hydrate)

In many React-based frameworks, the top-level page component is hydrated along with every component that makes up that page, regardless of whether they all actually have client-side behaviour that requires hydrating.

By contrast, Tropical requires you to **opt specific components in** to hydration (you may of course choose to hydrate your top-level component).

Helpers are provided in `hydrationHelpers.js` simplify hydration (though you may hydrate manually in `client.js`).
