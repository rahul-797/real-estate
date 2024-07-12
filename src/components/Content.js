import { Heading, VStack, SimpleGrid } from "@chakra-ui/react";
import Filter from "./Filter";
import PropertyCard from "./PropertyCard";
import React, { useState } from 'react';

export default function Content() {
  const [type, setType] = useState("House");
  const [price, setPrice] = useState("120000");
  const [location, setLocation] = useState("New York, USA");

  let filteredList = arr.filter((item) => {
    if (
      item["type"] == type &&
      item["location"] == location &&
      item["price"] == price
    ) {
      return item;
    }
  });

  return (
    <VStack
      alignItems={"flex-start"}
      w="full"
      px={[8, 8, 24]}
      py={[4, 4, 12]}
      spacing={[2, 2, 8]}
    >
      <Heading size={"xl"} alignSelf={"center"}>
        Rent properties
      </Heading>
      <Filter type={type} setType={setType} location={location} setLocation={setLocation} price={price} setPrice={setPrice} />
      <Heading>Results</Heading>
      <SimpleGrid
        justifyItems="center"
        columns={[1, 1, 3]}
        columnGap="3"
        rowGap="6"
        width="full"
      >
        {filteredList.map((item) => {
          return (
            <PropertyCard
              key={item["id"]}
              src={item["src"]}
              price={item["price"]}
              location={item["location"]}
              name={item["name"]}
            />
          );
        })}
      </SimpleGrid>
    </VStack>
  );
}

