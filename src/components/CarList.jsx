import { useEffect, useState } from "react";

const CarList = () => {

    const  [cars , setCars] = useState( [

      {
        model: 'Tesla Model S Plaid',
        price: 105000,
        year: 2024,
        image: "https://via.placeholder.com/150"
      },
      {
        model: 'Bugatti Chiron Super Sport 300+',
        price: 3900000,
        year: 2023,
        image: "https://via.placeholder.com/150"
      },
      {
        model: 'Mercedes-Benz S-Class (S 580 4MATIC)',
        price: 118000,
        year: 2024,
        image: "https://via.placeholder.com/150"
      },
      {
        model: 'Ford Mustang GT',
        price: 45000,
        year: 2024,
        image: "https://via.placeholder.com/150"
      },
    ])

        
    useEffect (() => {

      setInterval (() => {
        setCars ([])
      }, 3000);
    },  [])
      

    return (

        <div className="flex-col  justify-items-center">
       


        {cars.map((cars => (

<div className="flex gap-2 items-center  rounded-lg bg-gray-300 w-96 mt-5 ">
<img src="https://via.placeholder.com/150" alt="" />
<div>
 <h2>{cars.model}</h2>
 <p>$ {cars.price}</p>
 <p>{cars.year}</p>
</div>
 </div>

        )))}
           
{cars.length === 0 &&  (<span>მანქანა ვერ მოიძებნა</span>)}
        </div>

    )
}

export default CarList;