export default {
  props: ["totalItems", "itemsPerPage", "currentPage"],
  computed: {
    totalPage() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
  },
  template: `
    <div class="pagination_block" id="pagination_block">
    <ul class="pagination">
      <li v-if="currentPage != 1"><a href="#">&lt;</a></li>
      <li v-for="n in totalPage" :key="n"><a href="#" :class="{'-on': n == currentPage}">{{n}}</a></li>
      <li v-if="currentPage != totalPage"><a href="#">&gt;</a></li>
    </ul>
  </div>
    `,
};
