import React, { useEffect } from "react";
import Managment from "../Managment";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import PageWrapper from "../PageWrapper";
import Archive from "../Archive";
import Report from "../Report";
import getReportsAction from "../../actions/getReportsAction";
import { useDispatch, useSelector } from "react-redux";

const Reports = () => {
  const { reports, isLoadingReports } = useSelector(
    (state) => state.getReports
  );
  const { response, isUpdating } = useSelector(
    (state) => state.updateReportStatus
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReportsAction(0));
  }, [dispatch, response]);
  return (
    <PageWrapper>
      <Switch>
        <Route path="/cms/reports" exact>
          <Title>
            <h4>Reports</h4>
            <h6>Daily Reports</h6>
          </Title>
          <Wrapper>
            {reports &&
              !isLoadingReports &&
              reports.map((report) => (
                <Report
                  report_id={report.report_id}
                  customer_id={report.customer_id}
                  name={report.full_name}
                  message={report.message}
                  email={report.email}
                  customer_id={report.customer_id}
                />
              ))}
          </Wrapper>
        </Route>
        <Route path="/cms/reports/archive">
          <Title>
            {" "}
            <h4>Reports</h4>
            <h6>Archive</h6>
          </Title>
          <Archive />
        </Route>
      </Switch>
    </PageWrapper>
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

export default Reports;
