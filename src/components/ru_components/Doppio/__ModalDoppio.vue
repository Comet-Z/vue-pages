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
                    ДОППИО ☕
                </h2>
                <v-divider />
              </slot>
            </div>
            <div class="modal-body">
                <!-- Main content here: -->
              <slot name="body">
                <!-- INGREDIENTS -->
                <div class="doppio__ingredients-container">
                    <h3 class="header">Ингредиенты:</h3>
                        <ul class="doppio__ingredients">
                            <li>2 порции Эспрессо</li>
                        </ul>     
                </div>
                <hr class="break-line">
                <!-- // INGREDIENTS // -->

                <!-- STEP-BY-STEP GUIDE -->
                <div class="doppio__guide-container">
                    <h3 class="doppio__guide header">Пошаговая инструкция:</h3>
                    <div class="doppio__guide-steps">
                        <div class="doppio__guide-first">
                            <ol>
                                <li>
                                    Сначала вам нужно смолоть эспрессо до консистенции, которая будет фильтроваться через вашу кофемашину. Это должен быть мелкий помол, который дает порошкообразный результат, а не средний помол, который используется для аэропресса, кемекса или других типов кофейников, которые требуют чрезмерного надувания. Использование давления воды имеет важное значение для достижения наилучшего вкуса.
                                </li>
                                <br>
                                <li>
                                    Сделайте два отдельных количества, которые поместятся в ваш портафильтр, и утрамбуйте содержимое, чтобы оно было слегка упаковано. Остальная часть работы связана с ожиданием приготовления эспрессо. После этого вы добавляете новую порцию эспрессо в портафильтр и повторяете ту же экстракцию.
                                </li>
                                <br>
                                <li>
                                    Если у вас есть эспрессо-кофеварка с ручным насосом, вам нужно будет сделать несколько повторных толчков для создания давления. Это не только позволяет создать давление во время фильтрации эспрессо, но и добавляет более богатую пенку, которая придает эспрессо больше свежести. Эту технику использовал Эрик Фавр, который путешествовал по Италии, чтобы узнать секреты того, что делает вкус эспрессо превосходным. Его тяжелая работа и внимание к деталям (при небольшой мотивации его жены-итальянки) привели к изобретению кофемашины Nespresso.
                                </li>
                                <br>
                                <li>
                                   Когда вы закончите, просто добавьте в доппио сахар или молоко. Наслаждайтесь Вашим напитком.
                                </li>
                            </ol>
                        </div>

                       <hr class="break-line">

                       <div class="doppio__guide-second">
                            
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