
<script setup>

const active = ref();
const isSpecial = ref(false)

onMounted(() => {
  // isSpecial.value = !!data.find(x => x.slug == 'special')
  isSpecial.value = data.some((x) => x.name === 'special')
})

const data = [
  {
    id: 1,
    name: "special",
    slug: "special",
  },
  {
    id: 2,
    name: "tagname1",
    slug: "tagname1",
  },
  {
    id: 2,
    name: "tagname2",
    slug: "tagname2",
  },
  {
    id: 2,
    name: "tagname3",
    slug: "tagname3",
  },
];

</script>