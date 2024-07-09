import { Text, Image, VStack, HStack, Heading } from "@chakra-ui/react";

export default function PropertyCard({ src, price, location, name }) {
  return (
    <VStack p="0" alignItems="flex-start">
      <Image
        height={56}
        width={80}
        fit="cover"
        src={src}
        borderTopRadius="32"
        p={4}
      />
      <VStack px="8" alignItems="start">
        <HStack alignItems="baseline">
          <Text fontSize="2xl" as="b" color="teal">
            ${price}
          </Text>
          <Text fontSize="sm" color="grey">
            /month
          </Text>
        </HStack>
        <Heading size="md">{name}</Heading>
        <Text fontSize="sm" color="grey">
          {location}
        </Text>
      </VStack>
    </VStack>
  );
}
