export default {
  props: ["text"],
  template: `      
  <button type="button" @click="plusOne" class="btn_counter">{{text}}： {{ counter }}</button>
    `, // @ 是 v-on 的簡寫
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    plusOne() {
      this.counter++;
    },
  },
};
