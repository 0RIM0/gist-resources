import fs from "node:fs"
import path from "node:path"

const targets = [
	{ src: "apps/root/dist", dest: "_pages_" },
	{ src: "apps/one/dist", dest: "_pages_/one" },
	{ src: "apps/two/dist", dest: "_pages_/two" },
]

for (const { src, dest } of targets) {
	if (fs.existsSync(src)) {
		fs.mkdirSync(path.dirname(dest), { recursive: true })
		fs.renameSync(src, dest)
		console.log(`Moved: ${src} -> ${dest}`)
	} else {
		console.warn(`Skipped (not found): ${src}`)
	}
}
