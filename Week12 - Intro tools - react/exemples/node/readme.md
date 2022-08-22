# Node

- Ne ajuta sa rulam cod de javascript fara browser
- Nu avem acces la DOM
- Dar avem setTimeout, setInterval, fetch, etc.
- Putem acces fisiere, sa scriem in fisiere
- Npm ne permite sa gestionam packages ( librari de js )
   - `npm init` => va crea un fisier package.json
   - `npm install [numele package]` => va descarca si instaleaza un package
        - va descarca tot codul in folderul node_modules
  - `npm uninstall [numele package]` => va sterge un package
  - `npm install` => va descarca toate package-urile care sunt in package.json la sectiune `dependencies`


# Javascript interpretabil
Javascript este un limbaj interpretabil ( python este la fel )
"JavaScript runtime" este un soft care transforma instructiuni din javascript in cod executabil

C/C++ sunt limbaje compilate => codul este transformat intr-un limbaj aproape de CPU ( assembly )
Ca sa rulam cod C/C++, trebui sa facem compilere inaite la codul nostru
