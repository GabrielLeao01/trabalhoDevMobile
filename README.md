# Vrumtech

## Sobre o app

O **Vrumtech** é um aplicativo mobile criado para auxiliar proprietários de veículos no controle e monitoramento das manutenções necessárias de acordo com a quilometragem atual do veículo.

### Funcionalidades prioritárias:
- Cadastramento de veículos;
- Página com informações sobre as próximas trocas a fazer;
- Atualização da quilometragem a cada abastecimento.

### Funcionalidades futuras:
- Mapa com oficinas próximas ao usuário.

### Checklist de funcionalidades (atualizar a cada checkpoint):
- [ ] Criar banco de dados e tabelas
- [ ] Popular tabelas de veículos e manutenções com dados para testes futuros
- [ ] Testar relacionamento das tabelas
- [ ] Criar tela de cadastramento de veículos
- [ ] Criar tela de atualização de quilometragem através do abastecimento
- [ ] Criar tela de próximas manutenções a fazer
- [ ] Testar as funcionalidades
- [ ] Criar interface com mapa de oficinas próximas (extra)

---

## Protótipos de tela

O protótipo de telas foi inicialmente desenvolvido em outra disciplina e servirá como base para a interface deste projeto.

🔗 **Link para o Figma (visualização pública):**  
[Protótipos no Figma](https://www.figma.com/design/eh0SG2Q1qbUevIKWDzY4Ed/Intro-to-HCI?node-id=0-1&t=eNgFM7hwkjlQWqOQ-1)

---

## Modelagem do banco

A modelagem do banco de dados atualmente está baseada em um modelo relacional com tabelas para veículos e manutenções.

[![Visualizar Modelagem](https://img.shields.io/badge/Diagrama-Visualizar_Modelagem-blue?style=for-the-badge&logo=drawio)]([https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Diagrama%20Vrumtech.png&dark=auto#R%3Cmxfile%3E%3Cdiagram%20...%3C%2Fdiagram%3E%3C%2Fmxfile%3E](https://viewer.diagrams.net/index.html?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Diagrama%20Vrumtech.png&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22P%C3%A1gina-1%22%20id%3D%22FEhoowDg-bCpiBZ3RUDK%22%3E7V1dc5w2FP01PKazINi1Hw1J20ydaceup48dBWTQjEBEaLO7%2FvWVQOyXgg12F3CkGU8Cd8Vd0D1XB50r2Q6I8u1vDJbZF5og4niLZOuAj47nub63FP9Jy66xrFarxpAynKhGB8M9fkLKuFDWNU5QddKQU0o4Lk%2BNMS0KFPMTG2SMbk6bPVJy%2Bq0lTJFmuI8h0a3%2F4IRnyuotFocPfkc4zdqvvvbUJzlsWytDlcGEbo5M4JMDIkYpb47ybYSI7L22Y5rrfu34dH9nDBW8zwU3kbfYPQH4DdzdfP%2BcXv25%2B%2FDwQXn5DslaPfFDtXYi4Ny4DFN143zXdod4hlIecvhVmsKKQ8ZV1MBCGEQcOMQFYsLg1ueEwLLCdfPGkmGS3MIdXfPWUXsWPuItSu6aoMm2In63wpk8lc4fhfN7dTPyY0hwWojjWPSA%2FMaQoUrcyy2suGqR8ZyoQ%2FWgiHG07exBdx8XgWhEc8TZTjRRF4ClCqUCs7tS55sjaFwpW3aMCl8ZoYJjuvd9CJg4UDEbED9Pi9%2FzMbuTCAwzyvCTjBRRPXscx%2Fp8g3MCCwFtmJyZQlrnch0PTEhECZXBLmiBtHjLRgmj5d%2BQpYgrQ0lxwet%2BCELxI3omWvwSOIG410icu4dz8SObMx7RouJM4Er6QCK8GyRDHHJaKqcEPbb%2Bmep3efyVck7zIQjozhIdFgoGoCcKwKVAADQQ%2FPVHJwzEw3IMyZ0YLWGRkiZo9eAJD0H7QWR%2F2Nf7%2Fj3v%2BPNUpaLbH0k9%2FGU4SZBI23CTYY7uSxjLRhvBH69I2O6k0MN1FB8wMDzK2aHTBnuDRAxRBeQif9ZFUmkx39%2Fn62HgazD4%2FHFiGLQjdNM2rESwcZHeNlcuz3ASzAQnW6czrYP%2FFTe93I0AnMCSSC8SWVyQRJZTk8iyPwjGGTtQglt%2FozNIYCaDrDQMoBxiMncSmQM0jCONK0sak5PG9dSkcW1J4ywjzCONVqo7AkGFigxa1ngZG8axhqsLjpY2xqYN1%2BvJG96leMMdoFv%2B%2FMThdoTrhbH%2BuegMZ45zb2MMBrpwaUmjBy4GssbrcdLL3RhA0RWqSFb3que5wzGtQLVsYzO4QBVcbKQfoCsZTfhvHCo6ZIm5lKhcXVoyu0bV5IWBs0VdN6qH8n%2FFVTPn%2FklrVV14MW8GOUBzMppQ3jiDfJ5QJi9XtW8685k7TDqDvDaTTTxdTsohi6322AccxlFHO0RY6piSOiYvWnmzk52mpI7m4Q2kDn25XC6Xr3cvejaRO7rQYR532EVyM%2BCO3pWry5GHXSenZYWB5KHLmbCwzNEHGuYxR4fiWT1Ua2g3WZ0Dwz%2FbZAX6Sk2Xq2F5VnIco4bldSySmksNq3Vsa1gneWEe%2BwNddYzrGta6GdFtLet1uDHu1QBYQXKMSeULxDJ5LQtYQVJLCgNZRRck3w%2BfzAIh5vGHFSVnwB%2BTF7SA1SS1pDCQP3RNMn4nK%2BtmgQ%2Fz2MNu4Z0Be0xf0gJ2F6%2BWFebRR%2Fsryo5Q8G2NSe0Xpii3HNIDJMZxiK8rWF9gseai%2B%2BUvEVzJf8MA2Y1aZxu12jnDfIpc%2FgARyui3gbeNHH6HdjGXIpevq1BmF7mavDDwfUDXlt7LdHLS4lYXXsx7NbA7f8eYXr5AKJMXt3xdlpp4%2FJhydukbuu3X17UmO7scChLzKMQuvJsBhUxe32rRaCnkkBTmUUigr7orGRapnsAEWf7ogRDj%2BCPQ1UnLH6Pzx%2FQVrsAusNOywkAC0aXNBFUxwzG0W7f6AOQn4g9xevjLW03zwx8wA5%2F%2BAw%3D%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E#%7B%22pageId%22%3A%22FEhoowDg-bCpiBZ3RUDK%22%7D))

## Planejamento de sprints

O desenvolvimento do Vrumtech será dividido em duas sprints mensais:

### 📅 Maio
- Criar banco de dados e tabelas (**1 semana**)
- Popular tabelas de veículos e manutenções com dados para testes futuros (**0.5 semana**)
- Testar relacionamento das tabelas (**0.5 semana**)
- Criar tela de cadastramento de veículos (**2 semanas**)

### 📅 Junho
- Criar tela de atualização de quilometragem através do abastecimento (**1 semana**)
- Criar tela de próximas manutenções a fazer (**1 semana**)
- Testar as funcionalidades (**2 semanas**)
- Criar interface com mapa de oficinas próximas (extra)

---


