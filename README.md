
# Feedget App

Essa aplicação consiste em um widget no canto inferior direito da tela,
nele é possível criar feedback de falha, sugestões e outros.
O widget também possui a funcionalidade de tirar uma printScreen da pagina 
sem a necessidade de salvar em seu dispositivo.
Enviado  essefeedback ao nosso back-end disparamos um e-mail automático
para a entidade responsável pelo site, notificando o feedback recebido.


## Instalação

Para rodar esse projeto no seu computador sera necessário ter o node instalado em sua maquina 
e também o git para o clone do projeto.

caso use o protocolo https em seu git, utilize o comando

```bash
git clone https://github.com/srsifer/WEB-nlw.git  (front-end)
git clone https://github.com/srsifer/SERVER-nlw.git  (back-end)
```

front-end 

```bash
  git clone git@github.com:srsifer/WEB-nlw.git
  cd WEB-nlw
  npm install
  npm run dev
```
back-end
```bash
  git clone git@github.com:srsifer/SERVER-nlw.git
  cd SEVER-nlw
  npm install
  npm run dev
```
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

front-end `VITE_API_URL` =http://localhost:3001

back-end `DATABASE_URL` =url do seu banco de dados postgress



## Documentação de cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Brand             | ![#8257E5](https://via.placeholder.com/10/8257e5?text=+) #8257E5 |
| background        | ![#09090A](https://via.placeholder.com/10/09090A?text=+) #09090A |
| surface_primary   | ![#18181B](https://via.placeholder.com/10/18181B?text=+) #18181B |
| surface_secondary | ![#27272A](https://via.placeholder.com/10/27272A?text=+) #27272A |
| stroke            | ![#52525B](https://via.placeholder.com/10/52525B?text=+) #52525B |
| text_primary      | ![#0F4F4F5](https://via.placeholder.com/10/F4F4F5?text=+) #F4F4F5|
| text_secondary    | ![#A1A1AA](https://via.placeholder.com/10/A1A1AA?text=+) #A1A1AA |
|text_on_brand_color| ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |



## Stack utilizada

**Front-end:** React, vite, TailwindCSS, Axios, html2canvas, phosphor-react, headlessui/react

**Back-end:** Node, Express, @prisma/client, Postgresql, @swc/core", cors, nodemailer, jest


## Aprendizados

Esse foi meu primeiro projeto utilizando o TypeScript e tailwindCSS,
foi um desafio e tanto aprender definir os tipos e como eles funcionam no react.
Não posso dizer que estou dominando essa linguagem no momento, mas seguirei evoluindo em meus estudos.

Eu nunca tinha usado serviços como o nodemailer para envio de e-mais. 
Ter uma ferramenta nova na minha caixa foi algo que me deixou bem entusiasmado.

html2canvas é uma biblioteca que torna possível transformar todo o html presente na pagina como uma imagem de base64, 
isso possibilitou a funcionalidade de printScreen nativo do widget.

Essa aplicação também tem sua versão react-native, entretanto, não tenho conhecimento para fazer deploy na playStore nem appStore.
Você pode encontrá-lo em meus repositórios com o nome Mobile-Nlw 

https://github.com/srsifer/Mobile-Nlw
## Deploy

Para fazer o deploy desse projeto basta dar um simples push da branch master,
pois a aplicação esta implantada na vercel que configura automaticamente os conceitos de CI & CD.
Você pode visualizar o app através deste   [Link](https://web-nlw-igor-fernandes.vercel.app/)


```bash
  git push origin master
```


## Documentação da API

#### temos uma única rota de post

```http
  POST /localhost:3001/feedbacks
```

Recebemos no body da Requisição o seguinte Json.
O campo `scrennshot` é opcional!

```Json
    {
      "type": "BUG",
      "comment": "encontrei um bug na pagina",
      "screenshot": "imagem base64"
    }
```

## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```

Mesmo que tenha apenas uma rota, eu como desenvolvedor prezo pela funcionalidade e boa qualidade de código,
os testes preservam essas funcionalidades e traz mais segurança durante uma edição futura do código.
atualmente essa única rota tem 100% de cobertura de teste unitário.

## Melhorias futuras

1 - Tema ligth/dark,

2 - Melhorar o HTML/CSS do e-mail.

3 - Validação de campos de erros.
