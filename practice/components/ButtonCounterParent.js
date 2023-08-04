// 以區域方式載入元件，變數名稱為 ButtonCounter
import ButtonCounter from "./ButtonCounter.js";

export default {
  // 告知在目前的元件當中，能使用哪些子元件
  components: { ButtonCounter },

  template: `
    <div style="border: 2px solid red;">
      <h1>這是按鈕父層元件</h1>
      <button-counter></button-counter>
    </div>
  `,
};

/*
註：在 template 中的元件寫法，可以有以下四種寫法形式：
<button-counter></button-counter>
<ButtonCounter></ButtonCounter>

<button-counter />
<ButtonCounter />
*/
