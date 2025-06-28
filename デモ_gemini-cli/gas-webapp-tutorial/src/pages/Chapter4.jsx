
import React from 'react';

const Chapter4 = () => {
  return (
    <div className="chapter-content">
      <h2>第4章: 見た目を整えよう (HTML & CSS)</h2>
      <p>Webアプリの見た目を整えるには、HTMLとCSSを使います。HTMLはページの構造を作り、CSSは色や配置などのスタイルを定義します。</p>

      <h3>最低限知っておきたいHTMLタグ</h3>
      <p>Webページは、様々なHTMLタグを組み合わせて作られています。ここでは、特によく使う基本的なタグを紹介します。</p>
      <ul>
        <li><code>&lt;h1&gt;</code>〜<code>&lt;h6&gt;</code>: 見出し。数字が小さいほど大きな見出しになります。</li>
        <li><code>&lt;p&gt;</code>: 段落。文章を記述します。</li>
        <li><code>&lt;a&gt;</code>: リンク。他のページやサイトへ移動するためのリンクを作成します。</li>
        <li><code>&lt;img&gt;</code>: 画像。画像を挿入します。</li>
        <li><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>: リスト。箇条書きや番号付きリストを作成します。</li>
        <li><code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>: 汎用的な要素。特定の意味を持たず、要素をグループ化したり、スタイルを適用したりするために使われます。</li>
      </ul>
      <p>これらのタグを組み合わせて、Webページの骨組みを作っていきます。</p>

      <h3>CSSで文字の色や大きさを変える方法</h3>
      <p>CSS（Cascading Style Sheets）は、HTMLで作成した要素の見た目を装飾するための言語です。色、フォント、サイズ、配置など、様々なスタイルを設定できます。</p>
      <p>GASのWebアプリでCSSを使うには、HTMLファイルの中に直接スタイルを記述するか、別のCSSファイルを読み込む方法があります。ここでは、簡単な例として、HTMLファイルの中にスタイルを記述する方法を見てみましょう。</p>

      <h4>例: 文字の色と大きさを変える</h4>
      <p>以下のHTMLコードをGASの `doGet()` 関数で返すと、ブラウザで表示されたときに「Hello, World!」の文字が赤色で大きく表示されます。</p>
      <pre><code>
function doGet() {
  const htmlOutput = HtmlService.createHtmlOutput(`
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
    &lt;head&gt;
      &lt;base target="_top"&gt;
      &lt;style&gt;
        h1 {
          color: red;
          font-size: 36px;
        }
      &lt;/style&gt;
    &lt;/head&gt;
    &lt;body&gt;
      &lt;h1&gt;Hello, World!&lt;/h1&gt;
    &lt;/body&gt;
    &lt;/html&gt;
  `);
  return htmlOutput;
}
      </code></pre>
      <p><code>&lt;style&gt;</code>タグの中にCSSのルールを記述します。上記の例では、<code>h1</code>要素の文字色を赤（<code>color: red;</code>）に、文字サイズを36ピクセル（<code>font-size: 36px;</code>）に設定しています。</p>
      <p>CSSを学ぶことで、より魅力的で使いやすいWebアプリを作成できるようになります。</p>
    </div>
  );
};

export default Chapter4;
