FROM python:3.15-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONFAULTHANDLER=1

WORKDIR /app

# uv
COPY pyproject.toml uv.lock ./

RUN pip install --no-cache-dir uv \
    && uv sync --frozen --no-dev

# Django source
COPY . .

# Collect static files for production
RUN SECRET_KEY=static-build-only-key     DEBUG=False     DB_NAME=static_build     DB_USER=static_build     DB_PASSWORD=static_build     DB_HOST=127.0.0.1     DB_PORT=5432     uv run --no-sync python manage.py collectstatic --noinput

# Render $PORT beradi; Docker ichida Django shu portda tinglaydi.
EXPOSE 8000

# Production server
CMD ["sh", "-c", "uv run --no-sync python manage.py migrate --noinput && exec uv run --no-sync gunicorn config.wsgi:application --bind 0.0.0.0:${PORT:-8000}"]
