# CareerBridge — Candidate Profiles

CareerBridge is a minimal, static front-end project designed to showcase candidate profiles and basic listings. It's intended as a lightweight starter for hiring websites, demo portfolios, or small recruitment landing pages.

Key goals:
- Provide a clear, responsive candidate profile layout
- Keep dependencies to zero (pure HTML/CSS/JS)
- Be easy to fork and customize for small teams or demos

Project structure
- `index.html` — landing page / list view
- `candidate-profile.html` — example candidate detail page
- `styles.css` — global styles and layout
- `app.js` — small client-side behaviors and utilities

Quick start

1. Open the site directly by double-clicking `index.html` in a browser for a quick preview.

2. Recommended: run a simple local server so relative routing and assets behave consistently:

```powershell
# Using Python 3
python -m http.server 8000

# Or, if you have Node.js installed
npx http-server -c-1

# Then open http://localhost:8000
```

Customization notes
- Replace markup in `candidate-profile.html` to match your data model.
- Edit `styles.css` for color, spacing, and typography changes.
- Add or extend functions in `app.js` for interactivity (filtering, modal, form handling).

Development tips
- Use a live-reload extension or `live-server` to speed up iterative changes.
- Keep assets small and avoid external CDNs if you need an offline-friendly demo.

Ideas for next steps
- Add a JSON data file and render candidate cards via `app.js`.
- Add simple search/filter UI and client-side routing for multiple profiles.
- Integrate with a lightweight backend or static-site generator if you need content management.

Contributing

Contributions are welcome. Fork the repo, make changes, and open a pull request. For quick fixes, open an issue with a short description and suggested change.

License

This project is provided as-is; add your preferred license (e.g., MIT) to make reuse explicit.

