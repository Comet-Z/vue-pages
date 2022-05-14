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
            <p>Флэт Уайт</p>
        </v-card-title>

        <v-card-text>
            <div class="my-4 text-subtitle-1">
            <p>
                Флэт уайт — это двойная порция кофе на основе эспрессо со вспененным молоком, покрытым сверху тонким слоем текстурированной микропены — что-то вроде бархатистой консистенции.
            </p>
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