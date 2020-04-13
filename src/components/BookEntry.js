import React, { useState } from 'react';

var input1 = {
  marginTop: "100px",
  marginLeft: "100px",
  width: "800px",
  border: "none",
  fontFamily: "Acme",
  fontSize: "25px"
}

export const BookEntry = ()  => {
  const [title, setTitle] = useState(''); //  Empty String
  const [outputURL1, setOutputURL1] = useState('');
  const [outputURL2, setOutputURL2] = useState('');
  const [outputURL3, setOutputURL3] = useState('');
  const [outputURL4, setOutputURL4] = useState('');
  const [outputURL5, setOutputURL5] = useState('');
  var nameArr = [];

  return (
  <div id="form">
    <form>
        <input style={{marginTop: "100px", marginLeft: "100px", width: "800px", border: "none",
         fontFamily: "Acme", fontSize: "25px", border: "none",borderBottom: "4px solid #581845"}}
        placeholder="Enter one of your favorite books"
        value={title}
        onChange={event => setTitle(event.target.value)}
        />
        <button style={{color: "white",
  textTransform: 'uppercase', textDecoration: 'none', background: '#581845', padding: '10px', borderRadius: '5px',
  display: 'inline-block', border: 'none', transition: "all 0.4s ease 0s", fontFamily: "Acme", paddingRight: "35px", 
  paddingLeft: "35px", fontSize: "25px", margin: "10px"}} onClick= {async () => {
          const book = {title};
          const response = await fetch("/input_book", {
            method: "POST",
            headers: {
              "Content_Type": "application/json"
            },
            body:
              JSON.stringify(book)
            })

          if (response.ok) {
            var form = document.getElementById("form") 
            // console.log("Response Worked! ");
            // console.log(JSON.stringify(response.url));
            // console.log(response);
            fetch("/novel_novel").then(response =>
              response.json().then(data => {
              nameArr = data.original_title.split(";")

              setOutputURL1(nameArr[0]);
              setOutputURL2(nameArr[1]);
              setOutputURL3(nameArr[2]);
              setOutputURL4(nameArr[3]);
              setOutputURL5(nameArr[4]);
                  // console.log(outputURL)
              })
            ); 
          }
          else {
            console.log("Title not found")
            setTitle("We did not find this title. Please try again!")
          } 
        }
      }>
        Search</button>
    </form>
      <div style={{fontFamily: "Aclonica", fontSize:"35px"}}>
        <p> {outputURL1} </p>
        <p> {outputURL2} </p>
        <p> {outputURL3} </p>
        <p> {outputURL4} </p>
        <p> {outputURL5} </p>
        <br/>
      </div>
  </div>
  );
};
