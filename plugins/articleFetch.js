import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig()
	// nuxtApp.provide('articleFetch', $fetch.create({baseURL: 'https://api.illvid.dk'}))
	nuxtApp.provide('articleFetch', $fetch.create({baseURL: config.API_URL}))
})
