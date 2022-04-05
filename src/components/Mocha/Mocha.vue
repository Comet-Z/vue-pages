<template>
  <div id="root">
    <!-- ! Mocha -->
    <v-card 
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
        <p>Mocha</p>
      </v-card-title>

      <v-card-text>
        <div class="text-subtitle-1">
          Chocolate-flavoured warm beverage that is a variant of a café latte
          commonly served in a glass rather than a mug.
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
.coffee-name {
  text-align: center;
}
.coffee-card {
  cursor: pointer;
  font-family: "Nunito", sans-serif;

  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.103);
  border-radius: 15px;
}
.text-subtitle-1 {
  font-weight: bold;
}
</style>