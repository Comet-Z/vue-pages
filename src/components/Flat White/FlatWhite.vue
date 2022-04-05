<template>
    <div id="root">
        <v-card 
            id="card" 
            class="coffee-card" 
            dark 
            ripple 
            hover 
            max-width="300"
            @click="showFlatWhiteModal = true"
        >
        <v-img
            height="250"
            src="./flatwhite.jpg"

        />

        <v-card-title 
            class="coffee-name"
        >
            <p>Flat White</p>
        </v-card-title>

        <v-card-text>
            <div class="my-4 text-subtitle-1">
            <p>A flat white is a double shot espresso-based coffee with steamed milk finished with a thin layer of textured microfoam on top—sort of a velvety consistency.</p>
            </div>
        </v-card-text>
        </v-card>

        <Teleport to="body">
            <Modal
                :show="showFlatWhiteModal"
                @close="showFlatWhiteModal = false"
            >
            </Modal>
        </Teleport>

    </div>
</template>

<script>
import Modal from './__ModalFlatWhite.vue'

export default {
    components: {
        Modal,
    },

  data() {
    return {
        showFlatWhiteModal: false,
    }
  },
}

</script>

<style>
#card {
    border-radius: 15px;
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