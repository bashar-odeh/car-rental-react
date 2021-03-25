import React, { useEffect, useState } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//
import { useSelector, useDispatch } from "react-redux";
import sendReportAction from "../../actions/sendReportAction";
import swal from "sweetalert";
const Reviews = ({ car_details }) => {
  const dispatch = useDispatch();
  const { userStatus } = useSelector((state) => state.userStatus);
  const { isSendingReport, reportResponse } = useSelector(
    (state) => state.sendReport
  );
  const [sending, setSending] = useState(false);
  const [data, setData] = useState({
    customer_name: null,
    email: null,
    message: null,
    car_id: car_details.car_id,
  });
  useEffect(() => {
    if (reportResponse === true) {
      setTimeout(() => {
        setSending((p) => false);
        dispatch({ type: "IS_SENDING_REPORTS" });
      }, 1000);
    }
  }, [reportResponse]);

  const EmptyFeild = () => {
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };
  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSend = (e) => {
    e.preventDefault();
    e.target.checkValidity();
    setSending((p) => true);
    dispatch(sendReportAction(data));
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
            {!sending && (
              <ButtonPrimary isSendingReport={isSendingReport}>
                <button>send</button>
              </ButtonPrimary>
            )}{" "}
            {sending && (
              <ButtonPrimary isSendingReport={isSendingReport}>
                <button
                  style={{ pointerEvents: "none", backgroundColor: "gray" }}
                >
                  sending
                </button>
              </ButtonPrimary>
            )}
          </Form>
        </>
      )}
    </StyledReviews>
  );
};
const StyledReviews = styled(motion.div)``;
const Title = styled(motion.div)`
  display: block;
  width: 100%;
  height: 100%;
  margin: 2rem 0;
  h3 {
    font-size: 2rem;
    padding: 1rem 0;
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
    padding: 1.2rem 1.8rem;
    border: none;
    background: #1d62e0;
    font-size: 1.3rem;
    word-spacing: 2px;
    text-align: center;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.5rem;
  }
`;
export default Reviews;
