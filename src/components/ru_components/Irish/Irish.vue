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
            <p>Айриш</p>
        </v-card-title>

        <v-card-text>
          <div class="my-4 text-subtitle-1">
            <p>
              Ирландский кофе — алкогольный напиток с кофеином, состоящий из ирландского виски, горячего кофе и сахара, перемешанных со сливками.
            </p>
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

</style>