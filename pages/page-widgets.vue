<template>
  <div :class="cat" class="deck-grid">
    <div class="catselector">
      <select v-model="cat" class="cat">
        <option value="cat-gray">Default (Gray)</option>
        <option value="cat-climate">Climate</option>
        <option value="cat-health">Health</option>
        <option value="cat-physics">Physics</option>
        <option value="cat-human">Human</option>
        <option value="cat-technology">Technology</option>
        <option value="cat-nature">Nature</option>
        <option value="cat-space">Space</option>
      </select>
    </div>

    <div class="main-grid"><h1 class="main-grid--12col">Page widgets</h1></div>
    <div class="main-grid"><h2 class="main-grid--12col">SEO text</h2></div>
    <SeoText title="Lorem ipsum dolor sit" />

    <div class="main-grid">
      <h2 class="main-grid--12col">SEO text w. tags</h2>
    </div>
    <SeoText>
      <CategoryTags class="mt-6 mb-6" />
    </SeoText>

    <div class="main-grid">
      <h2 class="main-grid--12col">Teaser List <span>Presentation</span></h2>
    </div>

    <TeaserList type="presentation" title="Hvad er klimaforandringer?" description />

    <div class="main-grid">
      <div class="main-grid--12col">
        <h2>Teaser List <span>Presentation</span></h2>
        <p>with Background-image</p>
      </div>
    </div>
    <TeaserList
      type="presentation"
      title="Hvad betyder grøn revolution for vores fremtid?"
      description
      backgroundImage="https://images-bonnier.imgix.net/files/ill/production/2019/03/19143852/universet.jpg?h=1024&q=60&auto=format"
    />
    <div class="main-grid">
      <div class="main-grid--12col">
        <h2>Teaser List <span>Theme</span></h2>
      </div>
    </div>
    <Theme :teaser="teaserList[3]" />

    <div class="main-grid">
      <div class="main-grid--12col">
        <h2>Teaser List <span>Latest news slider</span></h2>
      </div>
    </div>

    <TeaserList type="latest" title="Seneste nyt"  />

    <div class="main-grid">
      <div class="main-grid--12col">
        <h2>Teaser List <span>Numbered</span></h2>
      </div>
    </div>

    <TeaserList type="toplist" title="Populært lige nu"  />
  </div>
</template>

<script setup>
const active = ref(false);
const cat = ref("cat-gray");
const config = useRuntimeConfig();
const teasers = await useNuxtApp().$articleFetch(
  `/wp-json/wp/v2/pages/${config.FRONTPAGE_ID}?with=contents,teasers,ancestor,contents.content.teasers.vocabularies`
);

const teaserList = ref(teasers.data.contents.data[0].content.data.teasers.data);
</script>

<style lang="scss" scoped>
.vars {
  position: fixed;
  z-index: 2;
  background: #fff;
}
.flex {
  margin: var(--space-6) 0;
  display: flex;
  gap: 1rem;
}
code {
  display: block;
  font-size: var(--font-3);
  margin: var(--space-7) 0 var(--space-2);
}
.black {
  padding: 1rem 2rem;
  background: var(--c-body);
  display: inline-block;
}

h2 {
  margin-top: var(--space-8);
  span {
    font-weight: 400;
    font-style: italic;
  }
}
</style>
