export default {
  template: `
      <div class="block" style="font-weight: bold;">
        <p>這是 TextOnly2 元件</p>
      </div>
    `,
};

// export default {
//     props: ["data-target"],
//     inheritAttrs: false,
//     template: `
//       <div class="block" style="font-weight: bold;">
//         <p>這是 TextOnly2 元件</p>
//         {{ $attrs }}
//       </div>
//     `,
//     created() {
//       console.log(this.$attrs);
//     },
//   }
