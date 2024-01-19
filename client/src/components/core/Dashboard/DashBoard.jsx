import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import ReportCard from "./ReportCard";
import LineChartOD from "./utils/LineChart";
import PieChartOD from "./utils/PieChart";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/app/state";
import { fetchDashboard } from "../../../redux/global/userSlice";
import StackIcon from "../vendors/Icons/StackIcon";
import MailCheck from "../vendors/Icons/MailCheck";
import UserPassIcon from "../vendors/Icons/UserPassIcon";
import UserCheck from "../vendors/Icons/UserCheck";

const DashBoard = () => {
  const dispatch = useDispatch();
  const { currentUser, dashBoardInfo, loading } = useSelector(selectUser);

  useEffect(() => {
    if (!dashBoardInfo) {
      dispatch(fetchDashboard());
    }
  }, [dispatch]);
  const reportCardData = [
    {
      title: "Total Emails Sent by You",
      value: dashBoardInfo?.userMailCount,
      icon : <MailCheck  width={26} height={26} />
    },
    {
      title: "Your Total Recipients",
      value: dashBoardInfo?.recipientCount,
      icon: <UserPassIcon width={28} height={28} />
    },
    {
      title: "Total Users in Our Application",
      value: dashBoardInfo?.totalUserCount,
      icon: <UserCheck width={28} height={28} />
    },
    {
      title: "Total Emails Sent by Our Application",
      value: dashBoardInfo?.totalMailCount,
      icon: <StackIcon width={26} height={26} />
    },
  ];

  return (
    <Layout>
      <hgroup className="d-sm-flex align-items-center justify-content-between mb-4">
        <div className="col-md-4"></div>
        <div className="col-md-4 text-center">
          <h3 className="h4 ">Welcome, {currentUser.firstName}</h3>
        </div>
        <div className="col-md-4 text-end"></div>
      </hgroup>
      <div className="row">
        {reportCardData.map((card, index) => (
          <ReportCard key={index} {...card} loading={loading} />
        ))}
      </div>
      <article className="row">
        <div className="col-xl-8 col-lg-7 d-none d-md-block">
          <div className="card shadow">
            <header className="card-header py-3 text-center bg-color">
              <h6 className="m-0 font-weight-bold text-white">
                Earnings Overview <span className="small"> (This is Assumption Later will update)</span>
              </h6>
            </header>
            <main className="card-body">
              <div className="chart-area">
                <LineChartOD />
              </div>
            </main>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4 mt-lg-0 mt-md-5">
            <header className="card-header py-3 text-center bg-color">
              <h6 className="m-0 font-weight-bold text-white">Our Grows</h6>
            </header>
            <main className="card-body">
              <div className="chart-pie d-flex justify-content-center">
                <PieChartOD />
              </div>
              <div className="mt-4 text-center small">
                <span className="mr-2">
                  <i className="bi bi-circle-fill small text-color" /> Mails
                </span>
                <span className="mr-2">
                  <i className="bi bi-circle-fill small text-color" /> Users
                </span>
                <span className="mr-2">
                  <i className="bi bi-circle-fill small text-color" />{" "}
                  Recipients
                </span>
              </div>
            </main>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default DashBoard;
