# React Typescript Boilerplate

![](https://i.postimg.cc/SR5BV34c/react-typescript-redfox.png)

## Configuração do boilerplate

Boilerplate baseado em uma stack React com Typescript e estilizada com Styled Components. O Jest está configurado e tem um exemplo usando o Testing Library usando um custom render que adiciona o <ThemeProvider/> do Styled Components. Caso deseje ter suporte ao SAS ou LESS deverá instalar os loaders necessários.

### Stack 
-   [Webpack 5](https://webpack.js.org/)
-   [React 17](https://pt-br.reactjs.org/)
-   [Jest](https://jestjs.io/pt-BR/) com [Testing Library](https://testing-library.com/)
-   Transpilado com o [Babel](https://babeljs.io/)
-   Typescript type checking com [ForkTsCheckerWebpack](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin)
-   Estilização baseada no [styled-components](https://styled-components.com/)
-   Suporte ao [react-refresh](https://www.npmjs.com/package/@pmmmwh/react-refresh-webpack-plugin)
-   [eslint](https://www.npmjs.com/package/eslint)
-   [prettier](https://www.npmjs.com/package/prettier)
-   É recomendado utilizar esse boilerplate com o [VSCODE](https://code.visualstudio.com/) com as extensões recomendandas ``./vscode/extensions.json``


## Como Utilizar

Após clonar o projeto:

1. Use o Yarn ou NPM pra instalar as dependências `yarn` ou `npm install`
2. Inicie o servidor de desenvolvimento `yarn start` ou `npm run start`
3. Abra no navegador [http://localhost:8080](http://localhost:8080)

## Outros scripts
Além do ``start`` os seguints scripts estão disponíveis:

-   `lint`: verifica por problemas de lint no projet
-   `lint:fix`: variação do ``lint`` e adicionalmente corrige os problemas solucionáveis automáticamente
-   `build`: compila optimizado para produção na pasta ``dist``
-   `profile`: compila pra produção e mostra o dependecy graph
-   `test`: executa testes unitários com o jest
-   `test:coverage`: executa testes unitários com o jest e mostra o code coverage

## Tema
É recomendado a utilização do arquivo ``src/theme.ts`` para criação de tokens de estilização. 
Esses tokens estarão disponíveis para utilização junto ao styled-componentes e fornecerão a segurançã do type checking.

Ex:

```typescript

////////// THEMING //////////
// src/theme.ts
const theme = {
  color: {
    black: '#212529',
  },
};
export default theme;

////////// USAGE //////////
// my-component.ts
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3.5rem;
  color: ${(props) => props.theme.color.black};
`;
```