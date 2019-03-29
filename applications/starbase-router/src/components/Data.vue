<template>
  <div>
    <h5>
      {{type}}
    </h5>
    <div class="row">
      <item v-for="(item, index) in items" :key="index" :type="type" :received-item="item" />
    </div>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  watch: {
    '$route': 'fetchItems'
  },
  data() {
    return {
      type: this.$route.params.type,
      items: [],
    }
  },
  methods: {
    fetchItems() {
      this.items = [];
      this.type = this.$route.params.type;

      const initialIds = [1, 13, 14];

      for (let i in initialIds) {
        let id = initialIds[i];
        console.log('id', id);
        fetch(`https://swapi.co/api/${this.type}/${id}`,{
          method: 'GET',
        })
          .then(response => response.json())
          .then(json => this.items.push(json))
      }
    }
  },
  created() {
    this.fetchItems();
  },
  components: {
    Item,
  }
}
</script>
