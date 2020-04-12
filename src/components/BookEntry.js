import React, { useState } from 'react';
import { Form, Feed, Input, Button, Image } from 'semantic-ui-react';

const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'/>

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
    <Form>
      <Form.Field>
        <Input
        placeholder="Enter one of your favorite book titles "
        value={title}
        onChange={event => setTitle(event.target.value)}
        />
      </Form.Field>

      <Form.Field>
        <Button onClick= {async () => {
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
        Add</Button>
      </Form.Field>
    </Form>
      <div>{style}
        <Feed>
          <Feed.Event>
              <Feed.Content content={outputURL1} />
          </Feed.Event>
          <Feed.Event>
              <Feed.Content content={outputURL2} />
          </Feed.Event>
          <Feed.Event>
              <Feed.Content content={outputURL3} />
          </Feed.Event>
          <Feed.Event>
              <Feed.Content content={outputURL4} />
          </Feed.Event>
          <Feed.Event>
              <Feed.Content content={outputURL5} />
          </Feed.Event>

        </Feed>
      </div>
  </div>
  );
};
