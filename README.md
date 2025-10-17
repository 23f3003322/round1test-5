# Sales Summary — GitHub Pages Demo

A tiny, production-ready static site that loads a CSV attachment via a data URI, sums the sales column, and displays the total on a single responsive page. The page title is set to a seed value and Bootstrap 5 is loaded from jsDelivr.

## Project Summary
- Single-page site (SPA) suitable for GitHub Pages.
- Uses a data URI (CSV data) as the attachment source and computes the sum of the sales column.
- Dynamic page title: Sales Summary ${seed}.
- Displays the computed total inside the element with id `#total-sales`.
- Bootstrap 5 loaded from jsDelivr for quick, clean styling.

## Setup (GitHub Pages)
1) Create a new repository on GitHub (e.g., `your-username/sales-summary`).
2) Push the repository contents (index.html, assets/, README.md, LICENSE).
3) Go to the repository Settings → Pages.
4) In Source, choose the branch you pushed (e.g., `main`) and the root (/) or /docs depending on your structure. Save.
5) Your site will be available at https://<your-username>.github.io/<repository-name>/

Alternative: Use a /docs folder instead of root for GitHub Pages.

## Usage
- Open the deployed URL in your browser.
- The page title will be `Sales Summary STATIC-1234` (seed is defined in code).
- The total shown in the page should match the sum of the CSV numbers:
  120.50 + 340.75 + 89.25 + 450.00 + 275.30 = 1275.80

## Key Files and Their Purpose
- index.html
  - The homepage HTML. Loads Bootstrap CSS from jsDelivr, includes a container card with a header and a total display element (#total-sales).
- assets/js/main.js
  - JavaScript logic to set the seed, update the page title, load the CSV data via a data URI, parse it, sum the sales column, and render the total.
- LICENSE
  - MIT License text.
- README.md
  - This file (docs how to use and set up the project).

## How It Works (Code Overview)
- index.html
  - Includes Bootstrap CSS via CDN (link containing bootstrap).
  - Contains a minimal layout with a display area for the total.
  - Imports the JavaScript module at `assets/js/main.js`.
- assets/js/main.js
  - Sets a constant seed = 'STATIC-1234' and updates document.title to `Sales Summary ${seed}`.
  - Uses a data URI containing CSV data (sales column) to fetch and parse the values.
  - Sums all numeric values excluding the header and writes the result to #total-sales with two decimals.

## License
MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the \"Software\"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.