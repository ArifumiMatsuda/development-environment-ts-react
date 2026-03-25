FROM dhi.io/node:24.14-debian13-sfw-dev

RUN apt-get update \
    && apt-get install -y --no-install-recommends curl unzip \
    && curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && ./aws/install \
    && rm -rf aws awscliv2.zip /var/lib/apt/lists/*

RUN corepack enable && corepack prepare pnpm@10.33.0 --activate
