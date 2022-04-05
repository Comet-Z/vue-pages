<template>
  <div id="root">
    <!-- ! Doppio -->
    <v-card 
      class="coffee-card" 
      dark 
      ripple 
      hover 
      max-width="300"
      @click="showDoppioModal = true"
    >
      <v-img height="250" src="./doppio.jpg" />
      <!-- ! Create a coffee card name -->
      <v-card-title class="coffee-name">
        <p>Doppio</p>
      </v-card-title>

      <v-card-text>
        <div class="text-subtitle-1">
            <p>
                Doppio espresso is a double shot which is extracted using double the amount of ground coffee in a larger-sized portafilter basket. 
            </p>
        </div>
      </v-card-text>
    </v-card>

    <Teleport to="body">
      <Modal 
        :show="showDoppioModal"
        @close="showDoppioModal = false"
      >
      </Modal>
    </Teleport>
  </div>
</template>

<script>
import Modal from './__ModalDoppio.vue'

export default {
  components: {
    Modal,
  },

  data: () => ({
    showDoppioModal: false,
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