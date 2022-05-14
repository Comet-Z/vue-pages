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
            <p>Маккиато</p>
        </v-card-title>

        <v-card-text>
          <div class="my-4 text-subtitle-1">
            <p>
              Кофе макиато, иногда называемый эспрессо макиато, представляет собой кофейный напиток эспрессо с небольшим количеством молока, обычно вспененного.
            </p>
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

</style>