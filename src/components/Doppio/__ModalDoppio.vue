<template>
  <div id="root">
    <Transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                <h2 class="header">
                  <button class="modal-close-btn" @click="$emit('close')">
                    <svg
                      width="14"
                      height="24"
                      viewBox="0 0 14 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.939355 10.9393C0.353569 11.5251 0.353569 12.4749 0.939355 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12134 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807613 11.0711 0.807613 10.4853 1.3934L0.939355 10.9393ZM4.00002 10.5H2.00002V13.5H4.00002V10.5Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  DOPPIO ☕
                </h2>
                <v-divider />
              </slot>
            </div>
            <div class="modal-body">
              <!-- Main content here: -->
              <slot name="body">
                <!-- INGREDIENTS -->
                <div class="doppio__ingredients-container">
                  <h3 class="header">Ingredients</h3>
                  <ul class="doppio__ingredients">
                    <li>2 Shots espresso</li>
                  </ul>
                </div>
                <hr class="break-line" />
                <!-- // INGREDIENTS // -->

                <!-- STEP-BY-STEP GUIDE -->
                <div class="doppio__guide-container">
                  <h3 class="doppio__guide header">Step-by-step guide:</h3>
                  <div class="doppio__guide-steps">
                    <div class="doppio__guide-first">
                      <ol>
                        <li>
                          You first need to grind your espresso to a consistency
                          that is going to filter through your machine. This
                          should be a fine grind that gives you a powdery result
                          rather than a medium-course grind that is used for
                          Aeropress, Chemex, or other types of coffee pots that
                          require an over-the-top pout method. The use of water
                          pressure is essential to create the best-tasting
                          result by being forced out of your machine.
                        </li>
                        <br />
                        <li>
                          Make two separate amounts that will fit into your
                          portafilter and tamp the contents so they are lightly
                          packed. The rest of the work comes from waiting for
                          your espresso to be extracted. After this is complete
                          you add a new batch of espresso into the portafilter
                          and repeat the same extraction.
                        </li>
                        <br />
                        <li>
                          If you have a hand pump espresso maker, you’ll need to
                          use several repeated pumps to build up pressure. This
                          not only allows the pressure to build while the
                          espresso is filtering, but it adds a richer crema that
                          gives espresso more character. This technique is what
                          Érik Favre did who traveled through Italy to learn the
                          secrets of what makes espresso taste superior. His
                          hard work and attention to detail (with a little
                          motivation from his Italian wife), led to the
                          invention of the Nespresso machine.
                        </li>
                        <br />
                        <li>
                          When you’re done you simply add sugar or milk to your
                          doppio and then drink right away.
                        </li>
                      </ol>
                    </div>

                    <hr class="break-line" />

                    <div class="doppio__guide-second"></div>
                  </div>
                </div>
                <!-- // STEP-BY-STEP GUIDE // -->
              </slot>
            </div>

            <div class="modal-footer">
              <!-- Modal footer here: -->
              <slot name="footer"> </slot>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito&family=Pacifico&display=swap");

#root {
  font-family: "Nunito", sans-serif;
  font-size: 35px;
  color: #fff;
}

.doppio__ingredients {
  font-size: 17px;
  margin-left: 2.5rem;
}

.doppio__guide-steps {
  display: flex;
  flex-direction: column;
  align-content: space-between;

  font-size: 25px;
}
.doppio__guide-first {
  margin-left: 25px;
  font-size: 20px;
}

.doppio__ingredients-container {
  /* margin-bottom: 1rem; */
}
</style>
