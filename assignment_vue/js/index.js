import TaskItem from "../components/TaskItem.js";
const app = Vue.createApp({
  // 區域掛載
  // components: { TaskItem },
  data() {
    return {
      taskText: "",
      tasks: [],
    };
  },
  created() {
    // console.log("ttt");
    let my_tasks = JSON.parse(localStorage.getItem("tasks"));
    // console.log(my_tasks);
    if (my_tasks) {
      this.tasks = my_tasks;
    } // 防止一開始是回傳是 null
  },
  methods: {
    toggleShadow() {
      // console.log("aaa");
      this.$refs.taskAddBlock.classList.toggle("-on");
    },
    taskAdd() {
      // alert("aaa");
      if (this.taskText != "") {
        // alert("tt");
        this.tasks.unshift({
          id: Date.now(),
          name: this.taskText,
          star: 0,
          editable: false,
        });
        this.taskText = "";
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      }
    },
    // taskEnter(e) {
    //   // console.log(e);
    //   if (e.which == 13) {
    //     this.taskAdd();
    //   }
    // },
    taskRemove(i, e) {
      // prompt("hHHH");
      // alert(i);
      // console.log(e);
      let r = confirm("確認移除");
      if (r) {
        this.$refs.taskList.children[i].classList.add("fade_out");
        // this.$refs.TaskItem.$refs.taskLi[i];
        setTimeout(() => {
          this.tasks.splice(i, 1);
          localStorage.setItem("tasks", JSON.stringify(this.tasks));
        }, 1000);
      }
    },
    taskClear() {
      let r = confirm("確認清空");
      if (r) {
        // alert("rrrr");
        for (let i = 0; i < this.$refs.taskList.children.length; i++) {
          this.$refs.taskList.children[i].classList.add("fade_out");
        }
        setTimeout(() => {
          this.tasks = [];
          localStorage.clear();
        }, 1000);
      }
    },
    taskEdit(i, e) {
      // alert(i);
      if (this.tasks[i].editable) {
        if (this.tasks[i].name == "") {
          alert("請輸入資料");
        } else {
          this.tasks[i].editable = !this.tasks[i].editable;
          localStorage.setItem("tasks", JSON.stringify(this.tasks));
        }
      } else {
        this.tasks[i].editable = !this.tasks[i].editable;
      }
    },
    taskSwap(i, e, direction) {
      // alert(direction);
      if (direction == "up" && i != 0) {
        // alert("abc");
        [this.tasks[i - 1], this.tasks[i]] = [this.tasks[i], this.tasks[i - 1]];
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      }

      if (direction == "down" && i != this.tasks.length - 1) {
        // alert("ddd");
        [this.tasks[i], this.tasks[i + 1]] = [this.tasks[i + 1], this.tasks[i]];
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      }
    },
    taskStar(i, e, star) {
      // alert(star);
      this.tasks[i].star = star;
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
});
app.component("TaskItem", TaskItem);

const vm = app.mount("#task_container");
