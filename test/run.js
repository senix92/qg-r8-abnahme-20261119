import { add, sub } from '../src/calc.js'
const t = [['add(2,3)=5', add(2, 3) === 5], ['sub(5,3)=2', sub(5, 3) === 2]]
let bad = 0
for (const [n, ok] of t) { console.log((ok ? 'ok ' : 'not ok ') + n); if (!ok) bad++ }
process.exit(bad ? 1 : 0)
