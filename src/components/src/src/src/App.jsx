import React, { useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import RecipeListPage from './pages/RecipeListPage';
import RecipePage from './pages/RecipePage';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <ChakraProvider>
      <Box>
        {selectedRecipe ? (
          <RecipePage
            recipe={selectedRecipe}
            onBack={() => setSelectedRecipe(null)}
          />
        ) : (
          <RecipeListPage onRecipeSelect={(recipe) => setSelectedRecipe(recipe)} />
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
