import React, {PropsWithChildren} from "react";
import {Box, HStack, Text} from "@chakra-ui/react";
import * as CSS from "csstype";

export interface Props {
    label: string
    color: CSS.Property.Color
}

const IconBox: React.FC<PropsWithChildren<Props>> = ({ color, label, children }) => {
    return (
        <Box maxW='sm' bg="white" borderWidth='1px' padding='0' borderRadius='lg' overflow='hidden'>
            <HStack>
                <Box bg={color} paddingY="5px" paddingX="8px">
                    {children}
                </Box>
                <Box paddingY="7px" paddingLeft="4px" paddingRight="11px">
                    <Text fontSize="xs">{ label }</Text>
                </Box>
            </HStack>
        </Box>
    );
}

export default IconBox;