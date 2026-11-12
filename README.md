# tsukikaze lab

月風まいの活動拠点サイト。設計は [docs/design.md](docs/design.md) を参照。

## よく使うコマンド
| コマンド | 内容 |
|---|---|
| `npm run dev` | 開発用サーバーを起動（http://localhost:4321 で確認） |
| `npm run build` | 公開用のファイルを `dist/` に作る |
| `npm run preview` | ビルドしたものをローカルで確認 |

## 記事・作品の追加
- 作品：`src/content/works/` に Markdown を1つ追加
- 開発記録：`src/content/log/` に Markdown を1つ追加
  - `draft: true` の記事は、開発サーバーでのみ表示され、公開ビルドには含まれません

## 設定
- サイト名・紹介文・SNSリンク：`src/consts.ts`
- 配色・フォント：`src/styles/global.css`
- 公開URL：`astro.config.mjs` の `site`
