<template>
    <div id="root">
      <v-card 
        id="card" 
        class="coffee-card" 
        dark 
        ripple 
        hover 
        max-width="300"
        @click="showModal = true"
      >
        <v-img
          height="250"
          src=""
        />

        <v-card-title 
          class="coffee-name"
        >
            <p>Mocha</p>
        </v-card-title>

        <v-card-text>
          <div class="my-4 text-subtitle-1">
          <p></p>
          </div>
        </v-card-text>
      </v-card>

       <Teleport to="body">
            <Modal
                :show="showModal"
                @close="showModal = false"
            >
            </Modal>
        </Teleport>
      </div>
</template>

<script>
export default {
  data() {
    return {
        showModal: false,
    }
  },
  
  methods: {
  
  }
}

</script>

<style>
.coffee-card {
  cursor: pointer;
  font-family: 'Nunito',sans-serif;

  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.103);
}
</style>