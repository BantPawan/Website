# Pawan S Bant — Portfolio

Static HTML, CSS and JavaScript portfolio. No build step or external runtime dependencies.

## Preview

Run `python -m http.server 8765` from this folder, then open http://localhost:8765.

## Publish on the existing Netlify site

Upload the changed files to the root of BantPawan/Website and commit. If Netlify is connected to the repository's main branch, it should build the update automatically. Otherwise, upload this site's folder through the existing Netlify site's deploy interface. Use the repository root as the publish directory; no build command is needed.

## Content maintenance

- Edit text and project descriptions in index.html.
- Styling and breakpoints are in style.css; progressive enhancements are in script.js.
- The resume PDF is the latest resume supplied by Pawan for this update. Its summary still mentions a full-time engineering role; revise that separately if using an internship-specific resume.
- Main research project repositories were not supplied. Their calls to action correctly open an email discussion rather than imply public code is available.
- Earlier project and LinkedIn links were retained from the original portfolio and have not been independently verified.
- Update the availability date when an internship is secured.

## Validation

JavaScript syntax, local assets, anchor targets, heading structure and email destination checked. Full browser layout verification requires a Chromium installation.
