## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

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

## Pastas *Containers*

São as pastas que contem os componentes responsáveis pela lógica principal dos componentes:

- Integração com backend
- Status principal de inicialização

## Pastas *Components*

São responsáveis pela parte visual do componente:

- Estrutura dos elementos
- Dados recebidos pelos containers
- Estilos

## Pastas *Types*

Como o próprio nome ja diz, são as pastas responsáveis pelos tipos que serão utilizados dentro daquele componente
