import React, { useContext, useEffect, useState } from 'react';
import SingleCard from './SingleCard';
import {
  Box,
  HStack,
  Select,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import axios from 'axios';
import { authval } from '../context/ContextProvider';



function Courses() {
  // const [courdata, setCourdata] = useState([]);
  const [loading, setloading] = useState(false);


const {globaldata, setGlobalData, courdata, setCourdata} = useContext(authval)


  const fetchdata = async () => {
   
    try {
      let res = await fetch(`https://semi-mock2.onrender.com/courses`);
      let data = await res.json();
      console.log(data);
      setCourdata(data);
      setGlobalData(data)
      setloading(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
 
    setTimeout(() => {
      fetchdata();
    }, 1000);
  }, []);




  //  filter by category
  const handle_change = (e) => {
    //  console.log(e.target.value);

    if (e.target.value == "") {
      setCourdata(globaldata);
    } else {
      const filterrr = globaldata.filter((item)=> {
         if(item.category == e.target.value){
          return true
         }else{
          return false
         }
      })
      // console.log(filterrr)
      setCourdata(filterrr);
    }
  };


  return (
    <Box
      display={'flex'}
      flexWrap={'wrap'}
      gap={'20px'}
      justifyContent={'center'}
    >
      <Select onChange={e => handle_change(e)}>
        <option value="">Filter By Category</option>
        <option value="Programming">Programming</option>
        <option value="Neet">Neet</option>
        <option value="Upsc">Upsc</option>
      </Select>

      {loading ? (
        courdata.map((ele , i) => (
          (i < courdata.length - 2 && <SingleCard key={ele.id} {...ele} item={ele} />)
          
        ))
      ) : (
        <Box display={'flex'} gap={'20px'} flexWrap={'wrap'} justifyContent={"center"}>
          <Box width={'344px'} padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="40" />
            <SkeletonText mt="6" noOfLines={6} spacing="4" skeletonHeight="2" />
          </Box>
          <Box width={'344px'} padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="40" />
            <SkeletonText mt="6" noOfLines={6} spacing="4" skeletonHeight="2" />
          </Box>
          <Box width={'344px'} padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="40" />
            <SkeletonText mt="6" noOfLines={6} spacing="4" skeletonHeight="2" />
          </Box>
          <Box width={'344px'} padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="40" />
            <SkeletonText mt="6" noOfLines={6} spacing="4" skeletonHeight="2" />
          </Box>
          <Box width={'344px'} padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="40" />
            <SkeletonText mt="6" noOfLines={6} spacing="4" skeletonHeight="2" />
          </Box>
          <Box width={'344px'} padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="40" />
            <SkeletonText mt="6" noOfLines={6} spacing="4" skeletonHeight="2" />
          </Box>
          <Box width={'344px'} padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="40" />
            <SkeletonText mt="6" noOfLines={6} spacing="4" skeletonHeight="2" />
          </Box>
          <Box width={'344px'} padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="40" />
            <SkeletonText mt="6" noOfLines={6} spacing="4" skeletonHeight="2" />
          </Box>
        </Box>
      )}

      {/* skeleton */}
    </Box>
  );
}

export default Courses;
