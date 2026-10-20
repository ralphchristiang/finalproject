# Simple Code Guide

This guide explains the code already in this project. Read the files while following these notes so you can describe them in your own words.

## 1. How the project starts

1. `index.html` has an empty element with `id="app"` and loads `src/main.js`.
2. `main.js` imports Vue, the main component, and the router. Each Vue file contains its own styles.
3. `createApp(App)` creates the Vue application using `App.vue`.
4. `.use(router)` enables page navigation.
5. `.mount('#app')` displays the application inside the HTML element.

An `import` brings something from another file into the current file. Relative paths such as `../views/HomeView.vue` mean "go up one folder, then open this file."

## 2. App.vue is the page frame

`App.vue` contains the shared header, a `main` element, and the shared footer. `<RouterView />` is where Vue Router places the current view. This keeps the same header and footer on all five pages.

The `<script setup>` block contains imports and JavaScript used by a component. The `<template>` block describes what visitors see.

## 3. Components are reusable parts

- `SiteHeader.vue` displays the transparent CCS icon and navigation links. Its image uses `src="/ccs-icon.png"`. Vite serves files inside `public/` from the root URL, so this image does not need a JavaScript import. Its CSS does not add a white background or padding behind the icon.
- `SiteFooter.vue` displays the college name and official website link.
- `ProgramHeader.vue` displays a program's logo, name, description, and return link.

`defineProps(['code', 'title', 'description', 'logo'])` declares the values a program view can send to `ProgramHeader`. Each view supplies its own values. Props let the same component show different content without copying the header markup four times.

For example, `code="BSIT"` passes plain text. `:logo="bsitLogo"` passes the imported image value. The colon is shorthand for `v-bind`, which connects an HTML attribute or component prop to a JavaScript value.

## 4. Views are complete pages

`HomeView.vue` contains the three main sections. The other four view files contain the individual programs. Each has its own overview, learning topics, possible careers, reasons to choose it, and intended students.

The program views use ordinary HTML paragraphs, lists, and sections. There are no hidden sections, API requests, accounts, or databases to explain.

In the home view, `programs` and `partners` are arrays. Each item is an object containing related values such as a name and a logo.

- `v-for="program in programs"` repeats one card for every program.
- `:key="program.code"` gives Vue a unique identity for each repeated card.
- `{{ program.name }}` inserts the program's name into the page.
- `:src="program.logo"` uses its imported image as the image source.
- `v-if="partner.description"` displays a paragraph only if that description exists.

The values do not change while visitors browse, so plain `const` arrays are enough. `const` declares a variable that cannot be reassigned.

## 5. The routers folder controls navigation

`src/routers/index.js` imports Vue Router and the five views. `createRouter` creates the router. The `routes` array connects a URL path to a component:

| Path | View |
| --- | --- |
| `/` | `HomeView.vue` |
| `/programs/bsit` | `BSITView.vue` |
| `/programs/bscs` | `BSCSView.vue` |
| `/programs/bsdmia` | `BSDMIAView.vue` |
| `/programs/blis` | `BLISView.vue` |

`createWebHistory` uses normal URL paths. `import.meta.env.BASE_URL` is Vite's base URL setting; it is `/` in this project. The last route redirects unknown paths to Home.

`<RouterLink>` navigates within the application without doing a complete page reload. Its `to` value is the destination. `<a>` is used for the external official websites.

## 6. How section scrolling works

The main page has sections with `id="home"`, `id="programs"`, and `id="partnerships"`. A link to `/#programs` means "open the home route and scroll to the element with the id programs."

Vue Router calls `scrollBehavior(to, from, savedPosition)` after navigation:

- `to` describes the destination route.
- `from` describes the previous route; it is not needed by this function.
- `savedPosition` contains a previous scroll position when using browser history.
- If `savedPosition` exists, the function returns it.
- If `to.hash` exists, the function finds the shared header with `document.querySelector('.site-header')` and reads its `offsetHeight`.
- `header ? header.offsetHeight : 0` means use the header's height if it exists; otherwise use zero.
- `{ el: to.hash, top: headerHeight + 16, behavior: 'smooth' }` finds the section, leaves room for the sticky header plus 16 pixels, and scrolls smoothly.
- Otherwise, `{ top: 0 }` opens the view at the top.

An `if` checks a condition. A `return` gives the function's result and stops that function. The curly braces in `{ top: 0 }` create an object containing a property and its value.

`router.afterEach(function (to) { ... })` runs after navigation. It updates `document.title` using the route's `meta.title`, so each browser tab has the correct program name.

## 7. CSS and responsiveness

Every view and reusable component has a `<style scoped>` block at the bottom of its own `.vue` file. Its layout, colors, and media queries are kept beside its template. `scoped` means Vue limits those CSS rules to that component.

`App.vue` has a small unscoped `<style>` block for shared base rules: the page background, body font, heading font, links, images, and the common `.container` width. These are shared across pages. There is no separate central stylesheet.

Class selectors such as `.card` style elements with `class="card"`. To change a program page, open that program view and edit its own style block.

- `box-sizing: border-box` includes padding and borders in an element's set width.
- `.container` centers the content and limits its maximum width.
- Flexbox aligns the logo, navigation, and program headings.
- CSS Grid makes the program, partner, and detail columns.
- `minmax(0, 1fr)` allows equal-width grid columns to shrink within the available space.
- `object-fit: contain` keeps logos inside their image area without cropping them.
- `@media` rules change the layout at tablet and phone widths.
- The navigation wraps naturally, so it does not need a JavaScript menu button.
- `:hover` styles links when pointed at; `:focus-visible` shows keyboard focus.

Each program wrapper has a class such as `bsit-page`. It defines two CSS variables: `--program-color` and `--program-background`. `var(--program-color)` reads the value. This gives each page a consistent pastel theme without changing its content. Body paragraphs inherit regular Georgia text. Headings, the navigation and program-header contents, the university and college titles, and the buttons use bold Helvetica with Arial as a fallback.

The shared `.site-header` uses `position: sticky`, `top: 0`, and `z-index: 20`. These keep the navigation at the top of the page and above the scrolling content. The router measures its actual height so section headings stay visible on phones and desktops.

## 8. Setup and deployment files

- `package.json` lists dependencies and commands. Vue builds the interface; Vue Router handles navigation; Vite runs the development server and creates the production build.
- `package-lock.json` records exact dependency versions for installation.
- `vite.config.js` enables the Vue plugin so Vite can process `.vue` files.
- `jsconfig.json` describes the JavaScript project for your editor.
- `.gitignore` tells Git to skip installed dependencies, builds, and local environment files.
- `vercel.json` sends application page requests to `index.html` on Vercel.
- `public/_redirects` does the equivalent on Netlify.

The server must first serve `index.html` for a direct program URL. Then Vue Router reads the URL and displays the correct view. A server without an SPA fallback can return a 404 before Vue starts.

## 9. A simple presentation flow

1. Show the three home sections and explain the shared header and footer.
2. Click Read More and show the separate view file for that program.
3. Explain how its imported logo and wrapper class set its identity.
4. Open `routers/index.js` and point out the matching path and component.
5. Use Back to Programs and explain the `#programs` anchor.
6. Narrow the browser and explain the CSS media queries.
7. Explain only the work you actually completed. Group members must develop and understand their assigned pages.

Practice changing one description, one theme color, and one navigation destination. Test the result after each change instead of memorizing an explanation without checking the code.
