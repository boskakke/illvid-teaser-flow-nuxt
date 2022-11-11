<template>

  <div class="deck-grid" :class="cat">

     <div class="catselector">
    <select v-model="cat" class="cat  ">
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
    
    <TeaserList type="toplist" title="Populært lige nu" hideDescription />

    <TeaserList
      type="latest"
      title="Seneste nyt"
      hideDescription
    />

    <TeaserList type="presentation" title="Hvad er klimaforandringer?" />
  </div>
</template>
<script setup>
const cat = ref("cat-gray");
</script>