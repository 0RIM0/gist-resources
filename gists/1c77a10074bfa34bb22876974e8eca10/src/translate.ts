import { computed, signal } from "@preact/signals"

const active_lang = signal("ja")

export const setLang = (lang: string) => {
	active_lang.value = lang
}

export const T = (source: string | Record<string, string>) => {
	return computed(() => {
		if (typeof source === "string") return source
		if (active_lang.value in source) return source[active_lang.value]
		throw new Error("language data not found")
	})
}
