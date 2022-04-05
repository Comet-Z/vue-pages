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
                 Macchiato Coffee
                </h2>
                <v-divider />
              </slot>
            </div>
            <div class="modal-body">
                <!-- Main content here: -->
              <slot name="body">
                <!-- INGREDIENTS -->
                <div class="macchiato__ingredients-container">
                    <h3 class="header">Ingredients</h3>
                        <ul class="macchiato__ingredients">
                            <li>1 cup of milk </li>
                            <li>1 tablespoon vanilla syrup </li>
                            <li>1 shot espresso, hot</li>
                            <li>1 tablespoon caramel sauce</li>
                        </ul>     
                </div>
                <hr class="break-line">
                <!-- // INGREDIENTS // -->

                <!-- STEP-BY-STEP GUIDE -->
                <div class="macchiato__guide-container">
                    <h3 class="macchiato__guide header">Step-by-step guide:</h3>
                    <div class="macchiato__guide-steps">
                        <div class="macchiato__guide-first">
                            <ol>
                              <li>
                                We’re dealing with a tiny beverage, and maintaining heat is important. Preheat your machine, and especially your espresso cup.
                              </li>
                              <br>
                              <li>
                                Grind out your usual espresso dose (we use 18g in this Breville Barista Pro), level, tamp, and lock the portafilter in the machine.
                              </li>
                              <br>
                              <li>
                                Here, decide if you want two singles or one double. We’re brewing a double in this example.
                              </li>
                              <br>

                              <li>
                                While your shot is brewing, get your milk ready. We like to go with about 100ml of whole milk, and add about 25ml of half and half (10% cream) milk for an added creamy sweet boost.
                              </li>
                              <br>

                              <li>
                                Here’s a secret to a fantastic traditional macchiato: you don’t have to steam milk up to the usual 65C (150F); in fact, your microfoam will be better tasting and have a more sweeter impact if you only steam to about 40C (105F). And that’s our target – create paint-like microfoam but don’t go hot
                              </li>
                              <br>

                              <li>
                                Once the steam pitcher is the slightest bit warm to your hand’s touch, it’s time to end the milk stretching and steaming in general. This is a good rule of thumb for maximizing the milk’s sweetness for your drink. Note I have not submerged the wand at this point.
                              </li>
                              <br>

                              <li>
                                Take a healthy spoonful of the milk froth and dollop it right onto the espresso shot, creating a nice white cap. If you’ve brewed a double shot (like we have here), two dollops of foam will do.
                              </li>
                              <br>

                              <li>
                                Serve the macchiato with a demitasse spoon in case the drinker wants to stir things up, though we recommend drinking it unstirred, for the layering effect’s different taste sensations. Enjoy!
                              </li>
                            </ol>
                        </div>

                       <hr class="break-line">

                      <!-- optional div -->
                       <div class="macchiato__guide-second">
                            
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

.macchiato__ingredients {
    font-size: 17px;
    margin-left: 2.5rem;
}

.macchiato__guide-first {
    margin-left: 25px;
    font-size: 20px;
}



.macchiato__guide-steps {
    display: flex;
    flex-direction: column;
    align-content: space-between;

    font-size: 25px;
}

.macchiato__ingredients-container {
  /* margin-bottom: 1rem; */
}
</style>