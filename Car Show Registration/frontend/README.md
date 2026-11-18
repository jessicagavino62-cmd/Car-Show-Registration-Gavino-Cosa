# Car Show 2027 Registration Dashboard

An administration dashboard for AutoVista Events staff to review participant registrations, vehicle information, registration status, and fee collection for Car Show 2027 at Sorsogon City Coliseum.

## Technology

- React 19 and JavaScript ES modules
- Vite
- Tailwind CSS v4 with the Vite plugin
- Lucide React icons
- React Hooks and the Fetch API

## Install and run

From this directory:

```sh
npm install
npm run dev
```

The Vite development server prints its local URL in the terminal. Create a production build with `npm run build`; run the code checks with `npm run lint`.

## Project structure

```text
src/
  api/
    registrationsApi.js   Fetch adapter for the planned .NET API
    sample-data.js        25 sample records and local query/summary functions
  components/              Reusable dashboard, KPI, filter, table, badge and pagination UI
  hooks/
    useDebounce.js         Delays participant searches by 400 ms
  pages/
    RegistrationsPage.jsx  Owns data, filters, pagination and request states
  App.jsx
  index.css
  main.jsx
```

## Sample data

The dashboard currently imports `getRegistrations` and `getSummary` from `src/api/sample-data.js`. Search, type/status filtering, pagination, and the summary operate on the full 25-record dataset. The calculated totals are 25 registrations, 10 confirmed, 6 checked in, 6 pending, 3 cancelled, ₱61,500.00 in fees, ₱47,100.00 collected, and ₱14,400.00 uncollected.

Each sample record computes its payment label from `amountPaid` and `registrationFee`. The summary is recalculated from all sample records, independent of the current page.

## API configuration and switching

`src/api/registrationsApi.js` contains a Fetch adapter for:

- `GET /api/registrations?participantName=&type=&status=&page=&pageSize=`
- `GET /api/registrations/summary`

Set `VITE_API_BASE_URL` in `.env.development` to the backend origin. The current value, `http://localhost:5205`, is a placeholder from the project requirements and has not been confirmed with the Backend Developer.

The app deliberately remains in sample-data mode. The C# API has not been connected or tested. Once Jessica confirms the port, available routes, CORS behavior, and JSON response shapes:

1. Test both endpoints directly and confirm the returned fields match the dashboard data contract.
2. In `src/pages/RegistrationsPage.jsx`, change the data import from `../api/sample-data.js` to `../api/registrationsApi.js`.
3. Pass an `AbortController` signal into both API calls in the loading effect and abort it in the effect cleanup.
4. Run `npm run build`, `npm run lint`, and verify filtering, paging, summaries, loading, and error/retry behavior with the live API.

Do not label the API integration complete until those checks pass against the actual backend.

## Environment variables

| Variable | Development value | Purpose |
| --- | --- | --- |
| `VITE_API_BASE_URL` | `http://localhost:5205` | Base origin for the prepared Fetch adapter; confirm the actual port before switching modes. |
