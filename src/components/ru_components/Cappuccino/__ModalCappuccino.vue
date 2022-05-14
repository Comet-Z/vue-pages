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
                  КАПУЧИНО ☕
                </h2>
                <v-divider />
              </slot>
            </div>
            <div class="modal-body">
                <!-- Main content here: -->
              <slot name="body">
                <!-- INGREDIENTS -->
                <div class="cappuccino__ingredients-container">
                    <h3 class="header">Ингредиенты</h3>
                    <h6 class="header">Для готовки Эспрессо:</h6>
                        <ul class="cappuccino__ingredients">
                            <li>2 столовые ложки кофе темной обжарки мелкого помола</li>
                            <li>4 унции воды</li>
                        </ul>     
                        
                    <h6 class="header">Для вспененного молока:</h6>
                        <ul class="cappuccino__ingredients">
                            <li>4 унции молока</li>
                        </ul>
                </div>
                <hr class="break-line">
                <!-- // INGREDIENTS // -->

                <!-- STEP-BY-STEP GUIDE -->
                <div class="cappuccino__guide-container">
                    <h3 class="cappuccino__guide header">Пошаговая инструкция:</h3>
                    <div class="cappuccino__guide-steps">
                        <div class="cappuccino__guide-first">
                          <ol>
                            <li>Сделайте двойную порцию эспрессо</li>
                            <br>
                            <li>Налейте воду в бойлер вашей эспрессо-машины.</li>
                            <br>
                            <li>Утрамбуйте (прижмите) кофе с помощью темпера. Сделайте это 2-3 раза, чтобы убедиться, что гуща плотно упакована.</li>
                            <br>
                            <li>Поместите портафильтр в головку группы эспрессо-машины и зафиксируйте его, повернув вправо.</li>
                            <br>                 
                            <li>
                              Поместите чашку для демитасса или стеклянный графин, поставляемый с вашей эспрессо-машиной, под головку группы и тяните заварку в течение 23–30 секунд или до тех пор, пока не получится 2 унции эспрессо. Как правило, для запуска этого процесса имеется рычаг, переключатель или кнопка.
                            </li>
                            <br>
                            <li>После того, как шот сделан, вспеньте молоко.</li>

                          </ol>
                        </div>

                       <hr class="break-line">

                       <div class="cappuccino__guide-second">
                         <ol>
                            <h3 class="header">Вспеньте молоко</h3>
                            <li>Поместите молоко в стеклянную мерную чашку или небольшой металлический кувшин.</li>
                            <br>
                            <li>Вставьте паровую трубку в емкость с молоком, чуть ниже поверхности молока.</li>
                            <br>
                            <li>Включите паровую трубку на вашей эспрессо-машине. (Возможно, для этого вам потребуется прочитать руководство к вашей эспрессо-машине, так как каждая эспрессо-машина немного отличается.)</li>
                            <br>
                            <li>Следите за тем, чтобы кончик палочки был направлен в сторону контейнера. Это создаст водоворот с молоком.</li>
                            <br>
                            <li>Переместите контейнер выше, ниже, ближе, а затем дальше, чтобы паровая трубка могла набрать воздух в молоко, образуя пену. При этом пузырьки должны становиться все меньше и меньше.</li>
                            <br>
                            <li>Когда молоко вспенится и увеличится вдвое, выключите паровую трубку.</li>
                            <br>
                            <li>Добавьте к эспрессо вспененное молоко сразу после образования пены. При первоначальном наливании капучино представляет собой только эспрессо и пену, но жидкое молоко быстро оседает из пены, образуя (примерно) равные части пены, вспененного молока и эспрессо, которыми известен капучино. </li>
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