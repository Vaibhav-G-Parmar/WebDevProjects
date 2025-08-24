import React from "react";
import ReactDOM from "react-dom";

function Card(props){
  return(
    <div>
    <h2>{props.name}</h2>
    <img
      class="bImage"
      src={props.image}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
    </div>
  )
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card name="Hari" 
          image="https://www.pelago.com/img/countries/new-zealand/0811-1600_newzealand.jpg" 
          alt="avatar_img" 
          tel="+123 456 789" 
          email="hari@dham.com"/>  
     <Card name="Das" 
          image="https://www.we12travel.com/blog/wp-content/uploads/2016/11/Oevers-van-Lake-Hauroko-1-1140x855.jpg.webp" 
          alt="avatar_img" 
          tel="+987 654 321" 
          email="das@nowhere.com"/>  
    <Card name="Saviour" 
          image="https://internationalliving.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fwv75stsetqy3%2F6x7tcvxp9l1fLEeOgQybAC%2Fd9454196dfcd3a380507eaea1a12e7de%2FNew_Zealand.jpg%3Fq%3D60%26fit%3Dfill%26fm%3Dwebp&w=3840&q=60" 
          alt="avatar_img" 
          tel="+918 372 574" 
          email="gmail@saviour.com"/>  

    {/* <h2>Hari</h2>
    <img
      class="bImage"
      src="https://www.pelago.com/img/countries/new-zealand/0811-1600_newzealand.jpg"
      alt="avatar_img"
    />
    <p>+123 456 789</p>
    <p>hari@dham.com</p>

    <h2>Das</h2>
    <img
      class="bImage"
      src="https://www.we12travel.com/blog/wp-content/uploads/2016/11/Oevers-van-Lake-Hauroko-1-1140x855.jpg.webp"
      alt="avatar_img"
    />
    <p>+987 654 321</p>
    <p>das@nowhere.com</p>

    <h2>Saviour</h2>
    <img
      class="bImage"
      src="https://internationalliving.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fwv75stsetqy3%2F6x7tcvxp9l1fLEeOgQybAC%2Fd9454196dfcd3a380507eaea1a12e7de%2FNew_Zealand.jpg%3Fq%3D60%26fit%3Dfill%26fm%3Dwebp&w=3840&q=60"
      alt="avatar_img"
    />
    <p>+918 372 574</p>
    <p>gmail@saviour.com</p>*/}
  </div>, 
  document.getElementById("root")
);
