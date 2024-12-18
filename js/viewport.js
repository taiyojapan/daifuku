// 参考サイト
// https://coliss.com/articles/build-websites/operation/css/viewport-units-on-mobile.html
// 高さいっぱいの要素を表示する方法
// 最初に、ビューポートの高さを取得し、0.01を掛けて1%の値を算出して、vh単位の値を取得
let vh = window.innerHeight * 0.01;
// カスタム変数--vhの値をドキュメントのルートに設定
document.documentElement.style.setProperty('--vh', `${vh}px`);

// ビューポートのリサイズにも対応する
// resizeイベントの取得
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});