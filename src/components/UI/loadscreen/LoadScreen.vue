<template>
  <div id="root">
    <div class="text-center">
      <v-overlay v-bind="stopLoading()" :value="loading" opacity="1">
        <div id="loading-screen">
          <p>Coffee Time</p>
          <v-img 
            class="logo" 
            src="./logo.png"
            contain                                     
          > </v-img>
        </div>
      </v-overlay>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: true,

    stopLoading() {
        setTimeout(() => {
            this.loading = false
        }, 1500)
    }
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
* {
  margin: 0;
  padding: 0;
}

#root {
  font-family: "Pacifico";
  font-size: 50px;
}

#loading-screen {
  display: flex;
  justify-content: space-around;
  flex-direction: row;

  width: 100vw;
}
.logo {
  height: 70px;
  width: 70px;

  margin-left: 15px;
}

@media screen and (min-width: 320px) {
  #loading-screen {
   flex-direction: column;
   align-items: center; 
  }
}
</style>