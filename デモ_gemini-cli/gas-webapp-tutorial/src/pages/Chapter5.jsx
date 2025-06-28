
import React from 'react';

const Chapter5 = () => {
  return (
    <div className="chapter-content">
      <h2>第5章: データをやり取りする</h2>
      <p>Webアプリの重要な機能の一つは、ユーザーからの入力を受け取ったり、サーバーからデータを取得したりすることです。GASのWebアプリでは、HTMLフォームとGASのスクリプトを連携させることで、データのやり取りを実現します。</p>

      <h3>フォームを作ってGASにデータを送る</h3>
      <p>ユーザーが入力したデータをGASに送信するには、HTMLの<code>&lt;form&gt;</code>タグを使用します。フォームのデータは、GASの `doPost()` 関数で受け取ることができます。</p>

      <h4>例: 名前を送信するフォーム</h4>
      <p>以下のHTMLコードをGASの `doGet()` 関数で返すと、名前を入力して送信できるフォームが表示されます。</p>
      <pre><code>
function doGet() {
  const htmlOutput = HtmlService.createHtmlOutput(`
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
    &lt;head&gt;
      &lt;base target="_top"&gt;
    &lt;/head&gt;
    &lt;body&gt;
      &lt;h1&gt;名前を送信&lt;/h1&gt;
      &lt;form method="post" action="<%= ScriptApp.get  WebAppUrl() %>"&gt;
        &lt;label for="name"&gt;名前:&lt;/label&gt;
        &lt;input type="text" id="name" name="userName" required&gt;&lt;br&gt;&lt;br&gt;
        &lt;input type="submit" value="送信"&gt;
      &lt;/form&gt;
    &lt;/body&gt;
    &lt;/html&gt;
  `);
  return htmlOutput;
}

function doPost(e) {
  const userName = e.parameter.userName;
  Logger.log('送信された名前: ' + userName);
  return HtmlService.createHtmlOutput('<h1>こんにちは、' + userName + 'さん！</h1>');
}
      </code></pre>
      <p><strong>ポイント:</strong></p>
      <ul>
        <li><code>&lt;form method="post" action="<%= ScriptApp.getWebAppUrl() %>"&gt;</code>: フォームの送信先を現在のWebアプリのURLに設定し、POSTメソッドでデータを送信します。</li>
        <li><code>name="userName"</code>: 入力フィールドに名前を付けることで、GAS側で `e.parameter.userName` として値を受け取ることができます。</li>
        <li>`doPost(e)`: POSTメソッドでデータが送信されたときに実行される関数です。`e.parameter` オブジェクトにフォームの入力値が格納されています。</li>
      </ul>

      <h3>送られたデータをスプレッドシートに記録する</h3>
      <p>フォームから送信されたデータをスプレッドシートに記録することで、データの管理や集計が容易になります。</p>
      <pre><code>
function doPost(e) {
  const userName = e.parameter.userName;
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName('データ'); // データを記録するシート名

  // 最終行に新しいデータを追加
  sheet.appendRow([new Date(), userName]);

  return HtmlService.createHtmlOutput('<h1>データを記録しました！</h1>');
}
      </code></pre>
      <p>この例では、`doPost()` 関数内で送信された名前と現在の日付をスプレッドシートの「データ」というシートに新しい行として追加しています。</p>
      <p>このように、GASを使うことで、WebアプリとGoogleサービスを連携させ、データの入力・表示・保存を簡単に行うことができます。</p>
    </div>
  );
};

export default Chapter5;
