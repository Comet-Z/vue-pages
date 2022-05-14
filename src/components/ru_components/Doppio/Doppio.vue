<template>
  <div id="root">
    <!-- ! Doppio -->
    <v-card 
      class="coffee-card" 
      id="card"
      dark 
      ripple 
      hover 
      max-width="300"
      @click="showDoppioModal = true"
    >
      <v-img height="250" src="./doppio.jpg" />
      <!-- ! Create a coffee card name -->
      <v-card-title class="coffee-name">
        <p>Доппио</p>
      </v-card-title>

      <v-card-text>
        <div class="text-subtitle-1">
            <p>
                Эспрессо Doppio — это двойной шот, который готовится с использованием двойного количества молотого кофе в корзине портафильтра большего размера.
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
</style>