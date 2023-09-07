import React, { useState } from 'react';
import frame1 from '../../assets/Frame.png'
import frame2 from '../../assets/Frane2.png'
import './ChocolateCard.css'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const ChocolateCard = ({allChocolate}) => {
    const [allChocolates, setAllChocolates] = useState(allChocolate)
    const {_id, name, country,image, category} = allChocolates
    const handleDelete = _id => {
        fetch(`https://chocolate-server-blush.vercel.app/chocolates/${_id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Deleted!',
                        'Your chocolate has been deleted.',
                        'success'
                      )
                    }
                  })
            }
            setAllChocolates(data)
        })
    }
    return (
        <>
          <>
            {/* row 4 */}
            <tr>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </th>
              <td>
                <div className="flex items-center">
                  <h6>{name}</h6>
                 
                </div>
              </td>
              <td>
                <h5>{country}</h5>
              </td>
              <td>{category}</td>
              <th>
                <Link to={`/update/${_id}`}><button className="link btn btn-ghost btn-xs"><img src={frame2} alt="" /></button></Link>
                <button onClick={() => handleDelete(_id)} className="link  btn-ghost btn-xs"><img src={frame1} alt="" /></button>
              </th>
            </tr>
          </>
    
        </>
    );
};

export default ChocolateCard;