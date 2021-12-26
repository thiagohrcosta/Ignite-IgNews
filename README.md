
  

![MainImg](https://res.cloudinary.com/dloadb2bx/image/upload/v1635994845/0ff8ac80-8026-11eb-8ed1-e8b77764fbcd_el3ft3.png)

  

  

  

## CAPÍTULO 03 - IgNews

  

  

  

Este repositório é composto pelo projeto desenvolvido ao longo do do **capítulo 03**, da especialização em **ReactJS** ministrado pela **[ROCKETSEAT](https://www.rocketseat.com.br/)** em seu curso **IGNITE PRO**.

  

  

![enter image description here](https://res.cloudinary.com/dloadb2bx/image/upload/v1638628516/igNews_vdnbb4.png)

  

  

**Tecnologias utilizadas:** <br>![enter image description here](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![ ](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![enter image description here](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

  

  

**Outras tecnologias utilizadas:**

- **[Axios:](https://github.com/axios/axios)** (Cliente HTTP)

- **[FaunaDB](https://fauna.com/)** (Banco de dados)

- **[Next-Auth](https://next-auth.js.org/)** (Autenticação de usuário integrada com o Github)

  

**Recursos utilizados**:

- **[Stripe](https://stripe.com/br)** (Assinatura de serviço e pagamento)
- **[Prismic](https://prismic.io/)** (CRM)
  

## Fluxo da aplicação

  

![enter image description here](https://res.cloudinary.com/dloadb2bx/image/upload/v1638628193/fluxo_ybe1c5.png)

  

## Assinatura

![subscribe](https://res.cloudinary.com/dloadb2bx/image/upload/v1639261896/Subscribe_l94pnn.gif)

  

A aplicação foi desenvolvida utilizando o **Next-Auth** para permitir o login do usuário que devidamente autenticado poderá assinar a newsletter. Ao clicar no botão de assinar o usuário é levado para a página do **Stripe** que gerenciará a forma de pagamento, informando em seguida se a assinatura e pagamento foram realizados com sucesso para a liberação do conteúdo assinado.

## Conteúdo disponível apenas para assinantes
  ![signin](https://res.cloudinary.com/dloadb2bx/image/upload/v1640541608/IgnewsFinal_mddoov.gif)

Utilizando-se do **Stripe** e do **FaunaDB** a aplicação é capaz de identificar os usuários que estão logados, bem como aqueles que possuem uma assinatura válida para acessarem o conteúdo em sua integralidade. 

## Utilizando um CRM para adição de conteúdo
![enter image description here](https://res.cloudinary.com/dloadb2bx/image/upload/v1640542233/prismic_dk2xfw.png)

O conteúdo mostrado ao usuário seja ele um visitante ou um usuário com assinatura válida é gerenciado pelo **[CRM Prismic](https://prismic.io/)**, permitindo uma fácil gestão e adição de novos conteúdos. 

## Como rodar a aplicação?

  
Para rodar a aplicação baixe ou clone este repositório. Em seguida instale a pasta node_modules com o comando `yarn install`. Ao final inicie a aplicação com `yarn start` que será iniciada na porta `localhost:3000`. Será necessário também iniciar o Stripe localmente com o comando ` stripe listen --forward-to localhost:3000/api/webhooks`.