# Schedule embed test pages

Ten fake studio pages that embed the Mindbody Schedule widget the way a studio
website would, to test Show more and how the widget's iframe grows inside
different page layouts (full width, sidebar, fixed header, modal, site-builder
wrappers and so on).

Open the index, set how busy the studio should be on a page, then open it. The
widgets are production Schedule widgets on Mindbody test sites, loaded with the
production embed script (`https://go.mindbodyonline.com/embed/widget.js`).
Show more appears only where its feature flag is on for those test sites.

These are test sites: look around, but don't book or buy.

| Busyness | Studio | Site |
| --- | --- | --- |
| No classes | Luke Bowden Training Demo | -532127 |
| One a week | HW AutomationV2 | -53022 |
| Runs out | Aqua Vida | -251094 |
| Normal | Balanced Body Collective | -5302 |
| Very busy | Steps on Broadway | -308 |

The studio list lives in `shared/studios.js`. A page takes `?studio=<site id
without the minus>`.
