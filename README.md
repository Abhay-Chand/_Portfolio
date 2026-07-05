
# Portfolio Architecture

## Structure

- src/app: app entry and route shell
- src/components/portfolio: reusable portfolio UI blocks
- src/components/portfolio/sections: page sections
- src/data/portfolio.ts: all portfolio content in one place
- src/config/site.ts: site-wide config and branding
- src/types/portfolio.ts: shared TypeScript models
- src/hooks: reusable hooks

## How to add a project

Update the projects array in src/data/portfolio.ts with the new project object.

## How to add experience

Update the experience array in src/data/portfolio.ts.

## How to add skills

Add or edit skill categories in src/data/portfolio.ts.

## How to add certifications

Add an item to the certifications array in src/data/portfolio.ts.

## How to change theme

Modify the design tokens in src/styles/theme.css and the palette values in src/config/site.ts.

## How to add new pages

Create a section component in src/components/portfolio/sections and mount it in src/app/App.tsx.
  