import moment from "moment";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";
import appSelector from "../../redux/app/app.selector";

export class LineChartContainer extends Component {
  labelFormatter = timestamp => {
    return moment(timestamp).format("HH:mm:ss");
  };
  render() {
    return (
      <ResponsiveContainer width={"100%"} height={250}>
        <LineChart data={this.props.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis tickFormatter={this.labelFormatter} dataKey="timestamp" />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

const mapStateToProps = state => ({
  data: appSelector.selectChartData(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LineChartContainer);
