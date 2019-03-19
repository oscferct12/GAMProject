import React from "react";
import Router from 'next/router'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import Stats from "components/Stats/Stats.jsx";
import MyVerticallyCenteredModal from "components/Modal/Modal.jsx";
import tools from "variables/tools";
import img from "logo.png";

import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";
import { debug } from "util";

class Dashboard extends React.Component {
  static getInitialProps() {
    return {
      photos: new Array(30).fill(0).map((v, k) => k + 1)
    }
  }

  state = {
    modalShow: false,
    tool: '',
    icon: ''
  };

  constructor(props) {
    super(props);
  }

  render() {

    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div className="content">
        <Row>
          {tools.map((prop, key) => {

            return (
              <Col xs={12} sm={6} md={6} lg={3} key={key} >
                <Card className="card-stats" style={{ height: 160 }} onClick={(event) => { event.preventDefault(); this.setState({ modalShow: true, tool: prop.title, icon: prop.image }) }}>
                  <CardBody>
                    <Row>
                      <Col xs={5} md={4}>
                        <div className="icon-big text-center">
                          <img src={img} />
                        </div>
                      </Col>
                      <Col xs={7} md={8}>
                        <div className="numbers">
                          <p className="card-category">{prop.title}</p>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                  </CardFooter>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle>Users Behavior</CardTitle>
                <p className="card-category">24 Hours performance</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboard24HoursPerformanceChart.data}
                  options={dashboard24HoursPerformanceChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-history",
                      t: " Updated 3 minutes ago"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <MyVerticallyCenteredModal show={this.state.modalShow} onHide={modalClose} properties={this.state} tool={this.state.tool} icon={this.state.icon} />
        <Row>
          <Col xs={12} sm={12} md={4}>
            <Card>
              <CardHeader>
                <CardTitle>Application creation statistics</CardTitle>
                <p className="card-category">Last month</p>
              </CardHeader>
              <CardBody>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Jira{" "}
                  <i className="fa fa-circle text-warning" /> Bitbucket{" "}
                  <i className="fa fa-circle text-danger" /> Jenkins{" "}
                  <i className="fa fa-circle text-gray" /> Tembo
                </div>
                {/*<hr />
                 <Stats>
                  {[
                    {
                      i: "fas fa-calendar-alt",
                      t: "Number of projects created"
                    }
                  ]}
                </Stats> */}
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={8}>
            <Card className="card-chart">
              <CardHeader>
                <CardTitle>Trend of users application</CardTitle>
                <p className="card-category">Line Chart With Points</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart.data}
                  options={dashboardNASDAQChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> Bitbucket{" "}
                  <i className="fa fa-circle text-warning" /> Jira
                </div>
                {/* <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-check",
                      t: " Data information certified"
                    }
                  ]}
                </Stats> */}
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;