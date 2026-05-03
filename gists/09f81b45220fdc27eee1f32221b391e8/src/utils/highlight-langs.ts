import type { LanguageRegistration } from "shiki/core"
import bat from "@shikijs/langs/bat"
import csharp from "@shikijs/langs/csharp"
import css from "@shikijs/langs/css"
import csv from "@shikijs/langs/csv"
import diff from "@shikijs/langs/diff"
import docker from "@shikijs/langs/docker"
import gleam from "@shikijs/langs/gleam"
import go from "@shikijs/langs/go"
import html from "@shikijs/langs/html"
import ini from "@shikijs/langs/ini"
import javascript from "@shikijs/langs/javascript"
import json from "@shikijs/langs/json"
import json5 from "@shikijs/langs/json5"
import jsonc from "@shikijs/langs/jsonc"
import jsonl from "@shikijs/langs/jsonl"
import jsx from "@shikijs/langs/jsx"
import kdl from "@shikijs/langs/kdl"
import markdown from "@shikijs/langs/markdown"
import php from "@shikijs/langs/php"
import powershell from "@shikijs/langs/powershell"
import python from "@shikijs/langs/python"
import ruby from "@shikijs/langs/ruby"
import rust from "@shikijs/langs/rust"
import shellscript from "@shikijs/langs/bash"
import sql from "@shikijs/langs/sql"
import toml from "@shikijs/langs/toml"
import tsv from "@shikijs/langs/tsv"
import tsx from "@shikijs/langs/tsx"
import typescript from "@shikijs/langs/typescript"
import vue from "@shikijs/langs/vue"
import vue_html from "@shikijs/langs/vue-html"
import xml from "@shikijs/langs/xml"
import yaml from "@shikijs/langs/yaml"

export const langs = [
	bat,
	csharp,
	css,
	csv,
	diff,
	docker,
	gleam,
	go,
	html,
	ini,
	javascript,
	json,
	json5,
	jsonc,
	jsonl,
	jsx,
	kdl,
	markdown,
	php,
	powershell,
	python,
	ruby,
	rust,
	shellscript,
	sql,
	toml,
	tsv,
	tsx,
	typescript,
	vue,
	vue_html,
	xml,
	yaml,
]

