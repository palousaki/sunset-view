# Sunset View

Static site for Sunset View, a holiday rental in Paralia Ofryniou, Greece. Served via GitHub Pages at [sunsetview.gr](https://sunsetview.gr).

## Structure

- `index.html` — the whole site (single page)
- `images/` — property photos
- `blocked-dates.js` — booked/unavailable date ranges shown in the booking calendar; auto-generated, don't edit by hand
- `scripts/sync-availability.mjs` — pulls the Airbnb iCal feed and regenerates `blocked-dates.js`
- `.github/workflows/sync-availability.yml` — runs the sync script every 6 hours, and can also be triggered manually

## Updating the availability calendar

The calendar syncs automatically every 6 hours from Airbnb. To refresh it sooner:

1. Go to the repo's **Actions** tab on GitHub
2. Select the **Sync availability** workflow
3. Click **Run workflow**

This requires write access to the repo. It fetches the Airbnb calendar, regenerates `blocked-dates.js`, and commits + pushes the change automatically.

The script reads the Airbnb calendar URL from the `AIRBNB_ICS_URL` repository secret (Settings → Secrets and variables → Actions).
