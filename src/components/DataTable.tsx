import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Button,
} from '@chakra-ui/react';

interface TableProps {
  headers: string[];
  data: {
    [key: string]: any;
  }[];
}

export default function DataTable({ headers, data }: TableProps) {
  return (
    <TableContainer>
      <Table variant='simple' className=' bg-light'>
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead>
          <Tr>
            {headers.map((header) => (
              <Th key={header}>{header}</Th>
            ))}
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              {Object.values(item).map((value, index) => (
                <Td key={index}>{value}</Td>
              ))}
              {/* <Td>
                <Button colorScheme={'green'}>Edit</Button>
                <Button ml={3} colorScheme={'red'}>Delete</Button>
              </Td> */}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
