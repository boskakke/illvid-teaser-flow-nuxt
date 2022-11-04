<template>
  <div class="frontpage">
    <div class="container">

      <!-- <div v-for="item in teasers2.response.items">
    {{ item.title }}
  </div> -->

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

const teasers2 = {
  response: {
    items: [
      {
        "recs-articleid": "288839",
        description: "Fri adgang - hele sommeren gratis!",
        collection: "newsdesk",
        title:
          "NYHED: Få gratis adgang til tusindvis af artikler og dokumentarfilm",
        "og-article-author": "Redaktionen",
        url: "https://illvid.dk/om-illustreret-videnskab/nyhed-faa-gratis-adgang-til-tusindvis-af-artikler-og-dokumentarfilm",
        dominantimage:
          "https://images.bonnier.cloud/files/ill/production/2022/06/09093355/ILL_1440x1080_CuriosityStream_Slider1_DK_v2.jpg",
        dominantthumbnail:
          "https://content-thumbnail.cxpublic.com/content/dominantthumbnail/c6fb77b21d7da7d2edeba199ed8238e8b42f2358.jpg?633d614b",
        campaign: "1",
        testId: "1",
        id: "c6fb77b21d7da7d2edeba199ed8238e8b42f2358",
        placement: "2",
        click_url:
          "https://api.cxense.com/public/widget/click/FcoTJznG1qpuVrD4vEImLsezXgEctXPXEffQdsykViBqiv0n6cDZiNc9Btlg_NvwDolYK8H0_t_DI05QQA20iFDsRyKu1qeqeDjqY2d7diE-i7_evETXmzRigAQhg3vTOsHz-3fdrlggVTcMuQjPYOBOCL54GbxwEuHrThepi3-9yO-C5TBenzBt37b4PX-2vmr_x7ZBu-ofXH1OojNRNb_qgJdBHvkaTLWbSMAW6Ztr-VZ7jM94Wfw1Pn0UQddZyr2k7xBma08EhviYX3Hc0qL3LbkVF31tbz12A1h3ulAGXHWwZOm6Vh7Fa9QOJfnYBFo79nEKWNocHRIGtAAM_8SYmYIPqyiYWZmbXUFweqlCGWntWeRLCEaxpgJJftds0qU1_wB4rveYXCf7lX1gSgUldDr3p0WJ6AxXdhX3wPEl2FjFinQyEgJ9z39dYqRFRWQt6mct9zYCnBM7P8yWanEncarKl4V8WL4hbxAfcwmboBeoEI02k9DrZu5Gv0uYZiBdk0NmCmopfVWlOdzItI6R30ncNRhF58i6HwWOQRKnh1uJMS6QXMgNy5gv2-WTezZ0XCuWbW_4lNAb1PYjj3tvFbeWQlFp51tBjHywELoPogJwJPpztOi7nSwVHBjF_zgIV8cTeZbVluUOVqf1kSdAvHyv0dH3he_hK9R1vWKB-p4xDbvbjjV5KSyaVdcKYC_v70AkxZl4RLvlXr9L-FURE_SQPi7cZYPhH6JicdIo0A0",
        "recs-publishtime": "2022-06-11T22:11:06.000Z",
      },
      {
        "recs-articleid": "287941",
        description:
          "Kunne du tænke dig, at hjælpe os med at vælge navnet til Illustreret Videnskab og Histories nye app?",
        collection: "newsdesk",
        title: "Vælg navnet til vores nye app",
        "og-article-author": "Redaktionen",
        url: "https://illvid.dk/om-illustreret-videnskab/vaelg-navnet-til-vores-nye-app",
        dominantimage:
          "https://images.bonnier.cloud/files/ill/production/2022/06/01155735/shutterstock_1593713521-1-2-1.jpg",
        dominantthumbnail:
          "https://content-thumbnail.cxpublic.com/content/dominantthumbnail/aa2ab77cfcab53a13f013df323aba193ed24b19c.jpg?633e877b",
        campaign: "1",
        testId: "1",
        id: "aa2ab77cfcab53a13f013df323aba193ed24b19c",
        placement: "2",
        click_url:
          "https://api.cxense.com/public/widget/click/zNLLDQShdHVlSr4XvMyy9hI6uuI5BPWIXYqIYS4xYaHPFcuXoQj4-tPiLLcLff1pN4EtvEKvA3BtnWYnb-1n5NQInInsvVKe05yPONzGA4so7EhfMStlVTh-R8XXqPgE4DgRloiKCQW2eKd8xgjanQJiwxYBk9h3-XjBU8hqVUWq8kaZvBRbmYM3N5AXOyfX6OyL4qM7W0Yv0eHHYXHjtxNEU--Xa7L_U5Gc_91PQomuQzXOm6fvcb2ULxenoU1jVXuJzCRnrnGUQD-mx56AN6PNet1qSulYYjBW3qxpowFOid7_jwjsdj255LZDloj-GVRFFFkWfaDBwqj8WkqFtY8A6teE31t99LvA-eVZvxi_WoH1Gq45zCBViWoiNddLS6a8jbotSIhCjIOavNoo0lHvMraFEdOnKO1WL5Wa4G2_vUkU_WnyzG4Yj3Lt_D3wrjB73iS0Ob-MGpkR2QPPRSq_tH5jVjl7qawsXqNMf2ZCYeTn3LJbNZEujmoC_pVberGFhxgXyTfZ9deVEqHILWNf6a4Xh5EqTjPbmsOTtW7GxufSqIwgyXwfxYubhkZPQ1hxinWpXWzrLoEdkb9OPq-5fPXWHUcp770QNj_x9pLKAIVOdF8Qn_cQn3q_aDl7PBwi4lEslQH0zU2XQLqhZmZtjyNIF7qKvNb3p6zJdtqdXbjti9EMinsiAOiQ0",
        "recs-publishtime": "2022-06-02T17:40:31.000Z",
      },
      {
        "recs-articleid": "286897",
        description:
          "Ved München så vi noget fantastisk på himlen, som vi optog på mobilvideo. Er det et meteor, som er ved at bryde gennem atmosfæren?",
        collection: "newsdesk",
        title: "Hvad er det? Læser spotter ildkugle på himlen",
        "og-article-author": "Niels Halfdan Hansen",
        url: "https://illvid.dk/universet/solsystemet/meteor/hvad-er-det-laeser-spotter-ildkugle-paa-himlen",
        dominantimage:
          "https://images.bonnier.cloud/files/ill/production/2022/05/25131925/ildkugle-paa-himlen.jpg",
        dominantthumbnail:
          "https://content-thumbnail.cxpublic.com/content/dominantthumbnail/1138242af9731806ff7795480fc1d9d9ed12ce34.jpg?6362a0aa",
        campaign: "1",
        testId: "1",
        id: "1138242af9731806ff7795480fc1d9d9ed12ce34",
        placement: "2",
        click_url:
          "https://api.cxense.com/public/widget/click/Ol9vXYWVdQ9aQhdzcaM9FIvcglnshJdsbRqNxfAnVxRA-_a3_ANUnB4Gcko0GWVYNiXqS_S67q4_tDGUmiyvr30ujTvYio2Ged8gtWhbJHi4vojLDg1qFtVuQfnTDpyCyZv4ec7t0SPPqI_mBdM8yFfBxWhngqE7ymQK3Wg7zDPgoxtA9aXz7T028w5m1tO_dVHADQgAqw_ojC4JXFXnMp-EGgM5pA3hBUQudFFV1A05t2SeM6x4L0t43Qr8tnOAit4iNgjSIgRbtrmVSei2f1reBp8Kd7mQaX0YAaoU82fHr6mII6zGVZKO67QWnwcmCjCOpnA_rZaHo02Fwg07xtCPDCTWjGJesSv1BLPHZTNvcUpe5tCONgA0xI8QgrfRbM1pU_nGbzRa9vi9n_fw7zuEsBpVgqXqh2Ln3pggVaEIn-7vv_Ngy8WqljeWSf01_f90aZzFb3ixmKkW5c6w8ZfOZU8E_z_p2GtMcc7--6gYpq9bewmCAhJEgdIGv905EohB7DHAzbMgqyXqrFGBX1uina_jhWmbeMbwyHo_bqAaiAPEAdrBKmjmHsTut2SgX4VcMMVBaqo7DHGeGw9TEUHvbJnGg-7CGA7fVhBfvJTEhLTyNBz0aWCu3tqI_9DUj5I7MWtvJFVoF61ngbK6oKDQqit8GRvoVjrCS5sgWjhB_dhNDk9_YRkqEeqjYOHJbGpOeAHXGJHLDV-Uc31ma_A0",
        "recs-publishtime": "2022-05-30T14:27:10.000Z",
      },
      {
        "recs-articleid": "236625",
        description:
          "Stille og eftertænksom eller hurtigsnakkende og impulsiv. Måske en blanding? Test selv om du er introvert eller ekstrovert her i artiklen og find ud af, hvad det betyder for dig.",
        collection: "newsdesk",
        title: "TEST: Er du introvert eller ekstrovert?",
        "og-article-author": "Søren Steensig",
        url: "https://illvid.dk/mennesket/hjernen/er-du-introvert-eller-ekstrovert",
        dominantimage:
          "https://images.bonnier.cloud/files/ill/production/2022/03/21114325/test-introvert-ekstrovert.jpeg",
        dominantthumbnail:
          "https://content-thumbnail.cxpublic.com/content/dominantthumbnail/a489cba1b3214ddaf37761d47ba30885b176728b.jpg?634dbc8b",
        campaign: "1",
        testId: "1",
        id: "a489cba1b3214ddaf37761d47ba30885b176728b",
        placement: "2",
        click_url:
          "https://api.cxense.com/public/widget/click/MaC5Vxm0wtq5lGBN7KdxBXmY5NEOn1tJRib9qnxse0RkgBN2esuaMlYD0jDLdDeLAk2qobwL9rIPKQHby-dyGKYSPkPPXO2307shkwUwVf38OuXyJmu26dJZr8FTuMqYrS0-IHu-kUSb_Z2EgosvgG_YdGASehVkK9BBXkfpnfXE0WC6al_Of6QMjpcVwUj4YYqCuBj9IX5hPB4s0fqhLf9y-AWLY7SPLzvRDOqAE-9nYEkHxHss_m9sISI4PDw1BLnIY8cbBAFkf3z2IkYAYKMoFO_Oxg5uP6cu66ENVA9xXGcI7V6XDkpP35A7vHPGzb_vTET8_zkL3cSME-0Pq4B8N9Yhk8Ve6EhZJn2pqCuYegqHrPALWUhMzYXOz4_bMdHqEcT5STSeujak8Af_xcuiu0xCXfxcknjKIN23xCKdkWIfq3eaYPsOGTdZsgU6YMZea8tKwicFwuPT5Vth8NcdgElW_OoUISN0fV9V73eYBMbXP0WE6e-nJHgAIwQQIseAHTrpBhs1XaMOS68oeVG2Kkgng_ZL3UcCuFG7paY0H9CeNAX-GYk-EQEHUsAVzHNVIwLOCULVSoK0VMGAgdCqLyXV_DNVlnmxp5ikhM2M_YcJLPhOKvi5VOau3SjcsZjCfwI90HuDx-Gj0On8JjQxCIRvmZeBNmU8haXa7zOR-QVkZlrstA0",
        "recs-publishtime": "2022-03-17T09:30:00.000Z",
      },
      {
        "recs-articleid": "235043",
        description:
          "Chefredaktøren har fået en helt ny algoritme, der har udpeget de ti artikler, du synes er mest spændende! Eller hvad ...? Find ud af, om algoritmen er på afveje.",
        collection: "newsdesk",
        title: "Ny algoritme afslører – vistnok – dine ønsker",
        "og-article-author": "Sebastian Relster",
        url: "https://illvid.dk/teknologi/ny-algoritme-afsloerer-dine-hedeste-droemme",
        dominantimage:
          "https://images.bonnier.cloud/files/ill/production/2021/06/16092737/Sebastian-og-data-3.jpg",
        dominantthumbnail:
          "https://content-thumbnail.cxpublic.com/content/dominantthumbnail/3eca523fe1e4cc4b1dcbe97e6eea73de3f2e83e5.jpg?63620f1b",
        campaign: "1",
        testId: "1",
        id: "3eca523fe1e4cc4b1dcbe97e6eea73de3f2e83e5",
        placement: "2",
        click_url:
          "https://api.cxense.com/public/widget/click/d5aYFRa26KbDPJw-MJ1LjiJsQBcsDI2LsU8b2AwLr9t_-m7lv5cjrbfXtr3bplbOyndiIMf27OK8lGtit_MXuOvJA0PYzGPjGSu5ryPYhOa00bED6xOwOxE132t6ZRPuVHsQDbDSDAlPf-eYN3f409UPoycjEjVhGHdLWpciK_FsZcwApky42hgouXrY76QYK8L41TOgsFc-kZ_-8DBnzh4DwP85cebycqDnAzFXRiKKRooAvp_Eblf9kWokL5ntvT5iQ1bcbKGGuXrg1_naX576ccVivhgWQxaGfqIQbmUbFdj3RsDeb2ghhDbDxGyIvjk-42iT3VyZssimYATGhrihWYcdaZCs8YIh_9zKaejVZZ6XyH3eMxavS_4WjgU3eGdLvUElrrvNOl6oS79DylKUokQPc3pg9wfqazIwoFQ_vpRV3mpfmeolZebzhIoQYZkPuScsZttpU4POQIxK6L6JrURjlVl046vUgN38H_VHoFkfUwQrcEqtX9ANfzVvrw3AGGAKwvEUx5u4ebRPjzeVb6j72Vk9mET5B6tjS48RVYQXb4xfEtr4_fNCueEvQgavHqtatU5QuE7whi9qKydR7Ty3w7ebo6nhPchl2ovttVsT1sYxJXtE3L6Qb4FA-4JtwGUFyJibGtgnzga0Um7zhIVxYGnKyNjAIz01rT61Kb_9n2sEJ5oThQ0",
        "recs-publishtime": "2021-06-22T11:03:01.000Z",
      },
    ],
  },
};
const generateArticles = () => {
  // clear titles
  roulette.value.querySelectorAll("div").forEach((elm) => elm.remove());
  const tlDuration = ref(0.1);
  const numberOfSpins = ref(6);

  for (let index = 0; index <= numberOfSpins.value; index++) {
    const title = document.createElement("div");
    title.classList.add("title");
    title.innerText = teasers2.response.items[Math.floor(Math.random() * teasers2.response.items.length)].title;
    roulette.value.append(title);
    if (index == numberOfSpins.value) {
      const mainTL = gsap.timeline();
      const titles = roulette.value.querySelectorAll(".title");
      mainTL.set(read.value, { opacity: 0 });
      titles.forEach((title, i) => {
        const tl = gsap.timeline({ defaults: { duration: tlDuration.value } });
        const delay = "<" + tlDuration.value + 0.05;
        tlDuration.value = tlDuration.value + 0.05;
        tl.fromTo(title, { opacity: 0 }, { opacity: 1, ease: "power2.out" });
        if (i != titles.length - 1) {
          tl.to(title, { opacity: 0, ease: "power2.in" });
        } else {
          mainTL.set(read.value, { opacity: 1 });
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
