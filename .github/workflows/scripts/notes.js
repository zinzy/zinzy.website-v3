import fs from 'fs'

const datetime = process.argv[2]
const content = process.argv[3]
const alphabets = [...'umoacenrvwz']
const idx = fs.readdirSync('content/updates').filter(p => p.startsWith(datetime.split(' ')[0])).length
const a = alphabets[idx]
const filePath = `content/updates/${datetime.split(' ')[0]}-${a}${a}.md`
const postContent = `---
title: ""
date: ${datetime}
---

${content}
`

fs.writeFileSync(filePath, postContent)