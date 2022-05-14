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
                    BICERIN ☕
                </h2>
                <v-divider />
              </slot>
            </div>
            <div class="modal-body">
              <!-- Main content here: -->
              <slot name="body">
                <!-- INGREDIENTS -->
                <div class="bicerin__ingredients-container">
                  <h3 class="header">Ingredients</h3>
                  <ul class="bicerin__ingredients">
                    <li>1/2 cup of strongly brewed, Royal Cup Coffee.</li>
                    <li>1/2 cup of prepared hot chocolate.</li>
                    <li>
                      1/4 cup of heavy cream (or whipped cream for a shortcut).
                    </li>
                    <li>Chocolate shavings.</li>
                  </ul>
                </div>
                <hr class="break-line" />
                <!-- // INGREDIENTS // -->

                <!-- STEP-BY-STEP GUIDE -->
                <div class="bicerin__guide-container">
                  <h3 class="bicerin__guide header">Step-by-step guide:</h3>
                  <div class="bicerin__guide-steps">
                    <div class="bicerin__guide-first">
                      <ol>
                        <li>
                          If you're using heavy cream place an empty mason jar
                          into your freezer, if using whipped cream skip this
                          step
                        </li>
                        <br>
                        <li>Prepare a pot, or cup of Royal Cup Coffee</li>
                        <br>
                        <li>
                          While your coffee is brewing make a cup of hot
                          chocolate (any homemade or premade hot chocolate will
                          work)
                        </li>
                        <br>
                        <li>
                          Pour prepared hot chocolate into bottom 1/3 of coffee
                          mug
                        </li>
                        <br>
                        <li>
                          Slowly pour coffee into your mug. Filling up the next
                          1/3 of the coffee mug
                        </li>
                        <br>
                        <li>
                          Place your heavy cream into chilled mason jar and seal
                        </li>
                        <br>
                        <li>Shake until the cream lightly thickens</li>
                        <br>
                        <li>
                          Pour cream slowly into coffee mug and fill the rest of
                          the coffee mug
                        </li>
                        <br>
                        <li>Sprinkle with chocolate shavings</li>
                        <br>
                        <li>Share and enjoy!</li>
                      </ol>
                    </div>

                    <hr class="break-line" />

                    <div class="bicerin__guide-second"></div>
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
    font-family: 'Nunito',sans-serif;
    font-size: 35px;
    color: #fff;
}

.bicerin__ingredients {
    font-size: 17px;
    margin-left: 2.5rem;
}



.bicerin__guide-steps {
    display: flex;
    flex-direction: column;
    align-content: space-between;

    font-size: 25px;
}
.bicerin__guide-first {
    margin-left: 25px;
    font-size: 20px;
}

</style>
