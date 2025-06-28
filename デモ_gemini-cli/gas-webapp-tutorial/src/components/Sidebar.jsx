import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="#">トップページ</a></li>
          <li><a href="#chapter1">第1章: はじめの一歩</a></li>
          <li><a href="#chapter2">第2章: GASのキホン</a></li>
          <li><a href="#chapter3">第3章: はじめてのWebアプリ</a></li>
          <li><a href="#chapter4">第4章: 見た目を整えよう</a></li>
          <li><a href="#chapter5">第5章: データをやり取りする</a></li>
          <li><a href="#chapter6">第6章: 実践！アプリ開発</a></li>
          <li><a href="#appendix">付録</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;