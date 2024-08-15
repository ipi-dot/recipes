import React, { useState } from 'react';
import { Box, Grid, Input } from '@chakra-ui/react';
import RecipeCard from '../components/RecipeCard';
import { data } from '../data/data';

const RecipeListPage = ({ onRecipeSelect }) => {
  const [search, setSearch] = useState('');

  const filteredRecipes = data.hits.filter((hit) =>
    hit.recipe.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p="4">
      <Input
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        mb="4"
      />
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap="4">
        {filteredRecipes.map((hit, index) => (
          <RecipeCard
            key={index}
            recipe={hit.recipe}
            onClick={onRecipeSelect}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default RecipeListPage;
