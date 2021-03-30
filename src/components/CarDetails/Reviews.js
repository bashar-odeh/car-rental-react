import React, { useEffect, useState, useRef } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//
import { useSelector, useDispatch } from "react-redux";
import sendReportAction from "../../actions/sendReportAction";
import swal from "sweetalert";
const Reviews = ({ car_details }) => {
  console.log("hi");
  const dispatch = useDispatch();
  const { userStatus } = useSelector((state) => state.userStatus);
  const { isSendingReport, reportResponse } = useSelector(
    (state) => state.sendReport
  );
  const ref = useRef();
  const [data, setData] = useState({
    customer_name: null,
    email: null,
    message: null,
    car_id: car_details.car_id,
  });

  const onSend = (e) => {
    console.log("1");
    e.preventDefault();
    e.target.checkValidity();
    ref.current.innerText = "sending";
    ref.current.classList.add("sending");
    dispatch(sendReportAction(data));
  };

  useEffect(() => {
    if (isSendingReport === false) {
      ref.current.innerText = "Book this car";
      ref.current.classList.remove("sending");
      dispatch({ type: "IS_SENDING_REPORTS" });
    }
  }, [isSendingReport]);

  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <StyledReviews>
      {userStatus === false && (
        <Title>
          <h3>Login to Leave a Reply</h3>
        </Title>
      )}
      {userStatus === true && (
        <>
          <Title>
            <h3>Leave a Reply</h3>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </Title>
          <Form onSubmit={onSend}>
            <div>
              <input
                type="text"
                name="customer_name"
                placeholder="Name *"
                onChange={dataHandler}
                required
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={dataHandler}
                required
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Comment"
              name="message"
              onChange={dataHandler}
              required
            ></textarea>

            <ButtonPrimary>
              <button ref={ref}>send</button>
            </ButtonPrimary>
          </Form>
        </>
      )}
    </StyledReviews>
  );
};
const StyledReviews = styled(motion.div)`
  .sending {
    background: gray;
    pointer-events: none;
  }
`;
const Title = styled(motion.div)`
  display: block;
  width: 100%;
  height: 100%;
  margin: 2rem 0;
  h3 {
    font-size: 2rem;
    padding-top: 0.5em;
  }
  p {
    font-size: 1rem;
  }
`;
const Form = styled(motion.form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-wrap: wrap;
    input {
      flex: 1 1 40%;
      border: 2px solid #ccc;
      padding: 0.7rem;
      margin-right: 0.5rem;
      border-radius: 0.5rem;
    }
  }
  textarea {
    border: 2px solid #ccc;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 0.5rem;
  }
`;
const ButtonPrimary = styled.div`
  width: 100%;

  button {
    width: 100%;
    padding: 0.8em 1.2em;
    border: none;
    background: #1d62e0;
    font-size: 1.2rem;
    word-spacing: 2px;
    letter-spacing: 1px;
    text-align: center;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.5em;
  }
`;
export default Reviews;