// 通常使わないマイナー言語は必要に応じて動的にインポートする
// ビルド結果が重くなるので CDN から
export const dynamic_langs = {
	"angular-html": () => import("https://esm.run/@shikijs/langs@3.23.0/angular-html"),
	"angular-ts": () => import("https://esm.run/@shikijs/langs@3.23.0/angular-ts"),
	asciidoc: () => import("https://esm.run/@shikijs/langs@3.23.0/asciidoc"),
	astro: () => import("https://esm.run/@shikijs/langs@3.23.0/astro"),
	awk: () => import("https://esm.run/@shikijs/langs@3.23.0/awk"),
	blade: () => import("https://esm.run/@shikijs/langs@3.23.0/blade"),
	c: () => import("https://esm.run/@shikijs/langs@3.23.0/c"),
	clojure: () => import("https://esm.run/@shikijs/langs@3.23.0/clojure"),
	cmake: () => import("https://esm.run/@shikijs/langs@3.23.0/cmake"),
	cobol: () => import("https://esm.run/@shikijs/langs@3.23.0/cobol"),
	codeql: () => import("https://esm.run/@shikijs/langs@3.23.0/codeql"),
	coffee: () => import("https://esm.run/@shikijs/langs@3.23.0/coffee"),
	"common-lisp": () => import("https://esm.run/@shikijs/langs@3.23.0/common-lisp"),
	cpp: () => import("https://esm.run/@shikijs/langs@3.23.0/cpp"),
	crystal: () => import("https://esm.run/@shikijs/langs@3.23.0/crystal"),
	cue: () => import("https://esm.run/@shikijs/langs@3.23.0/cue"),
	d: () => import("https://esm.run/@shikijs/langs@3.23.0/d"),
	dart: () => import("https://esm.run/@shikijs/langs@3.23.0/dart"),
	dotenv: () => import("https://esm.run/@shikijs/langs@3.23.0/dotenv"),
	elixir: () => import("https://esm.run/@shikijs/langs@3.23.0/elixir"),
	elm: () => import("https://esm.run/@shikijs/langs@3.23.0/elm"),
	"emacs-lisp": () => import("https://esm.run/@shikijs/langs@3.23.0/emacs-lisp"),
	erb: () => import("https://esm.run/@shikijs/langs@3.23.0/erb"),
	erlang: () => import("https://esm.run/@shikijs/langs@3.23.0/erlang"),
	fish: () => import("https://esm.run/@shikijs/langs@3.23.0/fish"),
	fsharp: () => import("https://esm.run/@shikijs/langs@3.23.0/fsharp"),
	graphql: () => import("https://esm.run/@shikijs/langs@3.23.0/graphql"),
	groovy: () => import("https://esm.run/@shikijs/langs@3.23.0/groovy"),
	hack: () => import("https://esm.run/@shikijs/langs@3.23.0/hack"),
	haml: () => import("https://esm.run/@shikijs/langs@3.23.0/haml"),
	handlebars: () => import("https://esm.run/@shikijs/langs@3.23.0/handlebars"),
	haskell: () => import("https://esm.run/@shikijs/langs@3.23.0/haskell"),
	haxe: () => import("https://esm.run/@shikijs/langs@3.23.0/haxe"),
	hcl: () => import("https://esm.run/@shikijs/langs@3.23.0/hcl"),
	java: () => import("https://esm.run/@shikijs/langs@3.23.0/java"),
	jinja: () => import("https://esm.run/@shikijs/langs@3.23.0/jinja"),
	julia: () => import("https://esm.run/@shikijs/langs@3.23.0/julia"),
	kotlin: () => import("https://esm.run/@shikijs/langs@3.23.0/kotlin"),
	latex: () => import("https://esm.run/@shikijs/langs@3.23.0/latex"),
	lua: () => import("https://esm.run/@shikijs/langs@3.23.0/lua"),
	luau: () => import("https://esm.run/@shikijs/langs@3.23.0/luau"),
	make: () => import("https://esm.run/@shikijs/langs@3.23.0/make"),
	mdx: () => import("https://esm.run/@shikijs/langs@3.23.0/mdx"),
	mermaid: () => import("https://esm.run/@shikijs/langs@3.23.0/mermaid"),
	mojo: () => import("https://esm.run/@shikijs/langs@3.23.0/mojo"),
	moonbit: () => import("https://esm.run/@shikijs/langs@3.23.0/moonbit"),
	nginx: () => import("https://esm.run/@shikijs/langs@3.23.0/nginx"),
	nim: () => import("https://esm.run/@shikijs/langs@3.23.0/nim"),
	nushell: () => import("https://esm.run/@shikijs/langs@3.23.0/nushell"),
	"objective-c": () => import("https://esm.run/@shikijs/langs@3.23.0/objective-c"),
	"objective-cpp": () => import("https://esm.run/@shikijs/langs@3.23.0/objective-cpp"),
	ocaml: () => import("https://esm.run/@shikijs/langs@3.23.0/ocaml"),
	pascal: () => import("https://esm.run/@shikijs/langs@3.23.0/pascal"),
	perl: () => import("https://esm.run/@shikijs/langs@3.23.0/perl"),
	plsql: () => import("https://esm.run/@shikijs/langs@3.23.0/plsql"),
	postcss: () => import("https://esm.run/@shikijs/langs@3.23.0/postcss"),
	powerquery: () => import("https://esm.run/@shikijs/langs@3.23.0/powerquery"),
	prolog: () => import("https://esm.run/@shikijs/langs@3.23.0/prolog"),
	proto: () => import("https://esm.run/@shikijs/langs@3.23.0/proto"),
	pug: () => import("https://esm.run/@shikijs/langs@3.23.0/pug"),
	purescript: () => import("https://esm.run/@shikijs/langs@3.23.0/purescript"),
	r: () => import("https://esm.run/@shikijs/langs@3.23.0/r"),
	racket: () => import("https://esm.run/@shikijs/langs@3.23.0/racket"),
	raku: () => import("https://esm.run/@shikijs/langs@3.23.0/raku"),
	regexp: () => import("https://esm.run/@shikijs/langs@3.23.0/regexp"),
	scala: () => import("https://esm.run/@shikijs/langs@3.23.0/scala"),
	scheme: () => import("https://esm.run/@shikijs/langs@3.23.0/scheme"),
	scss: () => import("https://esm.run/@shikijs/langs@3.23.0/scss"),
	smalltalk: () => import("https://esm.run/@shikijs/langs@3.23.0/smalltalk"),
	"ssh-config": () => import("https://esm.run/@shikijs/langs@3.23.0/ssh-config"),
	svelte: () => import("https://esm.run/@shikijs/langs@3.23.0/svelte"),
	swift: () => import("https://esm.run/@shikijs/langs@3.23.0/swift"),
	systemd: () => import("https://esm.run/@shikijs/langs@3.23.0/systemd"),
	tcl: () => import("https://esm.run/@shikijs/langs@3.23.0/tcl"),
	terraform: () => import("https://esm.run/@shikijs/langs@3.23.0/terraform"),
	tex: () => import("https://esm.run/@shikijs/langs@3.23.0/tex"),
	twig: () => import("https://esm.run/@shikijs/langs@3.23.0/twig"),
	vb: () => import("https://esm.run/@shikijs/langs@3.23.0/vb"),
	wasm: () => import("https://esm.run/@shikijs/langs@3.23.0/wasm"),
	xsl: () => import("https://esm.run/@shikijs/langs@3.23.0/xsl"),
	zig: () => import("https://esm.run/@shikijs/langs@3.23.0/zig"),
} as unknown as Record<string, Promise<LanguageRegistration[]>>
