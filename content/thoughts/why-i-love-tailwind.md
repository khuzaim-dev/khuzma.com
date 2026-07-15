---
date: "02/05/26"
---

# Why I Love Tailwind CSS

Tailwind CSS has completely changed the way I write styles. It shifts the paradigm from writing custom CSS files to composing utility classes directly in the markup.

## Utility-First Approach

The best part about Tailwind is the speed of iteration. You don't have to switch contexts between your HTML/JSX and CSS files.

| Feature | Description |
| ------- | ----------- |
| Speed | Write styles faster without leaving HTML |
| Consistency | Built-in design system constraints |
| Responsive | Easy mobile-first prefixes like `md:` and `lg:` |

### Example

Instead of this:

```css
.card {
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
```

You just write:

```html
<div class="p-4 rounded-lg shadow-md">
  Hello World
</div>
```

It's a game-changer for maintainability and scalability!
