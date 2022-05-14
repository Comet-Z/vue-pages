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
                 МАККИАТО ☕
                </h2>
                <v-divider />
              </slot>
            </div>
            <div class="modal-body">
                <!-- Main content here: -->
              <slot name="body">
                <!-- INGREDIENTS -->
                <div class="macchiato__ingredients-container">
                    <h3 class="header">Ингридиенты:</h3>
                        <ul class="macchiato__ingredients">
                            <li>1 чашка молока. </li>
                            <li>1 чайная ложка ванильного сиропа. </li>
                            <li>1 порция горячего эспрессо.</li>
                            <li>1 чайная ложка карамельного соуса.</li>
                        </ul>     
                </div>
                <hr class="break-line">
                <!-- // INGREDIENTS // -->

                <!-- STEP-BY-STEP GUIDE -->
                <div class="macchiato__guide-container">
                    <h3 class="macchiato__guide header">Пошаговая инструкция:</h3>
                    <div class="macchiato__guide-steps">
                        <div class="macchiato__guide-first">
                            <ol>
                              <li>
                               Мы имеем дело с крошечным напитком, и поддержание тепла важно. Разогрейте кофемашину и особенно чашку для эспрессо.
                              </li>
                              <br>
                              <li>
                               Смолоть обычную дозу эспрессо.
                              </li>
                              <br>
                              <li>
                               Здесь решите, хотите ли вы два одинарных или один двухмерный.
                              </li>
                              <br>

                              <li>
                                 Пока ваш шот готовится, приготовьте молоко. Нам нравится использовать около 100 мл цельного молока и добавить около 25 мл половинного молока (10% сливок) для дополнительного сливочно-сладкого привкуса.
                              </li>
                              <br>

                              <li>
                                 Вот секрет фантастического традиционного макиато: вам не нужно нагревать молоко до обычной температуры 65°C (150°F); на самом деле, ваша микропена будет более вкусной и более сладкой, если вы будете готовить на пару только при температуре около 40°С (105°F). И это наша цель — создать микропену, похожую на краску, но не перегреться.
                              </li>
                              <br>

                              <li>
                                Как только паровой кувшин станет чуть-чуть теплым на ощупь, пора заканчивать взбивание молока и приготовление на пару в целом. Это хорошее эмпирическое правило для максимизации сладости молока для вашего напитка. Обратите внимание, что я не погрузил палочку в этот момент.
                              </li>
                              <br>

                              <li>
                                Возьмите здоровую ложку молочной пены и выложите ее прямо на шот эспрессо, создав красивую белую шапку. Если вы заварили двойной шот (как у нас здесь), две порции пены подойдут.
                              </li>
                              <br>

                              <li>
                                Подавайте маккиато с ложкой для демитассе на тот случай, если пьющий захочет что-то размешать, хотя мы рекомендуем пить его не размешивая, для разных вкусовых ощущений от эффекта наслоения. Наслаждайтесь!
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