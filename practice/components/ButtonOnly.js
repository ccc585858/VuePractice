export default {
  emits: ["myEvent"], // 宣告此元件，可觸發 myEvent 事件
  data() {
    return {};
  },
  // 按鈕點擊後，會觸發名稱為 myEvent 的事件
  template: `
      <div class="btn_block">
      <button type="button" @click="$emit('myEvent', $event, '其它資料')">這是按鈕</button>      </div>
    `,
};
