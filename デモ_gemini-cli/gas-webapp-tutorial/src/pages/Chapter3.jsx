
import React from 'react';

const Chapter3 = () => {
  return (
    <div className="chapter-content">
      <h2>第3章: はじめてのWebアプリ</h2>
      <h3>「こんにちは世界！」と表示するだけの最も簡単なWebページ</h3>
      <p>GASを使ってWebアプリを作成する最初のステップとして、ブラウザに「こんにちは世界！」と表示するだけのシンプルなWebページを作成してみましょう。</p>

      <h4>1. GASプロジェクトの作成</h4>
      <p>Google Driveから新しいGASプロジェクトを作成します（第1章参照）。</p>

      <h4>2. コードの記述</h4>
      <p>スクリプトエディタに以下のコードを記述し、保存してください。</p>
      <pre><code>
function doGet() {
  // HTMLコンテンツを返す
  return HtmlService.createHtmlOutput('<h1>こんにちは世界！</h1>');
}
      </code></pre>
      <p>この `doGet()` 関数は、Webアプリにアクセスがあったときに実行される特別な関数です。`HtmlService.createHtmlOutput()` を使うことで、HTMLコンテンツをブラウザに表示することができます。</p>

      <h4>3. Webアプリとして公開</h4>
      <p>GASプロジェクトをWebアプリとして公開するには、以下の手順を実行します。</p>
      <ol>
        <li>スクリプトエディタのメニューバーから「デプロイ」→「新しいデプロイ」を選択します。</li>
        <li>「種類の選択」で「ウェブアプリ」を選択します。</li>
        <li>「説明」に任意の名前（例: `HelloWorldApp`）を入力します。</li>
        <li>「実行するユーザー」は「自分」を選択します。</li>
        <li>「アクセスできるユーザー」は「全員」を選択します（テスト用なので、公開しても問題ありません）。</li>
        <li>「デプロイ」ボタンをクリックします。</li>
      </ol>
      <img src="https://via.placeholder.com/600x300?text=GAS+Deploy+as+Web+App" alt="GASをWebアプリとしてデプロイする" style="max-width: 100%; height: auto;" />

      <h4>4. Webアプリの確認</h4>
      <p>デプロイが完了すると、WebアプリのURLが表示されます。このURLをブラウザで開くと、「こんにちは世界！」と表示されたWebページが表示されるはずです。</p>
      <p>これで、あなたのはじめてのWebアプリが完成しました！</p>
    </div>
  );
};

export default Chapter3;
