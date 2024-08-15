import React from 'react';
import { Box, Image, Text, Badge } from '@chakra-ui/react';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      onClick={() => onClick(recipe)}
    >
      <Image src={recipe.image} alt={recipe.label} />
      <Box p="6">
        <Text fontWeight="bold" fontSize="lg">
          {recipe.label}
        </Text>
        <Box mt="2">
          {recipe.dietLabels.map((label) => (
            <Badge key={label} mr="1">
              {label}
            </Badge>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RecipeCard;
