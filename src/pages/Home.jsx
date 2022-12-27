import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useChromeStorageLocal } from "use-chrome-storage";

const Home = (props) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  //   const [items] = useChromeStorageLocal("", 0);

  useEffect(() => {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbyDWEra2Mf_Ql9I72Bj9RyUy18B-NfJrV6BltCLTNprZ0Yfd2h-imjDkuc067O_Kk3z/exec"
      )
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const updateData = (el) => {
    let obj = {
      name: el.name,
      tilldategain: el.tilldategain,
      currentvalue: value,
    };
    console.log(obj);
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbwUvoauEL9uBmw476S1PZVWQX9PkVbQEVCmbTEYaRV1Yt0fT6J_h9jkaWUJ37fb36iD/exec",
        obj
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cData = () => {
    var data1 = localStorage.getItem("tabledata");
    console.log(data1);
    document.getElementById("tab-data").innerHTML = data1;
  };

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Marketprice</th>
            <th scope="col">Avg-cost</th>
            <th scope="col">Current-value</th>
            <th scope="col">Investment-amount</th>

            <th scope="col">till-date-gain</th>

            <th scope="col">todays-loss</th>

            <th scope="col">profit-by</th>

            <th scope="col">loss-by</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => {
            return (
              <tr>
                <th scope="row">{el.name}</th>
                <td>{el.marketprice}</td>
                <td>{el.avgcost}</td>
                <td>{el.currentvalue}</td>
                <td>{el.investmentamount}</td>
                <td>
                  {el.tilldategain}
                  <input type="number" onChange={changeHandler} value={value} />
                </td>
                <td>{el.todaysloss}</td>

                <td>{el.pby}</td>
                <td>{el.lby}</td>
                <td>
                  <button
                    class="btn btn-primary"
                    onClick={() => updateData(el)}
                  >
                    UPDATE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <button class="btn btn-danger" onClick={cData}>
          Get data
        </button>
        <h4 id="tab-data"></h4>
      </table>
      <h1>{props.tdata}</h1>
    </>
  );
};

export default Home;
