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

Dentro da pasta assets em **src/assets** existem 3 arquivos **.tsx** que são as logos das possíveis marcas dos carros que são apresentados ao usuário.
Esses componentes podem receber duas propriedades que **não são obrigatórias**, seguindo o tipo padrão dos svgs da aplicação que é:

```js
   SVGProps: {
      size?: string;
      color?: string;
   },
```
