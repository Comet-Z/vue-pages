<template>
  <div id="root">
      <Transition name="modal">
        <div v-if="show" class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">
                  <h2 class="header header-2"> 
                    <button 
                      class="modal-close-btn" 
                      @click="$emit('close')"
                    >                      
                       <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.939355 10.9393C0.353569 11.5251 0.353569 12.4749 0.939355 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12134 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807613 11.0711 0.807613 10.4853 1.3934L0.939355 10.9393ZM4.00002 10.5H2.00002V13.5H4.00002V10.5Z" fill="white"/>
                       </svg>
                    </button>

                    AMERICANO 
                  </h2>

                </slot>
              </div>
              <div class="modal-body">
                  <!-- Main content here: -->
                <slot name="body">
                  <!-- INGREDIENTS -->
                  <div class="americano__ingredients-container">
                      <h3 class="header">Ingredients</h3>
                          <ul class="americano__ingredients">
                              <li>
                                  An espresso machine, or a few shots of pre-made espresso from your Nespresso machine or local coffee shop.
                              </li>
                              <li>
                                  Hot water.
                              </li>
                              <li>
                                  A coffee cup.
                              </li>
                              <li>
                                  Your favorite coffee mug.
                              </li>
                              <li>
                                  Fresh whole coffee beans or freshly ground coffee.
                              </li>
                              <li>
                                  A coffee grinder, if you plan on using whole coffee beans.
                              </li>
                              <li>
                                  A kitchen scale for measuring out your coffee beans.
                              </li>
                              <li>
                                  A tamper to pack your coffee grounds.
                              </li>
                          </ul>     

                  </div>
                  <hr class="break-line">
                  <!-- // INGREDIENTS // -->

                  <!-- STEP-BY-STEP GUIDE -->
                  <div class="americano__guide-container">
                      <h3 class="americano__guide header">Step-by-step guide:</h3>
                      <v-responsive content-class="ingredient-list__mobile">
                        <div class="americano__guide-steps">
                            <div class="americano__guide-first">
                              <ol>
                                <li>
                                   Turn on your espresso machine: Make sure you turn on your espresso machine before beginning the americano-making process or else you could be waiting for a while for your espresso machine to heat, especially if it started out completely cold.
                                </li>
                                <br>
                                <li>
                                   Measure out your coffee beans: Use your kitchen scale to measure out the exact amount of coffee beans needed to make a single, double or triple shot of espresso, depending on your taste preferences and the size of your espresso machine's portafilter.
                                </li>
                                <br>
                                <li>
                                  Finely grind your coffee beans: Place your precisely-measured coffee beans into the grinder and grind them on the lowest setting possible. Be patient and take the time to grind the beans very finely, until they reach an almost powdery consistency. Double-check the coffee's weight on the scale after grinding, then set it aside.
                                </li>
                                <br>
                                <li>
                                   Prepare your containers: Rinse the wand attachment on your espresso machine. Then use the wand to heat up both the empty coffee cup you will use for brewing your espresso and the mug that will hold your hot water.
                                </li>
                                <br>
                                <li>
                                   Tamp your coffee grounds: Once your espresso machine is warmed up, take out the portafilter, which should be completely clean and dry before you use it. Pour the freshly ground coffee into the portafilter and use your tamper to pack it tightly. Be gentle when tamping the coffee grounds — apply even pressure and don't push too hard on one side or the other, which would result in an imperfect espresso shot.
                                </li>
                                <br>
                                <li>
                                    Make your espresso: Whether you decided to brew a single, double or triple espresso shot, it will be pulled in the same amount of time with the double and triple shots ending up stronger. Pull your espresso shot according to your machine's settings, using your warm coffee cup to catch the espresso.
                                </li>
                                <br>
                                <li>
                                   Heat up your water: Decide how much water you want to add to your espresso depending on how you like your americano, the strength of your espresso shot, and the size of your mug. Traditionally, the amount of water used in an americano is double the amount of espresso used, so heat up 2 ounces of water for every ounce of espresso you plan to use.
                                </li>
                                <br>

                                <li>
                                   Combine your espresso and water: Make sure to add your espresso to the hot water, never the other way around. Adding the water to the espresso runs the risk of scalding the espresso if your water is too hot. But adding the espresso to the water both saves the crema — a creamy foam on top of espresso — and allows the water to evenly temper the espresso, creating a smoother mixture overall.
                                </li>
                                <br>

                                <li>
                                  Add your mix-ins: A standard americano is strictly espresso and water with no flavorings or toppings. But if you want to jazz up the traditional beverage a bit, feel free to sprinkle in some cinnamon, squeeze some honey into it, pour in some milk and sugar, add a squirt of vanilla, or even spoon in a dollop of whipped cream — the options are limited only by your imagination. Play around with customizing your homemade americano to create a new signature drink.
                                </li>
                                <br>

                                <li>
                                  Enjoy: You just successfully made your first americano at home! Celebrate with a sip of caffeinated goodness and get ready for a great morning.
                                </li>
                              </ol>
                            </div>


                          <div class="americano__guide-second">
                                <!-- OPTIONAL -->
                          </div>
                        </div>
                      </v-responsive>
                  </div>
                          <hr class="break-line">
                  <!-- // STEP-BY-STEP GUIDE // -->
                </slot>
              </div>

              <div class="modal-footer">
                  <!-- Modal footer here: -->
                <slot name="footer">
                 
                </slot>
              </div>   <!-- // footer -->
            </div> <!-- // modal container -->
          </div>  <!-- // modal wrapper -->
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

.americano__ingredients {
    font-size: 17px;
    margin-left: 2.5rem;
}

.americano__guide-steps {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    word-break: break-all;
    font-size: 25px;
}
.americano__guide-first {
    margin-left: 25px;
    font-size: 20px;
}


.americano__ingredients-container {
  
}

/* RESPONSIVE: */

</style>