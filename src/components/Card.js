import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="gray.200" align="start" borderRadius="md" padding={4}>
      <Image src={imageSrc} borderRadius="md" marginBottom={2} />{" "}
      <Heading fontSize="15px" color="black">
        {title}
      </Heading>
      <Text fontSize="12px" color="gray.600">
        {description}
      </Text>
      <HStack>
        <Text fontSize="12px" fontWeight="bold" color="black">
          See more
        </Text>
        <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
