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
                    БИЧЕРИН ☕
                </h2>
                <v-divider />
              </slot>
            </div>
            <div class="modal-body">
              <!-- Main content here: -->
              <slot name="body">
                <!-- INGREDIENTS -->
                <div class="bicerin__ingredients-container">
                  <h3 class="header">Ингридиенты:</h3>
                  <ul class="bicerin__ingredients">
                    <li>1/2 чашки крепко заваренного кофе Royal Cup.</li>
                    <li>1/2 чашки готового горячего шоколада.</li>
                    <li>
                      1/4 стакана густых сливок (или взбитых сливок для быстрого приготовления).
                    </li>
                    <li>Шоколадная стружка.</li>
                  </ul>
                </div>
                <hr class="break-line" />
                <!-- // INGREDIENTS // -->

                <!-- STEP-BY-STEP GUIDE -->
                <div class="bicerin__guide-container">
                  <h3 class="bicerin__guide header">Пошаговая инструкция:</h3>
                  <div class="bicerin__guide-steps">
                    <div class="bicerin__guide-first">
                      <ol>
                        <li>
                          Если вы используете густые сливки, поместите пустую банку Мейсона в морозильную камеру, если вы используете взбитые сливки, пропустите шаг.
                        </li>
                        <br>
                        <li>Приготовьте кофейник или чашку кофе Royal Cup.</li>
                        <br>
                        <li>
                           Пока варится кофе, приготовьте чашку шоколада (подойдет любой домашний или готовый горячий шоколад).
                        </li>
                        <br>
                        <li>
                           На дно кружки на 1/3 налить приготовленный горячий шоколад.
                        </li>
                        <br>
                        <li>
                          Медленно налейте кофе в кружку. Наполнение кофейной кружки на 1/3
                        </li>
                        <br>
                        <li>
                          Поместите жирные сливки в охлажденную банку и запечатайте.
                        </li>
                        <br>
                        <li>Взбивайте, пока крем слегка не загустеет</li>
                        <br>
                        <li>
                          Медленно налейте сливки в кофейную кружку и залейте оставшуюся часть кофейной кружки.
                        </li>
                        <br>
                        <li>Посыпать шоколадной стружкой.</li>
                        <br>
                        <li>Насладиться напитком!</li>
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
