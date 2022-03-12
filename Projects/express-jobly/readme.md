# Jobly Backend

This is the Express backend for Jobly, version 2.

To run this:

    node server.js

To run the tests:

    jest -i

Helpers:

`sqlForPartialUpdate`: Partially update data in a table by selecting it's key and updating it's value.

Models:

    `User`: A user of the Jobly site.
    `Job`: A job advertised on the Jobly site.
    `Company`: A company that has advertised jobs.

Routes:

    `auth`: Authentication routes.
    `companies`: Company routes.
    `jobs`: Job routes.
    `users`: User routes.

Schemas:

    `users`: A table of users.
    `companies`: A table of companies.
    `jobs`: A table of jobs.

Tests:

    `users`: Tests for the users table.
    `companies`: Tests for the companies table.
    `jobs`: Tests for the jobs table.

GET /companies - Get all companies
GET /companies/:id - Get a company by id
GET /jobs - Get all jobs
GET /jobs/:id - Get a job by id
GET /users - Get all users
GET /users/:id - Get a user by id
POST /users - Create a new user
POST /companies - Create a new company
POST /jobs - Create a new job
PUT /users/:id - Update a user
PUT /companies/:id - Update a company
PUT /jobs/:id - Update a job
DELETE /users/:id - Delete a user
DELETE /companies/:id - Delete a company
DELETE /jobs/:id - Delete a job

GET /companies with query url parameters:

    `?name=company_name` - Get all companies with the given name
    `?minEmployees=Int` - Get all companies with at least the given number of employees
    `?maxEmployees=Int` - Get all companies with at most the given number of employees
    `?minEmployees=Int&maxEmployees=Int` - Get all companies with at least the given number of employees and at most the given number of employees

GET /jobs with query url parameters:

    `?title=job_title` - Get all jobs with the given title
    `?minSalary=Int` - Get all jobs with at least the given salary
    `?hasEquity=Boolean` - If true, filter to jobs that provide a non-zero amount of equity. If false or not included in the filter, list all jobs regardless of equity.

POST /users/:username/jobs/:id - Apply to a job
This route will create a new application for the given user and job.
It will return JSON: `{applied: jobId}`
Output of the get-all-info methods and routes for users which includes a field with a simple list of job IDs the user has applied for: `{..., jobs: [jobId, jobId, ...]}`
