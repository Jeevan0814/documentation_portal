# Zero Trust SDN: project portal

The documentation portal for **Zero Trust–Enabled SDN Architecture for Secure and
Intelligent Load Balancing in Edge Networks**, built by Team 50 (23CSE498 Project
Phase 2) in the Department of Computer Science and Engineering, Amrita Vishwa
Vidyapeetham, Coimbatore, and guided by Dr. Radhika N.

**Live site:** https://jeevan0814.github.io/documentation_portal/

**Project source code:** https://github.com/a5hx/Zero-Trust-Enabled-SDN-Architecture

The portal covers the project objectives, problem statement, methodology, results,
the research paper and its references, team, progress, documentation, GitHub links
and the demonstration video.

## Structure

```
index.html            the whole portal, one page
assets/css/style.css  styles (black theme; figures are colour-inverted to match)
assets/js/main.js     highlights the current section in the navigation
assets/img/           architecture diagrams and result figures (WebP), logo, favicon
.nojekyll             tells GitHub Pages to serve the files as they are
```

It is plain HTML and CSS with no build step.

## Preview locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Publish with GitHub Pages

1. Push to `main`.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   choose `main` and `/ (root)`, then click **Save**.
4. After a minute the site is live at the address above.

## Updating content

- **Demo video:** replace the `.video-frame` block in the `#demo` section of
  `index.html` with a YouTube embed (`<iframe>`) or a `<video>` tag.
- **Progress:** move the `done` / `now` classes along the `.timeline` list in
  the `#progress` section.
- **Documents:** add files under `assets/docs/` and link them from the
  `#docs` section.

## Team

| Name | Register number |
|---|---|
| K R Jeevan Raj | CB.SC.U4CSE23262 |
| Aravind Kumar M | CB.SC.U4CSE23303 |
| Arjun Krishnakumar | CB.SC.U4CSE23307 |
| Ashwin Kumar RM | CB.SC.U4CSE23308 |
| Bhuvanesh S | CB.SC.U4CSE23544 |
