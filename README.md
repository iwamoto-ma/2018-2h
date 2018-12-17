# WORKSHOP
2018 2H

## URL
+ 開発環境
<http://frontend.gnavi.co.jp/kaiin-workshop/>

## デプロイ
```sh
1. BranchA Create
2. BranchA Push
3. Push Trigger -> Auto Deploy  ( Development )
   https://$BranchA$--competent-lalande-5c4d7a.netlify.com/
4. Pull requests ( BranchA -> master  )
5. Pull requests Trigger -> Auto Deploy  ( Staging )
   https://deploy-preview-$Pull requests Number$--competent-lalande-5c4d7a.netlify.com/
6. Merge
7. Merge Trigger -> Auto Deploy  ( Production )
   https://competent-lalande-5c4d7a.netlify.com/
8. Done
```

### 動作環境
```sh
$ node -v
v10.13.0

$ yarn -v
1.12.1
```
### インストール
```sh
$ git clone https://github.com/iwamoto-ma/2018-2h.git
$ yarn
```

## タスク
### watch
```sh
$ yarn dev
```
<http://localhost:3000/>

### build
```sh
$ yarn build
```
dist配下にビルド

## ディレクトリ構成
```
├── build/ - ビルド設定フォルダ
├── config/ - 設定フォルダ
├── dist/ - ビルドフォルダ
├── src/ - 作業フォルダ
│ ├── asset/ - 画像
│ ├── components/ - コンポーネント
│ ├── app.vue - モジュールCSS
│ ├── index.html - 状態CSS
│ └── main.js
└──static/ - 静的ファイル
```

## 設計方針
+ B_E-M

## Git運用ルール
+ master
+ ComponentsName-name
+ master から ComponentsName-name ブランチを作成
