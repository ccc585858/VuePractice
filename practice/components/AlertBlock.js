// export default {
//   template: `
//       <div>
//         訊息：<slot></slot>
//       </div>
//     `,
// };

// export default {
//   template: `
//       <div>
//         訊息：<slot><span>無訊息</span></slot>
//       </div>
//     `,
// };

export default {
  template: `
      <div>
        訊息：<slot></slot>
  
        <slot name="footer"></slot>
      </div>
    `,
};
