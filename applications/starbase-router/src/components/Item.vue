<template>
  <div class="col-4" @click="switchItem">
    <div class="item-card">
      <div class="card-block">
        <div v-for="(value, key, index) in item" :key="index">
          <template v-if="index < 5">
            <strong>{{key}}</strong>
            {{value}}
          </template>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {}
    }
  },
  props: ['receivedItem', 'type'],
  methods: {
    switchItem() {
      let randomId = Math.floor(Math.random() * 63) + 1;
      fetch(`https://swapi.co/api/${this.type}/${randomId}`,{
          method: 'GET',
        })
          .then(response => response.json())
          .then(json => this.item = json);
    }
  },
  created() {
    this.item = this.receivedItem;
  },
}
</script>
