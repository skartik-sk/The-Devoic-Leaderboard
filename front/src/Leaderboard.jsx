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
const getMedalColor = (rank) => {
  switch (rank) {
    case 1: return "#FFD700";
    case 2: return "#C0C0C0";
    case 3: return '#cd7f32';
    default: return '#fff';
  }
};

const Leaderboard = ({ data }) => {
    const sortedData = [...data].sort((a, b) => b.total - a.total);
    const topThree = sortedData.slice(0, 3);
    const rest = sortedData.slice(3);
  console.log(data);
const getcode = () => {
  if (window.innerWidth < 568) {
    return (
      <>
      <h2 style={{fontSize:"30px"}} className=" font-bold mb-6">The Devoic's Leaderboard</h2>
      <div className="overflow-x-auto">
      <div>
      <Accordion style={{fontFamily: 'Dancing Script', fontSize:"20px"}} variant="bordered">
        {sortedData.map((item, index) => (
          <AccordionItem
            key={index}
            startContent={<span style={{backgroundColor: getMedalColor(index+1), color: "black"}} className={`inline-flex items-center justify-center w-8 h-8 rounded-full  text-white font-bold`}>
            {index+1}
          </span>}
            aria-label={`Accordion ${index + 1}`}
            title={
              <div className=" flex w-full justify-between">
                <div style={{color:"white"}} >{item.name}</div>
                <div  style={{color:"white"}}>{item.total}</div>
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
      </div>
      </>
    );
  } else {
    return (
      <>
      <h1 style={{fontFamily: 'Uncial Antiqua'}} className="text-2xl font-bold mb-6">The Devoic's Leaderboard</h1>
      <div className="overflow-x-auto">
      <div>
       <table className="w-full ">
          <thead>
            <tr className="text-left text-sm text-gray-600">
              <th className="p-3">Rank</th>
              <th className="p-3">Name</th>
              <th className="p-3">Engagement</th>
              <th className="p-3">Learning</th>
              <th className="p-3">Project</th>
              <th className="p-3">Additional</th>
              <th className="p-3">Total</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((entry,key) => (
              <tr style={{fontFamily: 'Dancing Script'}} key={key+1} className="border-b border-gray-200 text-xl">
                <td className="p-3">
                  <span style={{backgroundColor: getMedalColor(key+1), color: "black"}} className={`inline-flex items-center justify-center w-8 h-8 rounded-full  text-white font-bold`}>
                    {key+1}
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex items-center">
                  
                    <span className="font-medium">{entry.name}</span>
                  </div>
                </td>
                <td className="p-3">{entry.subPointDistribution.Engagement}</td>
                <td className="p-3">{entry.subPointDistribution.Learning}</td>
                <td className="p-3 font-medium">{entry.subPointDistribution.Project}</td>
                <td className="p-3 font-medium">{entry.subPointDistribution.Additional}</td>
                <td className="p-3 font-bold">{entry.total}</td>
                <td className="p-3">
                  {/* {entry.tags.map((tag) => (
                    <span key={tag} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mr-1">
                      {tag}
                    </span>
                  ))} */}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </>
    );
  }
};

  return (
    <div className="">
      {/* main */}

      {/* after 4 */}

    



      <div className="container mx-auto px-4 py-8">
      
        {getcode()}
        

  

      
    
    </div>
    </div>
  );
};

export default Leaderboard;
