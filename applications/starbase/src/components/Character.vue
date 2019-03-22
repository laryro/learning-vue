<template>
  <div class="component character" @click="switchCharacter">
    {{character}}
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      character: {}
    }
  },
  methods: {
    fetchCharacter(id) {
      fetch(`https://swapi.co/api/people/${id}`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => this.character = json)
    },
    switchCharacter() {
      const randomId = Math.floor(Math.random() * 83) + 1;
      this.fetchCharacter(randomId)
    }
  },
  created() {
    this.fetchCharacter(this.id)
  },
}
</script>