const arr = [
  {
    id: 50,
    type: "Office",
    location: "London, UK",
    price: "260000",
    src: "/images/office6.webp",
    name: "Seaview Tower"
  },
  {
    id: 51,
    type: "Office",
    location: "London, UK",
    price: "260000",
    src: "/images/office10.webp",
    name: "Googol Tower"
  },
  {
    id: 52,
    type: "House",
    location: "London, UK",
    price: "120000",
    src: "/images/house1.webp",
    name: "Ronaldo Villa"
  },
  {
    id: 53,
    type: "Office",
    location: "London, UK",
    price: "120000",
    src: "/images/office7.webp",
    name: "Urban Loft"
  },
  {
    id: 54,
    type: "House",
    location: "New York, USA",
    price: "120000",
    src: "/images/house3.webp",
    name: "Business Center"
  },
  {
    id: 55,
    type: "Office",
    location: "London, UK",
    price: "260000",
    src: "/images/office9.webp",
    name: "Riverside Office"
  },
  {
    id: 56,
    type: "House",
    location: "London, UK",
    price: "120000",
    src: "/images/house11.webp",
    name: "Beachfront Property"
  },
  {
    id: 57,
    type: "House",
    location: "London, UK",
    price: "260000",
    src: "/images/house5.webp",
    name: "Parkside Residence"
  },
  {
    id: 58,
    type: "House",
    location: "New York, USA",
    price: "260000",
    src: "/images/house8.webp",
    name: "Skyline Plaza"
  },
  {
    id: 59,
    type: "Office",
    location: "New York, USA",
    price: "260000",
    src: "/images/office7.webp",
    name: "Greenwood Estate"
  },
  {
    id: 60,
    type: "Office",
    location: "London, UK",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/office11.webp",
    name: "Modern Studio"
  },
  {
    id: 61,
    type: "Office",
    location: "New York, USA",
    price: "260000",
    moveInDate: "7 Jan, 2025",
    src: "/images/office4.webp",
    name: "Forest Cabin"
  },
  {
    id: 62,
    type: "House",
    location: "New York, USA",
    price: "120000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house7.webp",
    name: "Urban Loft"
  },
  {
    id: 63,
    type: "House",
    location: "London, UK",
    price: "260000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house10.webp",
    name: "Sunset Villa"
  },
  {
    id: 64,
    type: "Office",
    location: "New York, USA",
    price: "120000",
    moveInDate: "30 Nov, 2024",
    src: "/images/office3.webp",
    name: "Amazon Office"
  },
  {
    id: 65,
    type: "House",
    location: "New York, USA",
    price: "120000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house9.webp",
    name: "Urban Loft"
  },
  {
    id: 66,
    type: "Office",
    location: "New York, USA",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/office2.webp",
    name: "Downtown Office"
  },
  {
    id: 67,
    type: "House",
    location: "London, UK",
    price: "120000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house3.webp",
    name: "Historical Mansion"
  },
  {
    id: 68,
    type: "House",
    location: "London, UK",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house4.webp",
    name: "Greenwood Estate"
  },
  {
    id: 69,
    type: "House",
    location: "New York, USA",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house5.webp",
    name: "Urban Loft"
  },
  {
    id: 70,
    type: "House",
    location: "London, UK",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house8.webp",
    name: "Historical Mansion"
  },
  {
    id: 71,
    type: "House",
    location: "New York, USA",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house10.webp",
    name: "Beachfront Property"
  },
  {
    id: 72,
    type: "House",
    location: "London, UK",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house11.webp",
    name: "Historical Mansion"
  },
  {
    id: 73,
    type: "Office",
    location: "London, UK",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/office1.webp",
    name: "Seaview Studio"
  },
  {
    id: 74,
    type: "House",
    location: "New York, USA",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house4.webp",
    name: "Mbappe House"
  },
  {
    id: 75,
    type: "Office",
    location: "New York, USA",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/office11.webp",
    name: "Urban Loft"
  },
  {
    id: 76,
    type: "House",
    location: "London, UK",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house1.webp",
    name: "Riverside House"
  },
  {
    id: 77,
    type: "Office",
    location: "London, UK",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/office10.webp",
    name: "Forest Cabin"
  },
  {
    id: 78,
    type: "House",
    location: "New York, USA",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house8.webp",
    name: "Pino House"
  },
  {
    id: 79,
    type: "Office",
    location: "London, UK",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/office9.webp",
    name: "Skyline Studios"
  },
  {
    id: 80,
    type: "House",
    location: "New York, USA",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house6.webp",
    name: "Modern Bunglow"
  },
  {
    id: 81,
    type: "House",
    location: "London, UK",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house2.webp",
    name: "Riverside House"
  },
  {
    id: 82,
    type: "Office",
    location: "New York, USA",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/office8.webp",
    name: "Mountain Retreat"
  },
  {
    id: 83,
    type: "House",
    location: "London, UK",
    price: "120000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house5.webp",
    name: "Downtown Office"
  },
  {
    id: 84,
    type: "Office",
    location: "New York, USA",
    price: "260000",
    moveInDate: "7 Jan, 2025",
    src: "/images/office7.webp",
    name: "Modern Studio"
  },
  {
    id: 85,
    type: "Office",
    location: "New York, USA",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/office6.webp",
    name: "Business Center"
  },
  {
    id: 86,
    type: "House",
    location: "London, UK",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house7.webp",
    name: "Statin House"
  },
  {
    id: 87,
    type: "House",
    location: "New York, USA",
    price: "260000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house9.webp",
    name: "Downtown Office"
  },
  {
    id: 88,
    type: "House",
    location: "New York, USA",
    price: "120000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house3.webp",
    name: "Downtown Office"
  },
  {
    id: 89,
    type: "Office",
    location: "New York, USA",
    price: "120000",
    moveInDate: "30 Nov, 2024",
    src: "/images/office5.webp",
    name: "Greenwood Estate"
  },
  {
    id: 90,
    type: "House",
    location: "London, UK",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house11.webp",
    name: "City Center Hub"
  },
  {
    id: 91,
    type: "Office",
    location: "London, UK",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/office4.webp",
    name: "Wolter Plaza"
  },
  {
    id: 92,
    type: "House",
    location: "New York, USA",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house6.webp",
    name: "City Center Hub"
  },
  {
    id: 93,
    type: "Office",
    location: "London, UK",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/office3.webp",
    name: "Simons Spaces"
  },
  {
    id: 94,
    type: "Office",
    location: "London, UK",
    price: "120000",
    moveInDate: "30 Nov, 2024",
    src: "/images/office2.webp",
    name: "Penthouse Suite"
  },
  {
    id: 95,
    type: "Office",
    location: "London, UK",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/office1.webp",
    name: "Hilltop Office"
  },
  {
    id: 96,
    type: "House",
    location: "London, UK",
    price: "260000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house2.webp",
    name: "Penthouse Suite"
  },
  {
    id: 97,
    type: "House",
    location: "New York, USA",
    price: "260000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house8.webp",
    name: "Forest Cabin"
  },
  {
    id: 98,
    type: "House",
    location: "New York, USA",
    price: "260000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house4.webp",
    name: "Dino House"
  },
  {
    id: 99,
    type: "House",
    location: "London, UK",
    price: "260000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house11.webp",
    name: "Business Center"
  }
];
