# WORKSHOP
2018 2H

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

### ビルド＆デプロイ
```sh
1. Branch ( componentname-name ) Create ( base master )
2. Branch Push
3. Push Trigger -> Build & Test -> Auto Deploy  ( Development )
   https://$Branch$--competent-lalande-5c4d7a.netlify.com/
4. Pull requests ( Branch -> master  )
5. Pull requests Trigger -> Build & Test -> Auto Deploy  ( Staging )
   https://deploy-preview-$Pull requests Number$--competent-lalande-5c4d7a.netlify.com/
6. Merge
7. Merge Trigger -> Build & Test -> Auto Deploy  ( Production )
   https://competent-lalande-5c4d7a.netlify.com/
8. Done
```

## タスク
### Watch
```sh
$ yarn dev
```
<http://localhost:3000/>

### Build
```sh
$ yarn build
```

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
+ componentsname-name
+ master から componentname-name ブランチを作成
