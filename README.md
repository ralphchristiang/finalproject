# Simple CCS Website — Refined

A complete Vue project based on the simple CCS backup and the new assignment notes. The source was rebuilt with basic components, ordinary arrays, clear comments, and simple CSS.

## Run it

Use Node.js 22.18 or newer within version 22, or Node.js 24.12 or newer. Extract the ZIP and open a terminal inside **GatuteoMidtermSimple**, where `package.json` is located.

```bash
npm install
npm run dev
```

Open the local address shown in the terminal. `npm install` installs dependencies; `npm run dev` starts the website. This is a complete project, so no files from the previous version are needed.

```bash
npm run build
npm run preview
```

The first command creates the production files in `dist`. The second serves that build locally.

## What changed

- The main page has a hero, four brief program cards, and partnerships and memberships.
- The hero has an Explore Our Programs button.
- Each Read More link opens its own program view through Vue Router.
- Each program page has an overview, learning topics, career areas, reasons to choose it, intended students, and learning opportunities.
- The website uses pastel purple, green, and gray. Headings, header content, the university and college titles, and buttons use bold Helvetica. Body paragraphs use regular Georgia. Each program keeps its own subtle theme.
- Each Vue component and view has its own CSS block. App.vue contains only the shared base styles.
- The navigation uses the transparent icon from public/ccs-icon.png.
- The shared navigation stays at the top while scrolling. Section links leave space below it.
- The shared navigation returns to the main page and smoothly scrolls to its sections.
- Each program page includes Back to Programs links.
- The Faculty and Staff section, its records, and its photographs are excluded from this project.
- Layouts adapt to desktop, tablet, and phone widths.

## Folder structure

```text
GatuteoMidtermSimple/
  public/
    ccs-icon.png
    _redirects
  src/
    assets/
      images/              PNG and JPEG logos
    components/
      SiteHeader.vue       Shared navigation and its own styles
      SiteFooter.vue       Shared footer and its own styles
      ProgramHeader.vue    Shared program title, logo, and styles
    routers/
      index.js             Page routes and scroll behavior
    views/
      HomeView.vue
      BSITView.vue
      BSCSView.vue
      BSDMIAView.vue
      BLISView.vue
    App.vue                Main frame and shared base styles
    main.js
  index.html
  package.json
  package-lock.json
  vite.config.js
  jsconfig.json
  vercel.json
  CONTENT_SOURCES.md
  CODE_GUIDE.md
  README.md
```

## Important program-name difference

The supplied notes expand BSDMIA as **Data Mining and Information Analytics**. The official CPU CCS website instead identifies BSDMIA as **Digital Media and Interactive Arts**. This project uses the official college name and its associated MIDAS logo. Confirm the wording with your instructor before changing it; a data-mining program would need different verified content and assets.

The four program images are their associated student organization logos: ITSO, CSS, MIDAS, and LISSO. They are identified that way in image descriptions. Source links are in `CONTENT_SOURCES.md`.

## Code explanation and group contributions

Read `CODE_GUIDE.md` for a simple explanation of each file and the Vue syntax used. No contribution names have been invented. Group members should record only the pages they actually develop and understand. The assignment requires each member to develop at least one view; downloading this project alone does not establish that contribution.

## Push to your new repository

This folder contains no Git history or existing remote settings. If you have already cloned your new repository, place the project contents in its root and commit there.

For a new, empty repository, run these commands inside the project folder. Replace `YOUR_REPOSITORY_URL` with your repository URL:

```bash
git init
git add .
git commit -m "Add refined CCS website"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

Commit `package-lock.json`. The included `.gitignore` excludes `node_modules`, `dist`, and local environment files.

## Deployment preparation

Following your earlier ZIP-only request, this revision is supplied as a downloadable project; it has not been published. The assignment still requires you to submit a public live URL.

For Vercel, import your repository, use the Vite preset, set the build command to `npm run build`, and use `dist` as the output directory. `vercel.json` supplies the SPA fallback so opening or refreshing `/programs/bsit`, `/programs/bscs`, `/programs/bsdmia`, or `/programs/blis` serves the application.

`public/_redirects` provides the equivalent fallback for Netlify. Other hosts need their own fallback from page routes to `index.html`. These files are alternatives for their respective hosts; no configuration is needed to run the project locally.

Before submitting, test each Read More link, return link, navigation anchor, and direct program URL on your deployed site. Check phone and desktop layouts and confirm that the partner logos load.

## Validation

Dependencies were installed in the new folder. Production compilation and rendered route/content checks were run. Interactive browser testing was unavailable in this build environment, so scrolling and visual layouts still need a local browser check.
