# iInvest Nigeria — Investment Gateway

**Nigeria investment gateway** is a static web application for **iInvest Nigeria**. It helps users explore investment opportunities across Nigerian states on an interactive map, with dedicated paths for investors and businesses raising capital.

## Features

- Interactive Nigeria territory map with **Green**, **Amber**, and **Red** investment status
- Territory detail modal (sectors, demographics, funding KPIs, charts, opportunities)
- Navigation: Home, Invest, Raise capital, and My Account (external portal link)
- Home page calls-to-action for investing and raising capital
- Shared header and footer across pages

## Repository layout

| Path | Description |
|------|-------------|
| `branch360-iinvest-ng/` | Vite React application (main app) |
| `Data/` | Source assets — Excel map data, page copy, logos, PDFs |

Map data is imported from `Data/NigeriaInvest.xlsx` into static JSON at build time. There is no backend or database in this phase.

## Tech stack

| Layer | Technology |
|-------|------------|
| UI | React 19, TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 |
| Map | Leaflet, react-leaflet, Turf.js |
| Charts | Recharts |
| UI components | Radix UI |
| Routing | react-router-dom |
| Data | Static JSON (from Excel import script) |
