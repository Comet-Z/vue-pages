<template>
  <div id="root">
    <!-- ! Cappuccino -->
    <v-card 
      id="card" 
      class="coffee-card" 
      @click="showCappuccinoModal = true"
      dark 
      ripple 
      hover 
      max-width="300"
    >
      <v-img height="250" src="./cappuccino.webp" />
      <!-- ! Create a coffee card name -->
      <v-card-title class="coffee-name">
        <p>Капучино</p>
      </v-card-title>

      <v-card-text>
        <div class="text-subtitle-1">
         Кофейный напиток на основе эспрессо, созданный в Австрии. Разработка велась в Италии и готовится из пены, приготовленной на пару.
        </div>
      </v-card-text>
    </v-card>

    <Teleport to="body">
        <Modal
          :show="showCappuccinoModal"
          @close="showCappuccinoModal = false"
        />
    </Teleport>
  </div>
</template>

<script>
import Modal from './__ModalCappuccino.vue'

export default {
  components: {
    Modal,
  },

  data: () => ({
    showCappuccinoModal: false, 
  }),
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&family=Pacifico&display=swap');

</style>