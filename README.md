# 📱 Pokédex - Aula 4

Leonardo dos Reis /souza - GU3027287

---

## ✅ Funcionalidades Implementadas

### 🔹 Exercício 1 – Robustez na busca de dados e feedback ao usuário
- Estado `isLoading` com indicador de carregamento (`ActivityIndicator`).
- Mensagem de erro amigável ao usuário, usando `try/catch` no arquivo `services/api.ts`.

### 🔹 Exercício 2 – Melhorando a experiência da lista e da busca
- Mensagens contextuais em caso de lista vazia ou busca sem resultados via `ListEmptyComponent` da `FlatList`.

### 🔹 Exercício 3 – Carregamento infinito
- Implementação de `offset` e `loadMorePokemons` para buscar mais dados.
- Uso de `onEndReached` para carregar mais pokémons automaticamente.
- Indicador de carregamento no rodapé da lista com `ListFooterComponent`.

### 🔹 Exercício 4 – Refinamento visual e de layout
- Função `capitalize` aplicada nos nomes dos Pokémons.
- Substituição do `paddingTop` fixo por valor dinâmico via `useSafeAreaInsets`.

### 🏆 Desafio Extra – Tela de detalhes do Pokémon
- Configuração da navegação com `React Navigation`.
- Criação da `PokemonDetailScreen.tsx`.
- Navegação ao clicar em um card (`TouchableOpacity`) passando o ID.
- Exibição de nome, imagem maior, tipos, altura, peso e descrição do Pokémon (dados buscados da API).
