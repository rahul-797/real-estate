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
    src: "/images/office6.jpg",
    name: "Seaview Tower"
  },
  {
    id: 51,
    type: "Office",
    location: "London, UK",
    price: "260000",
    src: "/images/office10.jpg",
    name: "Googol Tower"
  },
  {
    id: 52,
    type: "House",
    location: "London, UK",
    price: "120000",
    src: "/images/house1.jpg",
    name: "Ronaldo Villa"
  },
  {
    id: 53,
    type: "Office",
    location: "London, UK",
    price: "120000",
    src: "/images/office7.jpg",
    name: "Urban Loft"
  },
  {
    id: 54,
    type: "House",
    location: "New York, USA",
    price: "120000",
    src: "/images/house3.jpg",
    name: "Business Center"
  },
  {
    id: 55,
    type: "Office",
    location: "London, UK",
    price: "260000",
    src: "/images/office9.jpg",
    name: "Riverside Office"
  },
  {
    id: 56,
    type: "House",
    location: "London, UK",
    price: "120000",
    src: "/images/house11.jpg",
    name: "Beachfront Property"
  },
  {
    id: 57,
    type: "House",
    location: "London, UK",
    price: "260000",
    src: "/images/house5.jpg",
    name: "Parkside Residence"
  },
  {
    id: 58,
    type: "House",
    location: "New York, USA",
    price: "260000",
    src: "/images/house8.jpg",
    name: "Skyline Plaza"
  },
  {
    id: 59,
    type: "Office",
    location: "New York, USA",
    price: "260000",
    src: "/images/office7.jpg",
    name: "Greenwood Estate"
  },
  {
    id: 60,
    type: "Office",
    location: "London, UK",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/office11.jpg",
    name: "Modern Studio"
  },
  {
    id: 61,
    type: "Office",
    location: "New York, USA",
    price: "260000",
    moveInDate: "7 Jan, 2025",
    src: "/images/office4.jpg",
    name: "Forest Cabin"
  },
  {
    id: 62,
    type: "House",
    location: "New York, USA",
    price: "120000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house7.jpg",
    name: "Urban Loft"
  },
  {
    id: 63,
    type: "House",
    location: "London, UK",
    price: "260000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house10.jpg",
    name: "Sunset Villa"
  },
  {
    id: 64,
    type: "Office",
    location: "New York, USA",
    price: "120000",
    moveInDate: "30 Nov, 2024",
    src: "/images/office3.jpg",
    name: "Amazon Office"
  },
  {
    id: 65,
    type: "House",
    location: "New York, USA",
    price: "120000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house9.jpg",
    name: "Urban Loft"
  },
  {
    id: 66,
    type: "Office",
    location: "New York, USA",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/office2.jpg",
    name: "Downtown Office"
  },
  {
    id: 67,
    type: "House",
    location: "London, UK",
    price: "120000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house3.jpg",
    name: "Historical Mansion"
  },
  {
    id: 68,
    type: "House",
    location: "London, UK",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house4.jpg",
    name: "Greenwood Estate"
  },
  {
    id: 69,
    type: "House",
    location: "New York, USA",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house5.jpg",
    name: "Urban Loft"
  },
  {
    id: 70,
    type: "House",
    location: "London, UK",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house8.jpg",
    name: "Historical Mansion"
  },
  {
    id: 71,
    type: "House",
    location: "New York, USA",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house10.jpg",
    name: "Beachfront Property"
  },
  {
    id: 72,
    type: "House",
    location: "London, UK",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house11.jpg",
    name: "Historical Mansion"
  },
  {
    id: 73,
    type: "Office",
    location: "London, UK",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/office1.jpg",
    name: "Seaview Studio"
  },
  {
    id: 74,
    type: "House",
    location: "New York, USA",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house4.jpg",
    name: "Mbappe House"
  },
  {
    id: 75,
    type: "Office",
    location: "New York, USA",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/office11.jpg",
    name: "Urban Loft"
  },
  {
    id: 76,
    type: "House",
    location: "London, UK",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house1.jpg",
    name: "Riverside House"
  },
  {
    id: 77,
    type: "Office",
    location: "London, UK",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/office10.jpg",
    name: "Forest Cabin"
  },
  {
    id: 78,
    type: "House",
    location: "New York, USA",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house8.jpg",
    name: "Pino House"
  },
  {
    id: 79,
    type: "Office",
    location: "London, UK",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/office9.jpg",
    name: "Skyline Studios"
  },
  {
    id: 80,
    type: "House",
    location: "New York, USA",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house6.jpg",
    name: "Modern Bunglow"
  },
  {
    id: 81,
    type: "House",
    location: "London, UK",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house2.jpg",
    name: "Riverside House"
  },
  {
    id: 82,
    type: "Office",
    location: "New York, USA",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/office8.jpg",
    name: "Mountain Retreat"
  },
  {
    id: 83,
    type: "House",
    location: "London, UK",
    price: "120000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house5.jpg",
    name: "Downtown Office"
  },
  {
    id: 84,
    type: "Office",
    location: "New York, USA",
    price: "260000",
    moveInDate: "7 Jan, 2025",
    src: "/images/office7.jpg",
    name: "Modern Studio"
  },
  {
    id: 85,
    type: "Office",
    location: "New York, USA",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/office6.jpg",
    name: "Business Center"
  },
  {
    id: 86,
    type: "House",
    location: "London, UK",
    price: "260000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house7.jpg",
    name: "Statin House"
  },
  {
    id: 87,
    type: "House",
    location: "New York, USA",
    price: "260000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house9.jpg",
    name: "Downtown Office"
  },
  {
    id: 88,
    type: "House",
    location: "New York, USA",
    price: "120000",
    moveInDate: "30 Nov, 2024",
    src: "/images/house3.jpg",
    name: "Downtown Office"
  },
  {
    id: 89,
    type: "Office",
    location: "New York, USA",
    price: "120000",
    moveInDate: "30 Nov, 2024",
    src: "/images/office5.jpg",
    name: "Greenwood Estate"
  },
  {
    id: 90,
    type: "House",
    location: "London, UK",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house11.jpg",
    name: "City Center Hub"
  },
  {
    id: 91,
    type: "Office",
    location: "London, UK",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/office4.jpg",
    name: "Wolter Plaza"
  },
  {
    id: 92,
    type: "House",
    location: "New York, USA",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house6.jpg",
    name: "City Center Hub"
  },
  {
    id: 93,
    type: "Office",
    location: "London, UK",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/office3.jpg",
    name: "Simons Spaces"
  },
  {
    id: 94,
    type: "Office",
    location: "London, UK",
    price: "120000",
    moveInDate: "30 Nov, 2024",
    src: "/images/office2.jpg",
    name: "Penthouse Suite"
  },
  {
    id: 95,
    type: "Office",
    location: "London, UK",
    price: "120000",
    moveInDate: "7 Jan, 2025",
    src: "/images/office1.jpg",
    name: "Hilltop Office"
  },
  {
    id: 96,
    type: "House",
    location: "London, UK",
    price: "260000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house2.jpg",
    name: "Penthouse Suite"
  },
  {
    id: 97,
    type: "House",
    location: "New York, USA",
    price: "260000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house8.jpg",
    name: "Forest Cabin"
  },
  {
    id: 98,
    type: "House",
    location: "New York, USA",
    price: "260000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house4.jpg",
    name: "Dino House"
  },
  {
    id: 99,
    type: "House",
    location: "London, UK",
    price: "260000",
    moveInDate: "7 Jan, 2025",
    src: "/images/house11.jpg",
    name: "Business Center"
  }
];
