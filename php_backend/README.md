# PHP Backend

This directory contains a simple PHP server implementing the same API as the original FastAPI backend. It exposes the following routes under `/api`:

- `GET /api/` returns a greeting.
- `POST /api/status` accepts JSON payload `{"client_name": "name"}` and stores it in MongoDB.
- `GET /api/status` returns the list of stored status checks.

## Running

Ensure the `MONGO_URL` and `DB_NAME` environment variables are set (see `.env`). Start the server using PHP's built-in web server:

```bash
php -S localhost:8000 -t php_backend
```

The API will then be available at `http://localhost:8000/api`.
