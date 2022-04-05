<template>
    <div id="root">
      <v-card 
        id="card" 
        class="coffee-card" 
        dark 
        ripple 
        hover 
        max-width="300"
        @click="showIrishModal = true"
      >
        <v-img
          height="250"
          src="./irish.jpg"
        />

        <v-card-title 
          class="coffee-name"
        >
            <p>Irish Coffee</p>
        </v-card-title>

        <v-card-text>
          <div class="my-4 text-subtitle-1">
          <p> Irish coffee is a caffeinated alcoholic drink consisting of Irish whiskey, hot coffee, and sugar, stirred, and topped with cream.  </p>
          </div>
        </v-card-text>
      </v-card>

       <Teleport to="body">
            <Modal
                :show="showIrishModal"
                @close="showIrishModal = false"
            >
            </Modal>
        </Teleport>
      </div>
</template>

<script>
import Modal from './__ModalIrish.vue'

export default {
  components: {
      Modal
  },

  data() {
    return {
        showIrishModal: false,
    }
  },
}

</script>

<style>
.coffee-card {
  cursor: pointer;
  font-family: 'Nunito',sans-serif;

  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.103);
}
</style>