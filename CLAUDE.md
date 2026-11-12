# tsukikaze lab — 開発メモ

月風まい（tsukikaze lab）の活動拠点サイト。設計は [docs/design.md](docs/design.md)。
このファイルは公開リポジトリに含まれるため、個人的な情報は書かない（個人用は `CLAUDE.local.md`、Git 管理外）。

## 会話のルール
- 返答は日本語で
- ユーザーはプログラマー経験あり（ブランク中）。専門用語には短い補足を付ける

## 公開情報
- サイト: https://tsukikaze-lab.tsukikaze-lab.workers.dev
- リポジトリ: https://github.com/tsukikaze-lab/tsukikaze-lab（Public）
- 活動名: 月風まい / tsukikaze lab（表記はすべて小文字の「tsukikaze lab」）

## 技術構成
- Astro 7（静的サイト）、Node.js 24（`.node-version`）
- コンテンツ: `src/content/works/`（作品）、`src/content/log/`（開発記録）。Markdown
  - `draft: true` の記事は公開ビルドに出ない（ただしリポジトリ上では誰でも読める）
- 設定値: `src/consts.ts`（サイト名・SNSリンク）、`astro.config.mjs`（`site` = 公開URL）
- 配色・フォント: `src/styles/global.css`（伝統色ベース、ライト/ダーク自動切替）
- 公開: Cloudflare Workers の静的アセット（`wrangler.jsonc`）。main にマージすると約1分で自動デプロイ

## 作業の流れ
1. main から作業ブランチを切る（例: `feat/...`, `fix/...`, `docs/...`）
2. 変更 → `npm run build` で確認
3. コミット → push → PR を作成
4. ユーザーの OK をもらってからマージ（マージで自動公開される）

## 注意
- Git の記録者は noreply アドレス（リポジトリ単位で設定済み）。変更しない
- APIキーなどの秘密情報はコミットしない（`.env` は除外済み）
- ローカル確認: `npm run dev`（http://localhost:4321）

## 次にやること（候補）
- 最初の記事 `src/content/log/hello.md` を本人の言葉で書き直し、`draft: false` にする
- Cloudflare Web Analytics を設定する
- X アカウント（`tsukikaze_lab`）を作り、`src/consts.ts` のリンクを確認する
- 2本目の作品：小さな実用ツール
