<template>
  <div class="frontpage">
    <div class="container">
      <h1 class="roulette-h1">Velkommen til artikel rouletten</h1>
      <div class="roulette-wrapper">
        <div class="roulette" ref="roulette"></div>
        <div class="roulette-wrapper--footer">
          <button ref="read" style="opacity: 0" class="read">
            Læs artiklen
          </button>
        </div>
      </div>

      <div class="roulette-controls">
        <button @click="generateArticles">Spin!</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
const roulette = ref(null);
const read = ref();
const intro = ref("Bliv lidt klogere hver dag...");
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
  "Er hestekød sundere end oksekød?",
  "Spørg videnskaben: Hvorfor taber træerne deres blade?",
  "Ny supermagt på fremmarch i rummet",
  "Ny supervulkan er opdaget i Nordamerika",
  "Ny forskning kan gøre os klogere på universets mest gådefulde objekter",
  "Kom tæt på verdens længste slange",
  "Kan det virkelig passe, at piratfisk kan fortære dig på fem minutter?",
  "Ældgamle spor af liv kan lure under overfladen på Mars",
  "Sådan får kvinder bedst en orgasme",
  "Sådan kan forskere spotte demens næsten 10 år før selve diagnosen",
  "Ukendt dyreart fundet i 35 millioner år gammelt rav",
  "Nyt kort afslører kræftens svage punkt",
  "Gyserfilm KAN faktisk slå dig ihjel",
  "WHO advarer mod ny pandemi-trussel",
  "Tikkende klimabombe ligger skjult i isen",
  "Kan en forskrækkelse virkelig kurere hikke?",
  "Stilethæl tværer elefantfod",
  "Forskere: Så mange kopper kaffe bør du drikke hver dag",
  "Derfor er menstruationssmerter så pinefulde",
  "Kan en forskrækkelse virkelig kurere hikke?",
  "Forskere har opdaget en helt ny hybridvirus",
  "Tag testen: Hvad scorer du på de ni mørke træk?",
  "Forskere: Gråt hår kan faktisk genvinde sin farve",
  "WHO advarer mod ny pandemi-trussel",
  "Nyt kort afslører kræftens svage punkt",
  "Hvor skadeligt er det at gå i solarie?",
  "Salmonella",
  "Videnskabens største kontroverser: Italiensk læge vil transplantere et hoved",
  "Så meget strøm og vand sparer øko-programmet",
  "Se billederne: NASA afslører ekstreme formationer fra rummet",
  "Hvad er kastanjer?",
  "Her er de største CO2-syndere",
  "Bitcoin belaster klimaet mere end kødproduktion",
  "Ny supermagt på fremmarch i rummet",
  "Ny forskning kan gøre os klogere på universets mest gådefulde objekter",
  "Ældgamle spor af liv kan lure under overfladen på Mars",
  "Nu vender vi tilbage til planeternes iskolde outsider",
  "Ny opdagelse kan få forskere til at lede efter liv i rummet helt nye steder",
  "Derfor har din IQ stor betydning",
  "Hvad er den højeste IQ?",
  "IQ: Hvem opfandt IQ-testen?",
  "Her er verdens højeste IQ'er",
];

const generateArticles = () => {
  // clear titles
  roulette.value.querySelectorAll("div").forEach((elm) => elm.remove());
  const tlDuration = ref(0.1);
  const numberOfSpins = ref(6);

  for (let index = 0; index <= numberOfSpins.value; index++) {
    const title = document.createElement("div");
    title.classList.add("title");
    title.innerText = teasers[Math.floor(Math.random() * teasers.length)];
    roulette.value.append(title);
    if (index == numberOfSpins.value) {
      const mainTL = gsap.timeline();
      const titles = roulette.value.querySelectorAll(".title");
			mainTL.set(read.value, {opacity: 0})
      titles.forEach((title, i) => {
        const tl = gsap.timeline({ defaults: { duration: tlDuration.value } });
        const delay = "<" + tlDuration.value + 0.05;
        tlDuration.value = tlDuration.value + 0.05;
        tl.fromTo(title, { opacity: 0 }, { opacity: 1, ease: "power2.out" });
        if (i != titles.length - 1) {
          tl.to(title, { opacity: 0, ease: "power2.in" });
        } else {
          mainTL.set(read.value, {opacity: 1})
        }
        mainTL.add(tl, ">");
      });
    }
  }
};
</script>

<style lang="scss">
.roulette-h1 {
  text-align: center;
}
.roulette-wrapper {
	margin: 0 auto;
	width: 600px;
	display: flex;
	flex-direction: column;
	position: relative;
	&--footer {
		display: flex;
		justify-content: center;
	}
}
.roulette {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  
  flex-wrap: nowrap;
  position: relative;
  &-controls {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
  }
  .title {
    width: 100%;
    padding: 15%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-weight: 600;
  }
}
.timer {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  font-size: 0.5rem;
}
</style>
