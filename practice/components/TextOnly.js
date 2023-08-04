export default {
  props: ["greetMsg", "id", "title"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.greetMsg);
  },
  //   template: `
  //       <p>這是 TextOnly 元件的段落文字</p>
  //     `,

  //   template: `
  //   <p>{{ greetMsg }} 這是 TextOnly 元件的段落文字</p>
  // `,

  template: `
  <p>{{ greetMsg }} {{ id }} {{ title }} 這是 TextOnly 元件的段落文字</p>
`,
};
