# Modules JS

Un fisier este un modul JS

```js
function test() {
  var a = 10; // a are scopul doar in interiorul functiei
}
```

Modulele ne ajuta sa putem scalam un proiect => sa avem 1000k de fisiere daca vrem fara probleme de scope

```js
// file1.js
// scopul lui a este doar in file1.js
const a = 10;

import { b } from "file2.js";
const c = a + b;
```

```js
// file2.js
const b = 20;
const c = 10;
// file2 exporta variabila b => un alt fisier poate importa variabila b
export { b };
```

Ce exportam din file2.js poate fi important in orice alt fisier de js

# Export default

Putem avea un singur export default per fisier

```js
// file1.js
const getNumber = () => {
  return 10;
};
const a = 10;
export {
  a as altNume, // schimbam numele variabilei a in altNume
};
export default getNumber;
```

La export default, cand facem importul putem da orice nume dorim noi
Exportul cu {}, este strans legat de denumirea variabilei

```js
// file2.js
import getMyNumber, { altNume } from "file1.js";

getMyNumber(); // returneaza 10
```

Ca sa functioneze module in browser trebuie sa avem atributul "type" cu valoare "module"

```html
<script type="module" src="./file3.js"></script>
```

# Rename import/export
Rename se poate face cu "as" , atata la import, cat si la export

```js
// file1.js
const a = 10;
export {
  a as altNume, // schimbam numele variabilei a in altNume
};
```

```js
// file2.js
import { altNume as c } from "file1.js";

console.log(c) // returneaza 10
```
