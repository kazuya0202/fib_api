# フィボナッチ数を返すAPI


## ソースコードの概要・構成

### スタック

本コードは、以下に示すスタックで実装しています。

- フレームワーク： [hono](https://hono.dev)
- 言語： TypeScript
- パッケージマネージャ： [Bun](https://bun.sh/package-manager)
- ライブラリ
  - フォーマッタ・リンタ： [Biome](https://biomejs.dev)
  - テスト： [Jest](https://jestjs.io/ja/)
- デプロイ： [Cloudflare Workers](https://www.cloudflare.com/ja-jp/developer-platform/workers/)


APIは以下のサイトにデプロイされています。

[https://fib_api.ichiya.workers.dev/](https://fib_api.ichiya.workers.dev)

フィボナッチ数を求めるには、以下のようにGETメソッドを使用します。

```shell
GET https://fib_api.ichiya.workers.dev/fib?n=[number]

# 例
curl -X GET -H "Content-Type: application/json" "https://fib_api.ichiya.workers.dev/fib?n=99"
```

### 実装時の注意点

クエリ`n`の値によっては、フィボナッチ数は非常に大きな値となり、JSONがサポートする整数の桁数を超え正確な値を返せないため、出力を文字列にして比較的大きな値でも取得できるようにしています。

また、TypeScriptでの計算においても、大きな値に対応するため、`number`ではなく`bigint`を利用して計算しています。

### 構成

```shell
src/
├── index.ts           # APIエントリポイント
├── index.test.ts      # テスト
└── fib/
    ├── index.ts       # フィボナッチ数列を返すAPI
    └── index.test.ts  # テスト
```


## 実行

### 依存関係のインストール

```shell
bun install
```

### ローカル実行

```shell
bun run dev
```

### テスト

```shell
bun run test
```
