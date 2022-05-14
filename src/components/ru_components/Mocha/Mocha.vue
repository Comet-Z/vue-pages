<template>
  <div id="root">
    <!-- ! Mocha -->
    <v-card 
      id="card"
      class="coffee-card" 
      dark 
      ripple 
      hover 
      max-width="300"
      @click="showMochaModal = true"
    >
      <v-img height="250" src="./mocha.jpg" />
      <!-- ! Create a coffee card name -->
      <v-card-title class="coffee-name">
        <p>Мокко</p>
      </v-card-title>

      <v-card-text>
        <div class="text-subtitle-1">
          Теплый напиток со вкусом шоколада, разновидность кофе латте.
          обычно подается в стакане, а не в кружке.
        </div>
      </v-card-text>
    </v-card>

    <Teleport to="body">
      <Modal 
        :show="showMochaModal"
        @close="showMochaModal = false"
      >
      </Modal>
    </Teleport>
  </div>
</template>

<script>
import Modal from './__ModalMocha.vue'

export default {
  components: {
    Modal,
  },

  data: () => ({
    showMochaModal: false,
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito&family=Pacifico&display=swap");

</style>