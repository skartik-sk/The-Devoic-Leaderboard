import React from "react";
import {
  Accordion,
  AccordionItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const Leaderboard = ({ data }) => {
    const sortedData = [...data].sort((a, b) => b.total - a.total);
    const topThree = sortedData.slice(0, 3);
    const rest = sortedData.slice(3);
  console.log(data);
  return (
    <div className="">
      {/* main */}

      {/* after 4 */}

      <Accordion variant="bordered">
        {sortedData.map((item, index) => (
          <AccordionItem
            key={index}
            startContent={index + 4}
            aria-label={`Accordion ${index + 1}`}
            title={
              <div className=" flex w-full justify-between">
                <div>{item.name}</div>
                <div>{item.total}</div>
              </div>
            }
          >

            <Table >
              <TableHeader>
                <TableColumn>Engagement</TableColumn>
                <TableColumn>Learning</TableColumn>
                <TableColumn>Project</TableColumn>
                <TableColumn>Additional</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow style={{backgroundColor:"black"}} key="1">
                  <TableCell>{item.subPointDistribution.Engagement}</TableCell>
                  <TableCell>{item.subPointDistribution.Learning}</TableCell>
                  <TableCell>{item.subPointDistribution.Project}</TableCell>
                  <TableCell>{item.subPointDistribution.Additional}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
      
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Leaderboard;
