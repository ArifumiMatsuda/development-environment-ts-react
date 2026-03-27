# development-environment-ts-react

TypeScript ベースの開発環境テンプレートです。フロントエンドは `React + Vite`、インフラは `AWS CDK` で構成されており、`pnpm` のワークスペースで管理されています。

現状の内容は以下です。

- `apps/web`: React 19 + Vite 8 の Web アプリ
- `infra/cdk`: TypeScript で記述された AWS CDK アプリ
- `compose.yaml`: 開発用コンテナ定義

## 技術スタック

### アプリケーション

- TypeScript
- React 19
- Vite 8

### インフラ

- AWS CDK v2
- cdk-nag
- Vitest

### 開発基盤

- pnpm workspaces
- Node.js 24 系
- Docker / Docker Compose
- Biome
- Ultracite
- Trivy

## ディレクトリ構成

```text
.
├── apps/
│   └── web/        # React + Vite アプリ
├── infra/
│   └── cdk/        # AWS CDK アプリ
├── docker/
│   └── Dockerfile  # 開発用イメージ
├── compose.yaml    # コンテナ起動設定
└── package.json    # ワークスペース共通スクリプト
```

## セットアップ

### ローカルで起動する場合

前提:

- Node.js 24 系
- Corepack
- pnpm 10

依存関係をインストールします。

```bash
pnpm install
```

開発サーバーを起動します。

```bash
pnpm dev
```

ブラウザで [http://localhost:5173](http://localhost:5173) を開いて確認します。

### Docker で起動する場合

コンテナをビルドして起動します。

```bash
docker compose up --build
```

起動後は [http://localhost:5173](http://localhost:5173) で Web アプリを確認できます。

`compose.yaml` では、コンテナ起動時に `pnpm install` を実行したうえで Vite 開発サーバーを `0.0.0.0:5173` で立ち上げます。

## 使用方法

### Web アプリ

開発:

```bash
pnpm dev
```

本番ビルド:

```bash
pnpm build
```

ビルド済みアプリのプレビュー:

```bash
pnpm preview
```

### AWS CDK

CloudFormation テンプレートを生成します。

```bash
pnpm cdk:synth
```

CDK のテストを実行します。

```bash
pnpm --filter @repo/cdk test
```

必要に応じて `infra/cdk` 配下で `pnpm --filter @repo/cdk cdk diff` や `pnpm --filter @repo/cdk cdk deploy` も実行できます。AWS へデプロイする場合は、事前に AWS 認証情報を設定してください。

## 品質チェック

Lint / チェック:

```bash
pnpm check
```

自動修正:

```bash
pnpm fix
```

セキュリティスキャン:

```bash
pnpm scan
```

`pnpm scan` は Trivy を使って、依存関係の脆弱性、設定不備、シークレット混入を静的にスキャンします。

## 補足

- パッケージマネージャーは `pnpm` 固定です。
- ルートの `pnpm dev` は `apps/web` を起動します。
- 現在の CDK スタックは雛形で、`CdkStack` は最小構成です。
