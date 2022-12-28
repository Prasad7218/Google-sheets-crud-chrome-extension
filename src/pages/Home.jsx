import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useChromeStorageLocal } from "use-chrome-storage";

const Home = (props) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  const [cdata, setCdata] = useState([]);
  const [tapedata, setTapedata] = useState([]);

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

    axios
      .get(
        "https://script.google.com/macros/s/AKfycbxwWD5Vo7_DzU3ymWqURKHa8v_KptwbO0F_g_CcTS79Rgdb-EIZamhVs9rb94zsCp6e/exec"
      )
      .then((res) => {
        console.log(res);
        setTapedata(res.data.data);
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
    var data1 = JSON.parse(localStorage.getItem("tabledata"));
    var data2 = JSON.parse(localStorage.getItem("tableheaddata"));
    console.log(data2);

    var data3 = [data2[6], data2[7], ...data1];
    setCdata(data3);
    console.log(data1);
    console.log(data1[0]);
    // document.getElementById("tab-data").innerHTML = data1;
  };

  const updateTapedata = (cdata) => {
    console.log(cdata);
    let tname = cdata[0];
    let price = cdata[1];
    let peratio = cdata[2];
    let pbratio = cdata[3];
    let dy = cdata[4];
    let spe = cdata[5];
    let spb = cdata[6];
    let sdy = cdata[7];

    let tobj = {
      name: tname,
      price: price,
      peratio: peratio,
      pbratio: pbratio,
      dy: dy,
      spe: spe,
      spb: spb,
      sdy: sdy,
    };
    console.log(tobj);

    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbxDs_W74jdwGFvZCaP7JzEVhhlHuBBugjMlmvb4YCBYwtML1HjLvJm5dZ2BkGXNDkCM/exec",
        tobj
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <table className="table">
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
      <p>{cdata[0]}</p>
      <p>{cdata[1]}</p>
      <p>{cdata[2]}</p>
      <p>{cdata[3]}</p>
      <p>{cdata[4]}</p>
      <p>{cdata[5]}</p>
      <p>{cdata[6]}</p>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">PE-ratio</th>
            <th scope="col">PB-ratio</th>
            <th scope="col">Dividend Yield</th>

            <th scope="col">Sector PE</th>

            <th scope="col">Sector PB</th>

            <th scope="col">Sector Div Yld</th>
          </tr>
        </thead>
        <tbody>
          {tapedata.map((el) => {
            return (
              <tr>
                <th scope="row">{el.name}</th>
                <td>{el.price}</td>
                <td>{el.peratio}</td>
                <td>{el.pbratio}</td>
                <td>{el.dy}</td>
                <td>{el.spe}</td>
                <td>{el.spb}</td>

                <td>{el.sdy}</td>
              </tr>
            );
          })}
        </tbody>

        <button
          className="btn btn-danger"
          onClick={() => updateTapedata(cdata)}
        >
          GET UPDATED DATA
        </button>
      </table>
    </>
  );
};

export default Home;
