## Teste da WS FR

O projeto segue algmas diretrizes que foram escolhidas para facilitar o uso e a manutenção do código.

## Marcas dos carros

Dentro da pasta assets em `src/assets` existem 3 arquivos `.tsx` que são as logos das possíveis marcas dos carros que são apresentados ao usuário.
Esses componentes podem receber duas propriedades que **não são obrigatórias**, seguindo o tipo padrão dos svgs da aplicação que é:

```js
   SVGProps: {
      size?: string;
      color?: string;
   },
```

não sendo obrigatória nenhuma das propriedades e sendo utilizadas como um componente padrão do react.

## Componentes

Aqui dentro ficam todos os componentes da aplicação separados por pastas.
Cada pasta tem a função de separar por nome os componentes que serão utilizados na aplicação
com excessão da pasta `elements` que contém todos os componentes que podem ser reutilizados
dentro de outros componentes, como botões, inputs, cards, etc...

## Pastas _Containers_

São as pastas que contem os componentes responsáveis pela lógica principal dos componentes:

- Integração com backend
- Status principal de inicialização

## Pastas _Components_

São responsáveis pela parte visual do componente:

- Estrutura dos elementos
- Dados recebidos pelos containers
- Estilos

## ESTILOS

Utilizei styled-components para a criação da aplicação.
É uma biblioteca css-in-js onde é possivel não somente estilizar mas também usar/alterar os valores das propriedades daquele componente.
TODOS os componentes estilizados são escritos com um S maiusculo em seu começo, como por exemplo:
`<S.Wrapper>...</S.Wrapper>`.
Eu costumo exportar todos os componentes como padrão do componente de estilo e utilizarlos assim, pois assim que olho para o codigo eu já consigo dizer se aquele componente tem alguma estilização ou está com seu estilo padrão.

## Pastas _Types_

Como o próprio nome ja diz, são as pastas responsáveis pelos tipos que serão utilizados dentro daquele componente

## Layout

Dentro da pasta Layout fica guardado o Layout da aplicação.

## Lib

Aqui ficam as configurações de libs externas a aplicação

## Firebase

Toda a aplicação está conectada ao firebase, eu o escolhi pela simplicidade tanto da utilização quando da instalação, além de ser gratuito.

Foi previamente populado o firebase com os dados que vem do https://wswork.com.br/cars_by_brand.json e https://wswork.com.br/cars.json, podendo assim buscar os dados que foram passados diretamente na base de dados do firebase.

A inicialização do firebase é feita dentro do `src/lib/firebase/firebase.ts` e essa inicialização é exportada pela variavel `app` dentro do mesmo componente.
Nesse componente também existe toda a configuração do firebase, conseguida no próprio site do firebase pelo usuario admin ou pelos usuarios que estão habilitados.

Para inicializar a busca no firebase existe uma função chamada `firestore` em `src/lib/firebase/controller.ts`, essa função é utilizada para buscar a collection **cars** existente no firebase.
Existindo junto a função `carsCollection` que busca a coleção de carros que existe.

A CRUD foi criada em `src/services/carsCRUD.ts`, porém o GET está sendo feito diretamente no componente **Vehicle** em `src/components/vehicle/containers/vehicle.tsx`.

Os dados buscados no Firebase são atualizados automaticamente pelo GET, o próprio firebase, assim que sua BD é alterada ele já envia os novos dados.

## Utils

Pasta que contém funções de formatação de dados
