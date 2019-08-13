import React, { Component } from "react";
import { connect } from "react-redux";
import appActions from "../../redux/app/app.actions";
// import socket
import "../../socket";
import BarChartContainer from "../BarChartContainer/BarChartContainer";
import LineChartContainer from "../LineChartContainer/LineChartContainer";
import { ChartWrapper, Wrapper } from "./styles";

export class RootContainer extends Component {
  componentDidMount = () => {
    this.props.connectToSocket();
  };

  render() {
    return (
      <Wrapper>
        <ChartWrapper>
          <BarChartContainer />
          <LineChartContainer />
        </ChartWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  connectToSocket: appActions.subscribeToSocket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);
