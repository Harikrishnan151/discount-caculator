
import './App.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function App() {

    const [amount, setAmount] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [finalamt, setFinalamt] = useState(0)
    const [save, setSave] = useState(0)

    const caculate = (e) => {
        const output = amount * discount / 100
        const input = amount - output
        console.log(input);
        console.log(output);
        setFinalamt(output)
        setSave(input)
    }

    const reset = (e) => {
        setAmount(0)
        setDiscount(0)
        setFinalamt(0)
        setSave(0)

    }
    return (
        <div className="App">


            <div className="box" id='box-box'>
                <div className="text-2">Discount Calculator</div>
                <div className="text-3">Use the discount calculator to find out the exact amount you will save!</div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 " id='input-1'>
                            <>  <div className="form">
                                <FloatingLabel controlId="floatingInput" label="Amount (₹)" className="inputs mb-5">
                                    <Form.Control value={amount || ""} onChange={(e) => setAmount(e.target.value)} style={{ width: '25rem' }} placeholder="Amount (₹)" />
                                </FloatingLabel>
                                <FloatingLabel controlId="number" label="Discount applied (%)" className=" inputs mb-5">
                                    <Form.Control value={discount || ""} onChange={(e) => setDiscount(e.target.value)} style={{ width: '25rem' }} type="number" placeholder="Discount applied (%)" />
                                </FloatingLabel>
                                <div className="save">
                                    <div>
                                        You Saved :
                                    </div>
                                    ₹ {save}
                                </div>
                                
                                </div>

                                <div className='buttons'>
                                    <Button onClick={reset} style={{ backgroundColor: 'rgb(225 12 39)' }} variant="outline-primary" className='btn'>Reset</Button>
                                    <Button onClick={caculate} style={{ backgroundColor: 'rgb(40, 184, 153)' }} variant="outline-primary" className='btn'>Calculate</Button>

                                </div>
                            </>
                        </div>
                        <div className="col-6" id='input-2'>
                            <div className="box-2 ">
                                <div className="box-3">
                                    <div className="text-4">
                                        Discount Amount
                                    </div>
                                </div>
                                <div className="box-4">
                                    <div className="text-5">
                                        New Price
                                    </div>
                                    <div className="number">
                                        ₹ {finalamt}
                                    </div>


                                </div>

                            </div>


                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default App;
