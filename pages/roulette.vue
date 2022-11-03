<template>
  <div class="frontpage">
    <div class="container">
      <h1>Velkommen til artikel rouletten</h1>
      <div class="roulette">{{ roulette }} </div>
      <div class="timer">{{ delay }} </div>
			<button @click="pickArticle">Spin!</button>
			<button>Læs artiklen</button>
    </div>
  </div>
</template>

<script setup>
const roulette = ref("");
const teasers = [
  "Kæmpe undersøgelse: Så mange skridt skal du gå om dagen for at leve længere Sundhed",
  "Gåde er løst: I 50 år var rum-guldfisk umulig at placere i evolutionen Havdyr",
  "Nye forsøg afslører hemmeligheden bag mænds sexlyst Sex",
  "Får du gigt af at knække fingre? Her er svaret Sundhed",
  "Ny undersøgelse: Derfor er noget hår umuligt at tæmme Mennesket",
  "Er det billigst at have lyset tændt konstant? Teknologi",
  "Forskere: Her er den største asteroide, der nogensinde har ramt Jorden Jorden",
  "Mammutterne skal rejses fra de døde Fortidsdyr",
  "Ekspert: Her er vores største klimaudfordring Klimaforandringer",
  "På sporet af en massemorder: Ukendt megavulkan formørkede kloden Vulkaner",
  "Guide til opdragelse: Hårde ord nedbryder hjernen Hjernen",
];

const delay = ref(100);

const pickArticle = () => {
  const id = Math.floor(Math.random() * teasers.length);
  roulette.value = teasers[id];
	window.navigator.vibrate(200);
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const run = async () => {
  for (let index = 0; index <= 10; index++) {
    pickArticle();
    delay.value = (index > 8) ? delay.value * 1.5 : delay.value * 1.1 ;
    await wait(delay.value);
  }
};


</script>

<style lang="scss">
.timer {
	position: fixed;
	bottom: 1rem;
	left: 1rem;
	font-size: .5rem;
}
</style>
