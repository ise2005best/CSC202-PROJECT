import React, { useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { response } from "express";
import { error } from "console";

const Create: React.FC = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [surName, setSurName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [homeAddress, setHomeAddress] = useState('');
    const [dateOfRegistration, setDateOfRegistration] = useState('');
    const [matriculationNumber, setMatriculationNumber] = useState('');
    const [clinicDate, setclinicDate] = useState('');
    const [natureOfAilment, setNatureOfAilment] = useState('');
    const [medicinePrescribed, setMedicinePrescribed] = useState('');
    const [proceedureUndertaken, setProceedureUndertaken] = useState('');
    const [dateOfNextAppointment, setDateOfNextAppointment] = useState('');
    //const { id } = useParams<{ id: string }>();
    const changefirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);

    }
    const changesurName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSurName(event.target.value);

    }
    const changeMiddleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMiddleName(event.target.value);

    }
    const changeDateofBirth = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDateOfBirth(event.target.value);

    }
    const changeHomeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHomeAddress(event.target.value);

    }
    const changeDateOfRegistration = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDateOfRegistration(event.target.value);
    }
    const changeMatriculationNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMatriculationNumber(event.target.value);
    }
    const navigateToReadPage = () => {
        if (
            !firstName ||
            !surName ||
            !middleName ||
            !dateOfBirth ||
            !homeAddress ||
            !dateOfRegistration ||
            !matriculationNumber ||
            !clinicDate ||
            !natureOfAilment ||
            !dateOfNextAppointment
        ) {
            // Handle the case when any of the input fields are empty
            alert('Please fill in all the required fields');
            return;
        }
        else {
            postData();
            console.log(postData)
        }
    }

    const changeClinicDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setclinicDate(event.target.value);
    }
    const changeNatureOfAilment = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNatureOfAilment(event.target.value);
    }
    const changeMedicinePrescribed = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMedicinePrescribed(event.target.value);
    }
    const changeProcedureUndertaken = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProceedureUndertaken(event.target.value);
    }
    const changeDateOfNextAppointment = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDateOfNextAppointment(event.target.value);
    }

    let record = {
        patientDatum: {
            firstName,
            surName,
            middleName,
            homeAddress,
            matriculationNumber,
            dateOfBirth,
            dateOfRegistration,
        },
        clinicDate,
        natureOfAilment,
        medicinePrescribed,
        proceedureUndertaken,
        dateOfNextAppointment,
    }

    const postData = () => {
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('surName', surName);
        localStorage.setItem('middleName', middleName);
        localStorage.setItem('dateOfBirth', dateOfBirth);
        localStorage.setItem('homeAddress', homeAddress);
        localStorage.setItem('dateOfRegistration', dateOfRegistration);
        localStorage.setItem('clinicDate', clinicDate);
        localStorage.setItem('natureOfAilment', natureOfAilment);
        localStorage.setItem("medicine Prescribed", medicinePrescribed);
        localStorage.setItem('procedure Undertaken', proceedureUndertaken);
        localStorage.setItem('date of next appointment', dateOfNextAppointment);
        axios.post(`http://localhost:3002/clinical-record`, record)
            .then(response => {
                navigate(`/records/${matriculationNumber}`)
            })
            .catch(error => {
                alert("Couldnt reach the API endpoint")
            })

    }
    return (
        <div className="create-form">
            <h3 className="welcome-tag">
                Hello Welcome To ISESEN App
            </h3>
            <h4>
                Please input your Data
            </h4>
            <div className="table1">
                <label>
                    First Name
                </label>
                <p>
                    <input
                        type="text"
                        placeholder="First Name "
                        name="firstName"
                        required
                        onInput={changefirstName} />
                </p>
                <label>
                    Last Name
                </label>
                <p>
                    <input type="text" placeholder="Last Name " name="SurName" required
                        onInput={changesurName} />
                </p>
                <label>
                    Middle Name
                </label>
                <p>
                    <input type="text" placeholder="Middle Name. " name="middletName" required
                        onInput={changeMiddleName} />
                </p>
                <label>
                    Date Of Birth
                </label>
                <p>
                    <input type="date" placeholder="Input your date of birth " name="DOB" required
                        onInput={changeDateofBirth} />
                </p>
                <label>
                    Home Address
                </label>
                <p>
                    <input type="text" placeholder="Home Address " name="homeAddress" required
                        onInput={changeHomeAddress} />
                </p>
                <label>
                    Date Of Registration
                </label>
                <p>
                    <input type="date" placeholder="Input your date of registration  " name="DOR" required
                        onInput={changeDateOfRegistration} />
                </p>
                <label>
                    Matric Number
                </label>
                <p>
                    <input type="number" placeholder="Matric Number" name="matric"
                        onInput={changeMatriculationNumber} />
                </p>
            </div>
            <div className="table2">
                <h4>
                    Please kindly fill in your Clinical Data as well
                </h4>
                <label>
                    What day where you attended to
                </label>
                <p>
                    <input type="date" placeholder="" name="clinicDate" onChange={changeClinicDate}>
                    </input>
                </p>
                <label>
                    Give a brief description of your illness
                </label>
                <p>
                    <input type="text" placeholder="Nature of ailment " name="ailment " onInput={changeNatureOfAilment}>
                    </input>
                </p>
                <label>
                    What were the medicine prescribed if any
                </label>
                <p>
                    <input type="text" placeholder="medicine Prescriped" name="medicinePres" onInput={changeMedicinePrescribed}>
                    </input>
                </p>
                <label>
                    What were the Procedures Undertaken if any
                </label>
                <p>
                    <input type="text" placeholder="Procedures Undertaken" name="Procedure undertaken" onInput={changeProcedureUndertaken}>
                    </input>
                </p>

                <label>
                    What is the date of your next Appointment
                </label>
                <p>
                    <input type="date" placeholder="" name="appointment" onInput={changeDateOfNextAppointment}>
                    </input>
                </p>
            </div>


            <div className="submitData">
                <form>
                    Click me to view your data
                </form>
                <button onClick={navigateToReadPage} type="submit" >
                    view data
                </button>
            </div>



        </div>
    )
}

export default Create;