import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ThankYouForDelete: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const deleteData = () => {
    axios.delete(`http://localhost:3002/clinical-record/${id}`)
      .then(response => {
        navigate('/thanksForUsingOurData');
      })
      .catch(error => {
        alert("There was an error fetching the data")
      });
  }

  return (
    <div>
      <h2>THANK YOU FOR Updating Your Data WITH ISESEN CLINIC</h2>
      <h4>Click me if you want to delete your data</h4>
      <button type="submit" onClick={deleteData}>
        Delete data
      </button>
    </div>
  );
}

export default ThankYouForDelete;
