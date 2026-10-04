# Osamah Al Obaidi – Portfolio

Personal portfolio site. Plain HTML, CSS and JavaScript, no build step.

## Run locally
Open `index.html` in a browser, or run a small server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Add a project
Add an object to the `projects` array in `js/projects.js` and push. The featured EMS project lives in `index.html`.

## Structure
```
index.html            main page
projects/ems.html     EMS case study
css/style.css         all styles
js/main.js            background, scroll effects, screenshot switcher
js/projects.js        project data + rendering
assets/               resume, screenshots, favicon
```

## Deploy
Hosted on GitHub Pages: push to `main`, and Pages serves the repo root.
