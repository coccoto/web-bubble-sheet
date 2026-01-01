# Client Build
FROM node:24-bookworm-slim AS client

# OS をセットアップ
RUN apt update && apt full-upgrade -y && apt autoremove -y && apt clean

WORKDIR /app/client

# 依存関係をインストール
COPY client/package*.json ./
RUN npm ci

# プログラムをコンテナにコピー
COPY client/ ./

# アプリケーションをビルド
RUN npm run release

# Server Runtime
FROM node:24-bookworm-slim

# OS をセットアップ
RUN apt update && apt full-upgrade -y && apt autoremove -y && apt clean

WORKDIR /app/server

# 依存関係をインストール
COPY server/package*.json ./
RUN npm ci

# プログラムをコンテナにコピー
COPY server/ ./

# Client の dist を Server コンテナにコピー
COPY --from=client /app/client/dist /app/client/dist

# GitHub リポジトリ連携
LABEL org.opencontainers.image.source=https://github.com/coccoto/web-bubble-sheet

# アプリケーションを実行
CMD ["npm", "run", "start"]
