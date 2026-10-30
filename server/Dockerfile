FROM python:3.13-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

COPY pyproject.toml uv.lock ./

RUN pip install --no-cache-dir uv \
    && uv sync --frozen --no-dev

COPY . .

EXPOSE 8000

CMD ["uv", "run", "--no-sync", "python", "manage.py", "runserver", "0.0.0.0:8000"]
