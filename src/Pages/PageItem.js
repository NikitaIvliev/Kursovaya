import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import Header from '../Components/Header';


function ContactForm(props) {
  
  const [state, handleSubmit] = useForm("xgejqvod");
  const { id } = props;

  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  
  return (
    <div>
      <Header/>
      <form onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={id}/>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;


