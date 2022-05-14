<template>
  <div id="root">
    <Transition name="modal">
      <div  v-if="show" class="modal-mask">
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
                  ФЛЭТ УАЙТ ☕
                </h2>
                <v-divider />
              </slot>
            </div>
            <div class="modal-body">
                <!-- Main content here: -->
              <slot name="body">
                <!-- INGREDIENTS -->
                <div class="flatwhite__ingredients-container">
                    <h3 class="header">Ingredients</h3>
                        <ul class="flatwhite__ingredients">
                          <li> Espresso </li>
                          <li> Milk </li>
                          <li> Espresso machine </li>
                          <li> Grinder </li>
                          <li> Scale </li>
                          <li> Milk pitcher </li>
                          <li> Cloth for portafilter & steamwand </li>
                          <li> Cup (drink volume: 150-240ml) </li>
                        </ul>     
                </div>
                <hr class="break-line">
                <!-- // INGREDIENTS // -->

                <!-- STEP-BY-STEP GUIDE -->
                <div class="flatwhite__guide-container">
                    <h3 class="flatwhite__guide header">Step-by-step guide:</h3>
                    <div class="flatwhite__guide-steps">
                        <div class="flatwhite__guide-first">
                            <ol>
                              <li>
                                Pull a double espresso into a cup or glass. Use double ristretto or double espresso. Often the drink has strong coffee taste.
                              </li>
                              <br>
                              <li>
                                Steam the milk to 55–62 °C. Learn how the right temperature feels in your hand when holding the pitcher or use a thermometer to take the temperature of the milk.
                                To make the milk velvety and smooth and disperse any bubbles, give the pitcher a thump on the counter and swirl the milk lightly around the pitcher.
                              </li>
                              <br>
                              <li>
                                Make a latte art pattern on the surface of the flat white. Foam layer should be from 0.5-1.5 cm.
                              </li>
                              <br>
                              
                            </ol>
                        </div>

                       <hr class="break-line">

                       <div class="flatwhite__guide-second">
                            
                       </div>
                    </div>
                </div>
                <!-- // STEP-BY-STEP GUIDE // -->
              </slot>
            </div>

            <div class="modal-footer">
                <!-- Modal footer here: -->
              <slot name="footer">
   
              </slot>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>




<script>

export default {

  data: () => ({
    
  }),

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

.flatwhite__ingredients {
    font-size: 17px;
    margin-left: 2.5rem;
}

.flatwhite__guide-first {
      margin-left: 25px;
    font-size: 20px;
}

.flatwhite__guide-steps {
    display: flex;
    flex-direction: column;
    align-content: space-between;

    font-size: 25px;
}

.flatwhite__ingredients-container {
  /* margin-bottom: 1rem; */
}
</style>