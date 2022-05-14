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
                    МОККО ☕
                </h2>
                <v-divider />
              </slot>
            </div>
            <div class="modal-body">
                <!-- Main content here: -->
              <slot name="body">
                <!-- INGREDIENTS -->
                <div class="mocha__ingredients-container">
                    <h3 class="header">Ингредиенты:</h3>
                        <ul class="mocha__ingredients">
                            <li>18 г. молотого эспрессо или 1 капсула эспрессо.</li>
                            <li>250 мл. молока. </li>
                            <li>1 чайная ложка питьевого шоколада.</li>
                            <li>Большая чашка, 300-500 мл..</li>
                            <li>Взбитые сливки.</li>
                        </ul>     
                </div>

                <hr class="break-line">
                <!-- // INGREDIENTS // -->

                <!-- STEP-BY-STEP GUIDE -->
                <div class="mocha__guide-container">
                    <h3 class="mocha__guide header">Пошаговая инструкция:</h3>
                    <div class="mocha__guide-steps">
                        <div class="mocha__guide-first">
                          <ol>
                            <li>
                                Начните с заваривания кофе эспрессо. 
                            </li>
                            <br>
                            <li>
                                Пока готовится эспрессо, вскипятите молоко.
                            </li>
                            <br>   
                            <li>
                                Молоко можно запарить паровой палочкой или подогреть на плите.
                            </li>
                            <br>
                            <li>
                                 В высокий стакан налейте столовую ложку шоколадного соуса.
                            </li>
                            <br>
                            <li>
                                 Сверху налейте горячий эспрессо.
                            </li>
                            <br>
                            <li>
                                 Быстро перемешайте эспрессо и шоколадный соус.
                            </li>
                            <br>
                            <li>
                                 Налейте в стакан подогретое молоко.
                            </li>
                            <br>
                            <li>
                                Завершите это порцией взбитых сливок.
                            </li>
                            <br>
                            <li>
                                 Завершите напиток капелькой шоколадного соуса.
                            </li>
                          </ol>

                        </div>

                       <hr class="break-line">

                       <div class="mocha__guide-second">
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

.mocha__ingredients {
    font-size: 17px;
    margin-left: 2.5rem;
}


.mocha__guide-steps {
    display: flex;
    flex-direction: column;
    align-content: space-between;

    font-size: 25px;
}
.mocha__guide-first {
    margin-left: 25px;
    font-size: 20px;
}


.mocha__ingredients-container {
  /* margin-bottom: 1rem; */
}


</style>