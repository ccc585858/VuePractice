import PostMsg from "./PostMsg.js";

export default {
  //   props: ["msg"],
  components: { PostMsg },
  template: `
    <div>
      <h1>文章標題</h1>
      <PostMsg></PostMsg>
    </div>
  `,
};
