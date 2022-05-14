<template>
  <div id="root">
    <v-card
      id="card"
      class="coffee-card"
      dark
      ripple
      hover
      max-width="300"
      @click="showBicerinModal = true"
    >
      <v-img height="250" src="./bicerin.jpg" />

      <v-card-title class="coffee-name">
        <p>Бичерин</p>
      </v-card-title>

      <v-card-text>
        <div class="my-4 text-subtitle-1">
          <p>
            Бичерин — традиционный горячий напиток родом из Турина и Италии,
            приготовленный из эспрессо, питьевого шоколада и молока, который
            подают слоями в маленьком стакане.
          </p>
        </div>
      </v-card-text>
    </v-card>

    <Teleport to="body">
      <Modal :show="showBicerinModal" @close="showBicerinModal = false">
      </Modal>
    </Teleport>
  </div>
</template>

<script>
import Modal from "./__ModalBicerin.vue";

export default {
  components: {
    Modal,
  },

  data() {
    return {
      showBicerinModal: false,
    };
  },
};
</script>

<style>
.coffee-card {
  cursor: pointer;
  font-family: "Nunito", sans-serif;

  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.103);
}
</style>
