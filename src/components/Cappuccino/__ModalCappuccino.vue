<template>
  <div id="root">
    <Transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                <h2 class="header">
                  <button 
                      class="modal-close-btn" 
                      @click="$emit('close')"
                    >                      
                       <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.939355 10.9393C0.353569 11.5251 0.353569 12.4749 0.939355 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12134 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807613 11.0711 0.807613 10.4853 1.3934L0.939355 10.9393ZM4.00002 10.5H2.00002V13.5H4.00002V10.5Z" fill="white"/>
                       </svg>
                    </button>
                  CAPPUCCINO ☕
                </h2>
                <v-divider />
              </slot>
            </div>
            <div class="modal-body">
                <!-- Main content here: -->
              <slot name="body">
                <!-- INGREDIENTS -->
                <div class="cappuccino__ingredients-container">
                    <h3 class="header">Ingredients</h3>
                    <h6 class="header">For the Espresso:</h6>
                        <ul class="cappuccino__ingredients">
                            <li>2 tablespoons finely ground dark roast coffee</li>
                            <li>4 ounces water </li>
                        </ul>     
                        
                    <h6 class="header">For the foamed milk:</h6>
                        <ul class="cappuccino__ingredients">
                            <li>4 ounces of milk</li>
                        </ul>
                </div>
                <hr class="break-line">
                <!-- // INGREDIENTS // -->

                <!-- STEP-BY-STEP GUIDE -->
                <div class="cappuccino__guide-container">
                    <h3 class="cappuccino__guide header">Step-by-step guide:</h3>
                    <div class="cappuccino__guide-steps">
                        <div class="cappuccino__guide-first">
                          <ol>
                            <li>Pull a double shot of Espresso</li>
                            <br>
                            <li>Put the water into the boiler of your espresso machine</li>
                            <br>
                            <li>Tamp (press) the coffee down using a tamper. Do this 2 to 3 times to make sure the grounds are packed tightly.</li>
                            <br>
                            <li>Place the portafilter into your espresso machine's group head and lock it in place by turning it to the right.</li>
                            <br>                 
                            <li>Place a demitasse cup or the glass carafe that came with your espresso machine under the group head and pull the shot for 23 to 30 seconds, or until 2 ounces of espresso is yielded. Typically, there is a lever, switch, or button to start this process.</li>
                            <br>
                            <li>Once the shot is pulled, foam the milk.</li>

                          </ol>
                        </div>

                       <hr class="break-line">

                       <div class="cappuccino__guide-second">
                         <ol>
                            <h3 class="header">Foam the milk</h3>
                            <li>Place the milk into either a glass measuring cup or a small metal pitcher.</li>
                            <br>
                            <li>Insert the steam wand into the container with the milk, just under the surface of the milk.</li>
                            <br>
                            <li>Engage the steam wand on your espresso machine. (You may need to read your espresso machine's manual for this, as each espresso maker is a little different.)</li>
                            <br>
                            <li>Make sure to keep the tip of the wand toward the side of the container. This will create a vortex with the milk.</li>
                            <br>
                            <li>Move the container higher, lower, closer, then further so that the steam wand can incorporate the air into the milk, making the foam. The bubbles should get smaller and smaller as you do this.</li>
                            <br>
                            <li>Once the milk has foamed to double its size, turn the steam wand off.</li>
                            <br>
                            <li>Top the espresso with foamed milk right after foaming. When initially poured, cappuccino is only espresso and foam, but the liquid milk quickly settles out of the foam to create the (roughly) equal parts foam, steamed milk, and espresso for which cappuccino is known. </li>
                           
                         </ol>
                       </div>
                    </div>
                </div>
                <!-- // STEP-BY-STEP GUIDE // -->
              </slot>
            </div>

            <div class="modal-footer">
                <!-- Modal footer here: -->
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
@import url('https://fonts.googleapis.com/css2?family=Nunito&family=Pacifico&display=swap');

#root {
    font-family: 'Nunito',sans-serif;
    font-size: 35px;
    color: #fff;
}

.cappuccino__ingredients {
    font-size: 17px;
    margin-left: 2.5rem;
}

.cappuccino__guide-first {
    margin-left: 25px;
    font-size: 20px;
}
.cappuccino__guide-second {
    margin-left: 25px;
    font-size: 20px;
}


.cappuccino__guide-steps {
    display: flex;
    flex-direction: column;
    align-content: space-between;

    font-size: 25px;
}

.cappuccino__ingredients-container {
  /* margin-bottom: 1rem; */
}



</style>