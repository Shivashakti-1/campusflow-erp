# CampusFlow ERP Portal

A responsive, self-contained student ERP portal prototype built with plain HTML, CSS and JavaScript.

## Run it

Open `index.html` in a browser. For local development with a static server, run:

```powershell
npx serve .
```

## Included

- Demo sign-in with persistent browser session
- Responsive student dashboard
- Attendance by subject
- Daily timetable
- Semester results and CGPA summary
- Fees and payment history
- Campus notices
- Student profile and support screens
- Admin workspace with browser-persisted student CRUD demo
- Toast feedback for primary actions

The current data is intentionally local demo data. Production use still needs a backend for real authentication, database records, payment processing, role-based access, and API integration.

## Supabase setup

Run `supabase-schema.sql` in the Supabase SQL Editor before using the cloud admin workspace. Then create your user under Authentication → Users and set that user's profile role to `admin` in the Table Editor. The browser uses only the publishable key; never add a secret/service-role key to this repository.
