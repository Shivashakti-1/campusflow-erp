# CampusFlow ERP Portal

A responsive, self-contained student ERP portal prototype built with plain HTML, CSS and JavaScript.

## Live portal

Open the deployed website directly: [CampusFlow ERP](https://shivashakti-1.github.io/campusflow-erp/)

## Demo access

- Choose **Student** for the student demo. Use the pre-filled demo details or any credentials; this mode does not create a real Supabase account.
- The **Admin workspace** is restricted to authenticated administrators. Admin access is managed securely through Supabase for **Shiva Shakti Dubey**.

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
- Supabase-backed admin workspace for student management
- Toast feedback for primary actions

Student demo content is sample data. Admin student records are stored securely in Supabase with role-based access policies.

## Supabase setup

Run `supabase-schema.sql` in the Supabase SQL Editor before using the cloud admin workspace. Then create your user under Authentication → Users and set that user's profile role to `admin` in the Table Editor. The browser uses only the publishable key; never add a secret/service-role key to this repository.
