import moment from "moment";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";
import appSelector from "../../redux/app/app.selector";

class BarChartContainer extends Component {
  labelFormatter = timestamp => {
    return moment(timestamp).format("HH:mm:ss");
  };

  render() {
    return (
      <ResponsiveContainer width={'100%'} height={250}>
        <BarChart data={this.props.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" tickFormatter={this.labelFormatter} />
          <YAxis dataKey={"value"} />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
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
)(BarChartContainer);
