import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './bachelor_logo.png'; // Import the image file

function App() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        hometown: '',
        season: 0,
        race: '',
        oneOnOne: '',
        joke_entrance: '',
        job_category: 'CORPORATE',
        FIR: '',
        note: 0
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const [submitted, setSubmitted] = useState(false); // state variable for tracking form submission
    const [prediction, setPrediction] = useState(null);

    const serverUrl = "http://127.0.0.1:5000";

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await axios.post(serverUrl + '/predict', formData)
        setSubmitted(true); // update state to indicate form has been submitted
        setPrediction(response.data)
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <img src={logo} alt="Logo" />
                <h2 className="text-center my-4">Calculate Your Chance of Winning The Bachelor 🌹</h2>

                <form onSubmit={handleSubmit} className="my-4">
                    <div className="form-group">
                        <div className="row mb-3">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            <input type="number" className="form-control" placeholder="Age" name="age" value={formData.age} onChange={handleInputChange}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            <select name="season" className="form-select" value={formData.season} onChange={handleInputChange}>
                                <option value="">Select season</option>
                                {Array.from({length: 20}, (_, i) => i + 1).map((value) => (
                                    <option key={value} value={value}>{value}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            <select name="hometown" className="form-select" value={formData.hometown} onChange={handleInputChange}>
                                <option value="">Select hometown</option>
                                <option value="NE">Northeast</option>
                                <option value="SE">Southeast</option>
                                <option value="NW">Northwest</option>
                                <option value="SW">Southwest</option>
                                <option value="Interational">International</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            <select name="race" className="form-select" value={formData.race} onChange={handleInputChange}>
                                <option value="">Select race</option>
                                <option value="Asian">Asian</option>
                                <option value="Black">Black</option>
                                <option value="Hispanic/Latino">Hispanic/Latino</option>
                                <option value="White">White</option>
                                <option value="Middle eastern">Middle eastern</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Did you make a joke entrance?:
                            <select
                                name="joke_entrance"
                                className="form-select"
                                value={formData.joke_entrance}
                                onChange={handleInputChange}
                            >
                                <option value="">Select option</option>
                                <option value="No">No</option>
                                <option value="Gimmick">Gimmick</option>
                                <option value="Regular">Regular joke</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            During which week did you have your 1 on 1 date:
                            <select name="oneOnOne" className="form-select" value={formData.oneOnOne} onChange={handleInputChange} >
                                <option value="">Select week</option>
                                {Array.from({length: 8}, (_, i) => i + 1).map((value) => (
                                    <option key={value} value={value}>{"Week " + value}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Did you receive the first impression rose:
                            <select name="FIR" className="form-select" value={formData.FIR} onChange={handleInputChange}>
                                <option value="">Select option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>
                    </div>
                <button type="submit" className="btn btn-light">Calculate my chance of winning</button>
            </form>
            {submitted && (
                <div className="result">
                    You made it until week { prediction }! ❤️‍🔥
                </div>
            )}
        </div>
        <div className="container text-center">
            More information on this project can be found <a href="https://docs.google.com/document/d/1qHxv66inSR5QIADViRgiq5ltjEn5SgZP-XzQkLR7MVk/edit?usp=sharing">here</a>.
            < br/>
            Code is available <a href="">here</a>.
        </div>
    </div>
    );
}

export default App;
