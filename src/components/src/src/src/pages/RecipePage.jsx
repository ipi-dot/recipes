import React from 'react';
import { Box, Image, Text, List, ListItem, Badge, Button } from '@chakra-ui/react';

const RecipePage = ({ recipe, onBack }) => {
  if (!recipe) return null;

  return (
    <Box p="4">
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        {recipe.label}
      </Text>
      <Image src={recipe.image} alt={recipe.label} mb="4" />
      <Text fontSize="lg" mb="2">
        Meal Type: {recipe.mealType}
      </Text>
      <Text fontSize="lg" mb="2">
        Dish Type: {recipe.dishType}
      </Text>
      <Text fontSize="lg" mb="2">
        Total Cooking Time: {recipe.totalCookingTime || 'Unknown'}
      </Text>
      <Text fontSize="lg" mb="2">
        Servings: {recipe.servings}
      </Text>
      <Text fontSize="lg" mb="2">
        Diet Label: {recipe.dietLabels.join(', ')}
      </Text>
      <Text fontSize="lg" mb="2">
        Cautions: {recipe.cautions.join(', ')}
      </Text>
      <Text fontSize="lg" mb="2">
        Ingredients:
      </Text>
      <List spacing={2} mb="4">
        {recipe.ingredients.map((ingredient, index) => (
          <ListItem key={index}>{ingredient.text}</ListItem>
        ))}
      </List>
      <Box>
        {Object.entries(recipe.totalNutrients).map(([key, { quantity, unit }]) => (
          <Text key={key} fontSize="lg" mb="1">
            {key}: {quantity} {unit}
          </Text>
        ))}
      </Box>
      <Box mt="4">
        <Button onClick={onBack}>Back to Recipe List</Button>
      </Box>
    </Box>
  );
};

export default RecipePage;
