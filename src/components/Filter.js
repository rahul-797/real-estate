import { BsChevronDown } from "react-icons/bs";
import {
  Box,
  Button,
  Divider,
  HStack,
  Stack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Filter({ type, setType, location, setLocation, price, setPrice }) {
  return (
    <Box
      alignSelf={"center"}
      borderRadius="lg"
      borderWidth="1px"
      w={["full", "full", "fit-content"]}
    >

      <Stack
        justifyContent={"center"}
        direction={["column", "column", "row"]}
        py={4}
        px={[4, 4, 12]}
        spacing={[4, 4, 12]}
      >
        <VStack alignItems={"center"}>
          <Text fontSize={["lg", "lg", "sm"]}>Location</Text>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<BsChevronDown />}
              colorScheme="teal"
            >
              {location}
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  setLocation("New York, USA");
                }}
              >
                New York, USA
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setLocation("London, UK");
                }}
              >
                London, UK
              </MenuItem>
            </MenuList>
          </Menu>
        </VStack>
        <VStack alignItems={"center"}>
          <Text fontSize={["lg", "lg", "sm"]}>Price</Text>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<BsChevronDown />}
              colorScheme="teal"
            >
              {price === "120000" ? "$100000 - $200000" : "$200000 - $300000"}
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  setPrice("120000");
                }}
              >
                $100000 - $200000
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setPrice("260000");
                }}
              >
                $200000 - $300000
              </MenuItem>
            </MenuList>
          </Menu>
        </VStack>
        <VStack alignItems={"center"}>
          <Text fontSize={["lg", "lg", "sm"]}>Property type</Text>
          <Menu>
            <MenuButton
              as={Button}
              colorScheme="teal"
              rightIcon={<BsChevronDown />}
            >
              {type}
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  setType("House");
                }}
              >
                House
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setType("Office");
                }}
              >
                Office
              </MenuItem>
            </MenuList>
          </Menu>
        </VStack>
      </Stack>
    </Box>
  );
}
