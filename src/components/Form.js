import React, { useState } from "react";

export default function Form() {
    const [formPersData, setFormPersData] = useState(
        {
            name: "",
            branch: "",
            rollno: "",
            hostel: ""
        }
    )

    const [formEventData, setFormEventData] = useState(
        {
            scievent1: false,
            scievent2: false,
            scievent3: false,
            scievent4: false,
            scievent5: false,
            scievent6: false,
            scievent1: false,
            sportevent2: false,
            sportevent3: false,
            sportevent4: false,
        }
    )

    function handleChange(event) {
        const { name, value } = event.target
        setFormPersData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
        console.log(formPersData)
    }

    return (
        <div className="form--div">
            <h1 className="mainhead">MILAN Registration</h1>
            <form className="form">
                <div className="form--personaldata">
                    <div className="form--head--personaldata">
                        <h2 className="form--head--text">Personal Info</h2>
                    </div>
                    <div className="form--personaldata--form">
                        <div className="form--personaldata--form--name">
                            <div className="form--elem">
                                <label className="form--label"
                                    htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="form--inputs"
                                    name="name"
                                    id="name"
                                    value={formPersData.name}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="form--elem">
                                <label className="form--label" htmlFor="branch">Branch</label>
                                <input
                                    type="text"
                                    placeholder="Branch"
                                    className="form--inputs"
                                    name="branch"
                                    id="branch"
                                    value={formPersData.branch}
                                    onChange={handleChange}
                                    required />
                            </div>
                        </div>
                        <div className="form--personaldata--form--name">
                            <div className="form--elem">
                                <label className="form--label" htmlFor="rollno">Roll No</label>
                                <input
                                    type="text"
                                    placeholder="Roll No"
                                    className="form--inputs"
                                    id="rollno"
                                    name="rollno"
                                    value={formPersData.rollno}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="form--elem">
                                <label className="form--label" htmlFor="hostel">Hostel</label>
                                <input
                                    type="text"
                                    placeholder="Hostel"
                                    className="form--inputs"
                                    id="hostel"
                                    name="hostel"
                                    value={formPersData.hostel}
                                    onChange={handleChange}
                                    required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form--events">
                    <div className="form--head--events">
                        <h2 className="form--head--text">Events</h2>
                    </div>
                    <div className="form--event--subs">
                        <h2 className="form--subhead--text--sci">Sci-tech</h2>
                        <div className="eventboxdiv">
                            <div className="eventbox1">
                                <div className="checkelem">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        id="event1"
                                        name="event1"
                                    />
                                    <label htmlFor="event1">Event1</label>
                                </div>
                                <div className="checkelem">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        id="event2"
                                        name="event2"
                                    />
                                    <label htmlFor="event2">Event2</label>
                                </div>
                                <div className="checkelem">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        id="event3"
                                        name="event4"
                                    />
                                    <label htmlFor="event3">Event3</label>
                                </div>
                            </div>
                            <div className="eventbox2">
                                <div className="checkelem">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        id="event4"
                                        name="event4"
                                    />
                                    <label htmlFor="event4">Event4</label>
                                </div>
                                <div className="checkelem">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        id="event5"
                                        name="event5"
                                    />
                                    <label htmlFor="event5">Event5</label>
                                </div>
                                <div className="checkelem">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        id="event6"
                                        name="event6"
                                    />
                                    <label htmlFor="event6">Event6</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form--event--subs">
                        <h2 className="form--subhead--text">Sports</h2>
                        <div className="eventboxdiv">
                            <div className="eventbox1">
                                <div className="checkelem">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                    <label>Event1</label>
                                </div>
                                <div className="checkelem">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                    <label>Event2</label>
                                </div>
                            </div>
                            <div className="eventbox2">
                                <div className="checkelem">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                    <label>dkfjgsdkfjgshjkfsh3</label>
                                </div>
                                <div className="checkelem">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                    <label>Event4</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttondiv">
                    <button className="buttonsubmit">Submit</button>
                </div>
            </form>
        </div>
    )
}