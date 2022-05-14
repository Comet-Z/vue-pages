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
        <p>Американо</p>
      </v-card-title>

      <v-card-text>
        <div class="text-subtitle-1">
          <p>
            Американо - это напиток на основе эспрессо, предназначенный для
            напоминания кофе, сваренного в капельном фильтре, который считается
            популярным в Соединенных Штатах Америки.
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
</style>