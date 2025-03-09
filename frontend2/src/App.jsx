import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchData, postData } from '../src/services/api';

function App() {
    const [data, setData] = useState(null)
    //const [number, setNumber] = useState(null)

    const loadData = async () => {
        try {
            const result = await fetchData();
            setData(result);
        } catch (err) {
            console.error(err.message);
        } finally {
            console.log('finish get data');
        }
    }

    const generateNumber = async () => {
        try {
            const request = {
                Number: Math.floor(Math.random() * 1000000)
            }
            const result = await postData(request);
            setData(result);
        } catch (err) {
            console.error(err.message);
        } finally {
            console.log('finish get data');
        }
    }

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React frontend 2</h1>
            <div className="card">
                <button onClick={generateNumber}>Generate Number</button>
                <button onClick={loadData}>Get Data </button>
                {data &&
                    (
                    <p>Result from <code>{data.from}</code>: <code>{data.result}</code></p>
                    )}
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
