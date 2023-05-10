import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      supplier,
      taste,
      quantity,
      details,
      category,
      photo,
    };
    console.log(newCoffee);

    //send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#f4f3f0] p-24">
      <h2 className="text-3xl font-extrabold">Add a new coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Coffee Name"
                name="name"
                className="input input-bordered w-full" // medium device er jonno half space nibe tar moddhe input nibe full space
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* supplier and taste row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Supplier Name"
                name="supplier"
                className="input input-bordered w-full" // medium device er jonno half space nibe tar moddhe input nibe full space
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Category and Details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Category"
                name="category"
                className="input input-bordered w-full" // medium device er jonno half space nibe tar moddhe input nibe full space
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered w-full" // medium device er jonno half space nibe tar moddhe input nibe full space
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;

// Pinged your deployment. You successfully connected to MongoDB!
// {
//   name: 'First Coffee',
//   supplier: 'StarSucks',
//   taste: 'Bitter',
//   quantity: '2000',
//   details: 'You can waste money and be happy',
//   category: 'Black Coffee',
//   photo: 'https://ibb.co/jfKHD3P'
// }
// {
//   name: 'Sweet Coffee',
//   supplier: 'Misti',
//   taste: 'Sweety',
//   quantity: '1532',
//   details: 'Useful for diabetics',
//   category: 'Coffee',
//   photo: 'https://i.ibb.co/Bs7SfY1/2.png'
// }
// {
//   name: 'Drip Coffee',
//   supplier: 'FavCoffee',
//   taste: 'Sweety',
//   quantity: '1823',
//   details: 'This is a common type of coffee at home and in many restaurants',
//   category: 'Coffee',
//   photo: 'https://i.ibb.co/LkwWF9K/3.png'
// }
// {
//   name: 'Cold Brew Coffee',
//   supplier: 'Red Diamond',
//   taste: 'Strong and intense flavor with no bitterness.',
//   quantity: '1240',
//   details: 'If you want the perfect, smooth cup of coffee, cold brew is the way to go.',
//   category: 'Cold Coffee',
//   photo: 'https://i.ibb.co/C0ZSP4D/4.png'
// }
// {
//   name: 'Percolated Coffee',
//   supplier: 'Westrock Coffee Company',
//   taste: 'Sweety',
//   quantity: '2200',
//   details: 'Percolated coffee is brewed in a stove-top or electric stand-alone unit',
//   category: 'Regular Coffee',
//   photo: 'https://i.ibb.co/0KxSXGS/5.png'
// }
// {
//   name: 'Vacuum Coffee',
//   supplier: '\tMother Parkers',
//   taste: 'light sweety',
//   quantity: '1568',
//   details: 'a vacuum coffee maker involves a complex system of glass flasks and siphon tubes that look more like a chemistry lab',
//   category: 'Coffee',
//   photo: 'https://i.ibb.co/4jY776r/6.png'
// }
