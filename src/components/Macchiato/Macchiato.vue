<template>
    <div id="root">
      <v-card 
        id="card" 
        class="coffee-card" 
        dark 
        ripple 
        hover 
        max-width="300"
        @click="showMacchiatoModal = true"
      >
        <v-img
          height="250"
          src="./macchiato.webp"
        />
        <v-card-title 
          class="coffee-name"
        >
            <p>Macchiato Coffee</p>
        </v-card-title>

        <v-card-text>
          <div class="my-4 text-subtitle-1">
          <p>Caffè macchiato, sometimes called espresso macchiato, is an espresso coffee drink with a small amount of milk, usually foamed. </p>
          </div>
        </v-card-text>
      </v-card>

       <Teleport to="body">
            <Modal
                :show="showMacchiatoModal"
                @close="showMacchiatoModal = false"
            >
            </Modal>
        </Teleport>
      </div>
</template>

<script>
import Modal from './__ModalMacchiato.vue'

export default {
   components: {
       Modal,
   },

  data() {
    return {
        showMacchiatoModal: false,
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