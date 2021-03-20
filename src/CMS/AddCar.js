import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import signupCarAction from "../actions/signupCarAction";
import axios from "axios";
import formData from "react-form-data";

const AddCar = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [numberOfPic, setNumberOfPic] = useState(1);
  const [arr, setArr] = useState([]);
  const [data, setData] = useState([]);
  const [pic, setPic] = useState([]);
  const [picData, setPicData] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const ref = useRef();
  useEffect(() => {
    let temp = [];

    for (let i = 0; i < numberOfPic; i++) {
      temp.push(
        <InputWrapper key={i}>
          <FormGroup>
            <FormField
              type="text"
              className="form__field"
              placeholder={`Add pic number${i + 1}`}
              name={`number${i}`}
              id={`number${i}`}
              onChange={picDataHandler}
              required
            />

            <label className="form__label">{`Color Of Car Pic ${i + 1}`}</label>
          </FormGroup>{" "}
          <FormGroup>
            <FormField
              type="file"
              className="form__field"
              placeholder={`Add pic number${i + 1}`}
              name={`photo${i}`}
              id={`photo${i}`}
              required
              onChange={picHandler}
            />

            <label className="form__label">{`Pic ${i + 1}`}</label>
          </FormGroup>
        </InputWrapper>
      );
    }
    setArr([...temp]);
  }, [numberOfPic, picData, pic]);

  const { isLoadingCar, carResponse } = useSelector(
    (state) => state.signupCustomer
  );

  const signupHandler = (e) => {
    e.preventDefault();
    e.target.checkValidity();
    dispatch(signupCarAction(data));
  };
  const signupPicHandler = (e) => {
    e.preventDefault();
    e.target.checkValidity();
    uploadPic(e);
  };
  const uploadPic = async (e) => {
    const formData = new FormData();

    let temp_pic = [];
    let temp_PicData = [];
    for (let i = 0; i < numberOfPic; i++) {
      temp_pic[i] = pic[`photo${i}`];
      temp_PicData[i] = picData[`number${i}`];
    }

    for (let i = 0; i < numberOfPic; i++) {
      formData.append(temp_PicData[i], temp_pic[i]);
    }
    formData.append("car_id", data.car_id);

    let headers = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    let res = await axios.post(
      "http://localhost/car-rental/admin/upload.php",
      formData,
      {
        headers: headers,
        withCredentials: true,
      }
    );
    console.log(res.data);
    if (res.data === true) {
      swal("Car Registerd ", "", "success");
      setTimeout(() => {
        setCurrentPage(1);
      }, 2000);
      EmptyFeild();
    } else if (
      res.data === "wrong file type only jbg , png and jbeg are allowed"
    ) {
      swal("Only jpg, jpeg, png and  gif are allowed ", "", "warning");
    } else if (res.data === "file too large") {
      swal("files too large", "", "warning");
    } else if (res.data === false) {
      swal("something went wrong , call system services ", "", "warning");
    }
    dispatch({ type: "END_SIGNING_CAR_UP" });
  };
  useEffect(() => {
    checkResponse();
  }, [carResponse]);
  const checkResponse = () => {
    if (carResponse === true) {
      ref.current.scrollIntoView();
      setCurrentPage(1);
    } else if (carResponse === "exist") {
      console.log(carResponse);
      swal("Car Alredy Exists !", "", "info");
    }
  };
  const EmptyFeild = () => {
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };
  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const picDataHandler = (e) => {
    setPicData({ ...picData, [e.target.name]: e.target.value });
  };
  const picHandler = (e) => {
    setPic({ ...pic, [e.target.name]: e.target.files[0] });
  };

  return (
    <Wrapper>
      {currentPage === 0 && (
        <Adding>
          {carResponse === true && (
            <Next currentPage={currentPage}>
              <i
                ref={ref}
                className="fas fa-arrow-right"
                onClick={() => setCurrentPage(1)}
              ></i>
            </Next>
          )}
          <Title>
            <h3 className="user-title title">Add Car</h3>
          </Title>
          <form onSubmit={signupHandler}>
            <InputWrapper>
              <FormGroup>
                <FormField
                  type="input"
                  className="form__field"
                  placeholder="car_id"
                  name="car_id"
                  id="car_id"
                  required
                  onChange={dataHandler}
                />
                <label className="form__label">ID</label>
              </FormGroup>
              <FormGroup>
                <FormField
                  type="text"
                  className="form__field"
                  placeholder="make"
                  name="make"
                  id="make"
                  required
                  onChange={dataHandler}
                />
                <label className="form__label">make</label>
              </FormGroup>
            </InputWrapper>
            <InputWrapper>
              <FormGroup>
                <FormField
                  type="input"
                  className="form__field"
                  placeholder="model"
                  name="model"
                  id="model"
                  required
                  onChange={dataHandler}
                />
                <label className="form__label">model</label>
              </FormGroup>
              <FormGroup>
                <FormField
                  type="number"
                  className="form__field"
                  placeholder="cost"
                  name="cost"
                  id="cost"
                  required
                  onChange={dataHandler}
                />
                <label className="form__label">cost</label>
              </FormGroup>{" "}
            </InputWrapper>{" "}
            <InputWrapper>
              <FormGroup>
                <FormField
                  type="input"
                  className="form__field"
                  placeholder="fuel"
                  name="fuel"
                  id="fuel"
                  list="type"
                  required
                  onChange={dataHandler}
                />
                <datalist id="type">
                  <option value="Electric"></option>
                  <option value="Hybrid"></option>
                  <option value="Gas"></option>
                  <option value="Petrol"></option>
                </datalist>
                <label className="form__label">fuel</label>
              </FormGroup>

              <FormGroup>
                <FormField
                  type="text"
                  className="form__field"
                  placeholder="transition"
                  name="transition"
                  id="transition"
                  list="trans"
                  required
                  onChange={dataHandler}
                />
                <datalist id="trans">
                  <option value="Manual"></option>
                  <option value="Automatic"></option>
                </datalist>
                <label className="form__label">transition</label>
              </FormGroup>
            </InputWrapper>
            <InputWrapper>
              <FormGroup>
                <FormField
                  type="input"
                  className="form__field"
                  placeholder="warranty"
                  name="warranty"
                  id="warranty"
                  list="war"
                  required
                  onChange={dataHandler}
                />
                <datalist id="war">
                  <option value="Yes"></option>
                  <option value="No"></option>
                </datalist>
                <label className="form__label">warranty</label>
              </FormGroup>{" "}
              <FormGroup>
                <FormField
                  type="input"
                  className="form__field"
                  placeholder="Made Year"
                  name="made_year"
                  id="made_year"
                  required
                  onChange={dataHandler}
                />{" "}
                <label className="form__label">Made Year</label>
              </FormGroup>
            </InputWrapper>
            <InputWrapper>
              <FormGroup>
                <FormField
                  type="date"
                  className="form__field"
                  placeholder="make"
                  name="date"
                  id="date"
                  required
                  onChange={dataHandler}
                />
                <label className="form__label">Date</label>
              </FormGroup>
            </InputWrapper>
            <InputWrapper>
              <FormGroup>
                <textarea
                  cols="80"
                  rows="10"
                  name="description"
                  id="description"
                  placeholder="Descripe the Car"
                  style={{ padding: "1em", fontSize: "1.2rem" }}
                  required
                  onChange={dataHandler}
                ></textarea>
              </FormGroup>
            </InputWrapper>
            <Buttons>
              <ButtonPrimary>Save</ButtonPrimary>
            </Buttons>
          </form>
        </Adding>
      )}
      {currentPage === 1 && (
        <AddPic>
          <Previous currentPage={currentPage}>
            <i
              className="fas fa-arrow-left "
              onClick={() => setCurrentPage(0)}
            ></i>
          </Previous>
          <Title>
            <h3 className="add-title title">Add Pictures</h3>
          </Title>
          <form onSubmit={signupPicHandler} encType="multipart/form-data">
            <InputWrapper>
              <FormGroup>
                <FormField
                  type="number"
                  className="form__field"
                  placeholder="Number Of Pic"
                  name="number"
                  id="number"
                  min="1"
                  max="8"
                  value={numberOfPic}
                  onChange={(e) => {
                    setNumberOfPic((p) => e.target.value);
                  }}
                />
                <label className="form__label">Number of Pic</label>
              </FormGroup>
            </InputWrapper>
            {arr.map((ele, index) => ele)}
            <Buttons>
              <ButtonPrimary>Save</ButtonPrimary>
            </Buttons>
          </form>
        </AddPic>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
`;
const Title = styled.div`
  width: 100%;
  padding: 1em 0;
  h3 {
    display: flex;
    align-items: center;
    font-size: 1rem;
  }
  .title {
    &::before {
      display: flex;
      align-items: center;
      margin-right: 5px;
      font-size: 2rem;
      color: #174bad;
      font-family: "Font Awesome 5 Free";
    }
  }
  .user-title {
    &::before {
      font-weight: 900;
      content: "\f067";
    }
  }
  .add-title {
    &::before {
      font-weight: 900;
      content: "\f302";
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const FormField = styled.input`
  width: 90%;
  height: 100%;
  margin-right: 0.5rem;
  border: 0;
  border-bottom: 1px solid black;
  outline: 0;
  font-size: 1rem;
  color: black;
  padding: 1rem 0;
  background: transparent;
  transition: border-color 0.2s;
  &::placeholder {
    color: transparent;
  }
  &:placeholder-shown ~ .form__label {
    font-size: 1rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 0.8rem;
      color: rgb(17, 106, 196);
      font-weight: 700;
    }
  }
  &:required,
  &:invalid {
    box-shadow: none;
  }
`;
const FormGroup = styled.div`
  width: 100%;
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 0.8rem;
    color: $gray;
  }
`;
const ButtonPrimary = styled.button`
  border: none;
  padding: 1rem 2rem;
  margin: 1rem 0;
  background: #174bad;
  color: white;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
`;
const Buttons = styled.div``;
const Next = styled.div`
  position: relative;
  pointer-events: all;

  i {
    z-index: 10;
    position: absolute;
    right: 0;
    font-size: 2.5rem;
    color: #174bad;
    pointer-events: all;
    cursor: pointer;

    &::after {
      font-family: sans-serif;
      font-weight: normal;
      content: "Next";
      background: black;
      color: white;
      font-size: 0.5em;
      color: white;
      border-radius: 10px;
      position: absolute;
      padding: 0.5em;
      left: -50%;
      bottom: 100%;
      transform: scale(0);
      transition: 0.3s all ease;
    }
    &:hover::after {
      transform: scale(1);
    }
  }
`;
const Previous = styled(Next)`
  i {
    &::after {
      content: "Previous";
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;
const Adding = styled.div`
  h3 {
    font-size: 0.9rem;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
const AddPic = styled.div``;
export default AddCar;
