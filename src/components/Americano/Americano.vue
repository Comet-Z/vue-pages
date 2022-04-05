<template>
  <div id="root">
    <!-- ! Cappuccino -->
    <v-card
      id="card"
      class="coffee-card"
      @click="showAmericanoModal = true"
      dark
      ripple
      hover
      max-width="300"
    >
      <v-img height="250" src="./americano.jpg" />
      <!-- ! Create a coffee card name -->
      <v-card-title class="coffee-name">
        <p>Americano</p>
      </v-card-title>

      <v-card-text>
        <div class="text-subtitle-1">
          <p>
            An Americano is an espresso-based drink designed to resemble coffee
            brewed in a drip filter, considered popular in the United States of
            America.
          </p>
        </div>
      </v-card-text>
    </v-card>

    <Teleport to="body">
      <Modal
       :show="showAmericanoModal"
        @close="showAmericanoModal = false" 
      />
    </Teleport>
  </div>
</template>

<script>
import Modal from "./__ModalAmericano.vue";

export default {
  components: {
    Modal,
  },

  data: () => ({
    showAmericanoModal: false,
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito&family=Pacifico&display=swap");
#card {
  border-radius: 15px;
}
.coffee-name {
  text-align: center;
}
.coffee-card {
  cursor: pointer;
  font-family: "Nunito", sans-serif;

  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.103);
}
.text-subtitle-1 {
  font-weight: bold;
}
</style>