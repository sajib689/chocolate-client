import "./App.css";
import Swal from 'sweetalert2'
import logo1 from '../src/assets/1 (1).png'
import logo2 from '../src/assets/1 (2).png'
import { Link } from "react-router-dom";
function App() {
  const handleSave = e => {
    e.preventDefault()
    const form = e.target 
    const name = form.name.value 
    const country = form.country.value
    const category = form.category.value
    const image = form.image.value
    const chocolateFormData = {name, country, category,image}
    fetch('https://chocolate-server-blush.vercel.app/chocolates',{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(chocolateFormData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Chocolate Added Successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
      form.reset()
    })
  }
  return (
   <div>
    <Link to='/allchocolate' className="flex b p-2 m-10">
      <><img src={logo2} alt="" /><button>All Chocolate</button><img src={logo1} alt="" /></>
    </Link>
     <div>
      <div className="flex justify-center items-center mt-5">
        {" "}
        <p
          className="rounded w-96 text-white text-2xl p-5 text-center"
          style={{ backgroundColor: "#48301E" }}
        >
          Chocolate Management System
        </p>
      </div>
      <form onSubmit={handleSave} className="mt-10 flex flex-col justify-center items-center">
        <div className="flex flex-col mt-5">
          <label htmlFor="">Name:</label>
          <input
          name='name'
            type="text"
            placeholder="Enter Chocolate Name"
            className="input input-bordered input-primary w-96 "
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="">Country:</label>
          <input
          name='country'
            type="text"
            placeholder="Enter Country"
            className="input input-bordered input-primary w-96 "
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="">Category:</label>
          <input
          name='category'
            type="text"
            placeholder="Enter Chocolate Category"
            className="input input-bordered input-primary w-96 "
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="">Image URL:</label>
          <input
          name='image'
            type="text"
            placeholder="Enter Chocolate Image URL"
            className="input input-bordered input-primary w-96 "
          />
        </div>
        <button
          className="btn w-96 mt-5 text-white"
          style={{ backgroundColor: "#533822" }}
        >
          Save
        </button>
      </form>
    </div>
   </div>
  );
}

export default App;
