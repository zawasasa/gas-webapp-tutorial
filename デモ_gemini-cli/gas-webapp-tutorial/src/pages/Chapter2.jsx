
import React from 'react';

const Chapter2 = () => {
  return (
    <div className="chapter-content">
      <h2>第2章: GASのキホン</h2>
      <h3>スクリプトエディタの使い方</h3>
      <p>GASのコードを書く場所を「スクリプトエディタ」と呼びます。Google Driveから新しいGASプロジェクトを作成すると、自動的にスクリプトエディタが開きます。</p>
      <p>スクリプトエディタは、大きく分けて以下の部分で構成されています。</p>
      <ul>
        <li><strong>メニューバー:</strong> ファイルの保存、実行、デバッグなどの操作を行います。</li>
        <li><strong>ツールバー:</strong> よく使う機能へのショートカットがあります。</li>
        <li><strong>コードエディタ:</strong> 実際にGASのコードを記述する場所です。</li>
        <li><strong>ログ:</strong> コードの実行結果やエラーメッセージが表示されます。</li>
      </ul>
      <img src="https://via.placeholder.com/600x300?text=GAS+Script+Editor" alt="GASスクリプトエディタの画面" style="max-width: 100%; height: auto;" />

      <h3>スプレッドシートを操作してみよう</h3>
      <p>GASの最も一般的な使い方の1つは、Google スプレッドシートの操作です。ここでは、簡単な例として、スプレッドシートに文字を入力したり、セルの値を取得したりする方法を見ていきましょう。</p>

      <h4>1. スプレッドシートの準備</h4>
      <p>まず、新しいGoogle スプレッドシートを作成し、適当な名前を付けてください（例: `MyGASData`）。</p>

      <h4>2. コードの記述</h4>
      <p>スクリプトエディタに以下のコードを記述し、保存してください。</p>
      <pre><code>
function writeToSheet() {
  // スプレッドシートを名前で取得
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  // シートを名前で取得
  const sheet = spreadsheet.getSheetByName('シート1'); // シート名を適宜変更してください

  // A1セルに「Hello, GAS!」と書き込む
  sheet.getRange('A1').setValue('Hello, GAS!');

  // B1セルの値を取得し、ログに出力
  const cellValue = sheet.getRange('B1').getValue();
  Logger.log('B1セルの値: ' + cellValue);
}
      </code></pre>

      <h4>3. コードの実行</h4>
      <p>スクリプトエディタのメニューバーから「実行」ボタン（▶アイコン）をクリックし、「writeToSheet」関数を選択して実行します。</p>
      <p>初回実行時には、Googleアカウントへのアクセス許可を求められますので、指示に従って許可してください。</p>
      <p>実行後、スプレッドシートのA1セルに「Hello, GAS!」と表示され、スクリプトエディタのログにB1セルの値が表示されていれば成功です。</p>
    </div>
  );
};

export default Chapter2;
