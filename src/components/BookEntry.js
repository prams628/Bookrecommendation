import React, { useState } from 'react';
import { Form, Input, Button, Image } from 'semantic-ui-react';

export const BookEntry = ()  => {
  const [title, setTitle] = useState(''); //  Empty String
  const [outputURL, setOutputURL] = useState(""); //Empty String
  return (
  <div>
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
            console.log("Response Worked! ");
            console.log(JSON.stringify(response.url));
            console.log(response);
            setTitle("We found your favorite book!")
            console.log(response);
            fetch("/novel_novel").then(response =>
              response.json().then(data => {
                setOutputURL(data.image_url);
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
    <Image src={outputURL} size='small' />
  </div>
  );
};
