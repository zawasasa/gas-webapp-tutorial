
import React from 'react';

const Chapter1 = () => {
  return (
    <div className="chapter-content">
      <h2>第1章: はじめの一歩</h2>
      <h3>GASで何ができる？</h3>
      <p>Google Apps Script (GAS) は、Googleが提供するJavaScriptベースのプログラミング言語です。Google Workspace（旧G Suite）の様々なサービス（Google スプレッドシート、Google ドキュメント、Google フォーム、Gmailなど）を連携させ、自動化したり、機能を拡張したりすることができます。</p>
      <p>例えば、以下のようなことができます。</p>
      <ul>
        <li>スプレッドシートのデータを自動で集計・分析する</li>
        <li>フォームの回答を自動で処理し、メールで通知する</li>
        <li>Gmailのメールを自動で振り分けたり、定型文を送信したりする</li>
        <li>Google ドキュメントを自動で生成する</li>
        <li>Webアプリケーションを作成し、外部からアクセスできるようにする</li>
      </ul>

      <h3>開発環境の準備</h3>
      <p>GASの開発には、特別なソフトウェアのインストールは不要です。Googleアカウントがあれば、すぐに開発を始めることができます。</p>
      <h4>1. Googleアカウントの準備</h4>
      <p>Googleアカウントをお持ちでない場合は、<a href="https://accounts.google.com/signup" target="_blank" rel="noopener noreferrer">こちら</a>から作成してください。</p>

      <h4>2. Google Driveの活用</h4>
      <p>GASのプロジェクトは、Google Drive上に保存されます。Google Driveを整理しておくことで、プロジェクトの管理がしやすくなります。</p>
      <p>新しいGASプロジェクトを作成するには、Google Driveから「新規」→「その他」→「Google Apps Script」を選択します。</p>
      <img src="https://via.placeholder.com/600x300?text=Google+Drive+New+GAS+Project" alt="Google Driveで新しいGASプロジェクトを作成する" style="max-width: 100%; height: auto;" />

      <p>これで、GASの開発を始める準備が整いました！</p>
    </div>
  );
};

export default Chapter1;
