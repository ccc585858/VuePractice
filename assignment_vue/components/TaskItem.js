export default {
  emits: ["taskRemove", "taskEdit", "taskSwap", "taskStar"],
  props: ["tasks"],
  template: `
    <li v-for="(task, index) in tasks" :key="task.id" ref="taskLi">
    <div class="item_flex">
      <div class="left_block">
        <div class="btn_flex">
          <button type="button" class="btn_up" @click="$emit('taskSwap', index, $event, 'up')">往上</button>
          <button type="button" class="btn_down" @click="$emit('taskSwap', index, $event, 'down')">往下</button>
        </div>
      </div>
      <div class="middle_block">
        <div class="star_block">
          <span class="star" :class="{'-on': task.star >= 1}" @click="$emit('taskStar', index, $event, 1)" 
            ><i class="fas fa-star"></i
          ></span>
          <span class="star" :class="{'-on': task.star >= 2}" @click="$emit('taskStar', index, $event, 2)" 
            ><i class="fas fa-star"></i
          ></span>
          <span class="star" :class="{'-on': task.star >= 3}" @click="$emit('taskStar', index, $event, 3)" 
            ><i class="fas fa-star"></i
          ></span>
          <span class="star" :class="{'-on': task.star >= 4}" @click="$emit('taskStar', index, $event, 4)" 
            ><i class="fas fa-star"></i
          ></span>
          <span class="star" :class="{'-on': task.star >= 5}" @click="$emit('taskStar', index, $event, 5)" 
            ><i class="fas fa-star"></i
          ></span>
        </div>
        <p class="para" :class="{'-none': task.editable}">{{task.name}}</p>
        <input
          type="text"
          :class="['task_name_update', {'-none':!task.editable}]"
          placeholder="更新待辦事項…"
          v-model.trim="task.name"
        />
      </div>
      <div class="right_block">
        <div class="btn_flex">
          <button type="button" class="btn_update" @click="$emit('taskEdit', index, $event)">更新</button>
          <button type="button" class="btn_delete" @click="$emit('taskRemove', index, $event)" >移除</button>
        </div>
      </div>
    </div>
  </li>
    `,
};
