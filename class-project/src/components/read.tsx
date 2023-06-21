import axios from "axios";
import React,{useEffect, useState} from "react";
import { Link , useParams} from "react-router-dom";



const Read: React.FC = () =>{
    const { id } = useParams<{ id: string }>();
    const [readData, setReadData] = useState<any>(null);
    //alert(id)


    useEffect(() => {

        const fetchData = async () => {
            
          try {
            const response = await axios.get(`http://localhost:3002/clinical-record/${id}`);
            //alert(JSON.stringify(response.data))
            setReadData(response.data);
            
          } catch (error) {

            console.error("Error fetching the user data", error);
            //alert(error)
          }
        };
    
        fetchData();
      },[]);

    
    return(
        <div>
            <h3>
                Your data is displayed below
            </h3>
            {
            
            readData &&  ( 
            
                <div key= {readData[0].id}>
                <p>
                    Your first name is : {readData[0].PatientDatum.firstName}
                </p><p>
                        Your middle name is : {readData[0].PatientDatum.middleName}
                    </p>
                    <p>
                    Your surname is : {readData[0].PatientDatum.surName}
                    </p>
                    <p>
                    Your data of Birth is: {readData[0].PatientDatum.dateOfBirth.substring(0,10)}
                    </p>
                    <p>
                    Your home address is: {readData[0].PatientDatum.homeAddress}
                    </p>
                    <p>
                    Your Matriculation number : {readData[0].PatientDatum.matriculationNumber}
                    </p>
                    <p>
                    Your clinic date: {readData[0].clinicDate.substring(0,10)}
                    </p>
                    <p>
                    Your Nature Of Ailment: {readData[0].natureOfAilment}
                    </p>
                    <p>
                    The Medicine Prescribed: {readData[0].medicinePrescribed}
                    </p>
                    <p>
                    The procedure undertaken: {readData[0].proceedureUndertaken}
                    </p>
                    <p>
                    Your Next Date of Appointment is: {readData[0].dateOfNextAppointment.substring(0,10)}
                    </p>
                    <h4>
                        Click me to Update your data
                    </h4>
                    < Link to= {`/update/${readData[0].PatientDatum.matriculationNumber} `} type="submit">
                Update Records
                    </Link>
                    </div>
            )
        }
           
           
               
        </div>
    )
}
export default Read;