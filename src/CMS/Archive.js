import React, { useEffect } from "react";
import styled from "styled-components";
import Report from "./Report";
import { useSelector, useDispatch } from "react-redux";
import getArchiveAction from "../actions/getArchiveAction";
const Archive = () => {
  const dispatch = useDispatch();
  const { archive, isLoadingArchive } = useSelector(
    (state) => state.getArchive
  );
  useEffect(() => {
    dispatch(getArchiveAction(1));
  }, [dispatch]);
  return (
    <Wrapper>
      {archive &&
        !isLoadingArchive &&
        archive.map((report) => (
          <Report
            report_id={report.report_id}
            customer_id={report.customer_id}
            name={report.full_name}
            message={report.message}
            email={report.email}
            customer_id={report.customer_id}
            archive={true}
          />
        ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
`;
const Title = styled.div`
  width: 100%;
  padding: 1em 0;
  h4 {
    font-size: 1rem;
    padding-top: 1em;
  }
  h6 {
    font-size: 0.8rem;
    color: #545d68;
    padding-bottom: 1em;
  }
`;
export default Archive;
