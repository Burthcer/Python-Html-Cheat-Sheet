# Python Cheat Sheet Central

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-ready-5A0FC8?logo=pwa&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

A static, installable (PWA) reference dashboard collecting Python cheat sheets — from basics through Django, Pygame, Matplotlib, and Git — in themeable, offline-capable HTML pages.

## Overview

Python Cheat Sheet Central is a single-page dashboard of links into topic-specific cheat sheet pages (lists, dictionaries, control flow, classes, testing, Pygame, Matplotlib, Plotly, Django, Git & GitHub). It's a zero-build, zero-dependency static site with a service worker for offline access and a light/dark/teal theme switcher.

## Project Layout

```
Python-Html-Cheat-Sheet/
├── index.html          # Dashboard / entry point
├── manifest.json        # PWA manifest
├── sw.js                 # Service worker (offline caching)
├── assets/
│   ├── style.css
│   └── theme.js          # Theme switching logic
└── pages/                # Individual topic cheat sheets
    ├── 1. Beginner's Python Cheat Sheet.html
    ├── 2. Lists.html
    ├── ...
    └── 14. Git & GitHub.html
```

## Prerequisites

Any modern web browser. No build tooling or runtime required.

## Installation & Quick Start

```bash
git clone https://github.com/Burthcer/Python-Html-Cheat-Sheet.git
cd Python-Html-Cheat-Sheet
```

Then open `index.html` directly in a browser, or serve the folder locally:

```bash
python -m http.server 8000
```

Visit [http://localhost:8000](http://localhost:8000).

## License

MIT — see [LICENSE](LICENSE).
