export default {
  data() {
    return {
      count: 0,
    };
  },
  template: `
      <div>
        <button type="button" @click="count++">點擊第 {{ count }} 次</button>
      </div>
    `,
};
