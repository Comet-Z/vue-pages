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
        <p>Cappuccino</p>
      </v-card-title>

      <v-card-text>
        <div class="text-subtitle-1">
          An espresso-based coffee drink that originated in Austria with later
          development taking place in Italy, and is prepared with steamed milk
          foam.
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
#card {
  border-radius: 15px;
}
.coffee-name {
  text-align: center;
}
.coffee-card {
  cursor: pointer;
  font-family: 'Nunito',sans-serif;

  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.103);
}
.text-subtitle-1 {
  font-weight: bold;

}
</style>