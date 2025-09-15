# SveltePlot

![License](https://img.shields.io/npm/l/svelteplot.svg) ![Tests](https://github.com/svelteplot/svelteplot/actions/workflows/test.yml/badge.svg)

SveltePlot is a visualization framework based on the [layered grammar of graphics](https://vita.had.co.nz/papers/layered-grammar.html) ideas. It's API is heavily inspired by [Observable Plot](https://github.com/observablehq/plot). Created by Gregor Aisch.

<img src="static/logo.png" alt="SveltePlot logo" width="401" />

## Development

Clone the repo and install dependencies:

```bash
git clone git@github.com:svelteplot/svelteplot.git
cd svelteplot
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open http://localhost:5173 in your browser.

## Testing

Run unit tests:

```bash
pnpm lint
pnpm test
```

You should also run the visual regression tests:

```bash
pnpm test:visual
```

This will generate screenshots and compare them with the expected results.

```bash
pnpm vi:report
```

To see the differences side by side you can open http://localhost:5173/\_\_vr/report.html
