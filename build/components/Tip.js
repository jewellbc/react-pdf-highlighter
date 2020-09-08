function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from "react";
import "../style/Tip.css";

class Tip extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      compact: true,
      text: "",
      emoji: ""
    });
  }

  // for TipContainer
  componentDidUpdate(nextProps, nextState) {
    const {
      onUpdate
    } = this.props;

    if (onUpdate && this.state.compact !== nextState.compact) {
      onUpdate();
    }
  }

  render() {
    const {
      onConfirm,
      onOpen
    } = this.props;
    const {
      compact,
      text,
      emoji
    } = this.state;
    return React.createElement("div", {
      className: "Tip"
    }, compact ? React.createElement("div", {
      className: "Tip__compact",
      onClick: () => {
        onOpen();
        this.setState({
          compact: false
        });
      }
    }, "Add highlight") : React.createElement("form", {
      className: "Tip__card",
      onSubmit: event => {
        event.preventDefault();
        onConfirm({
          text,
          emoji
        });
      }
    }, React.createElement("div", null, React.createElement("select", {
      width: "100%",
      onChange: event => this.setState({
        text: event.target.value
      })
    }, React.createElement("option", {
      value: "0"
    }, "Select Tag:        "), React.createElement("option", {
      value: "TestArticle"
    }, "TestArticle"), React.createElement("option", {
      value: "Vehicle"
    }, "Vehicle"), React.createElement("option", {
      value: "TestArticleVerification"
    }, "TestArticleVerification"), React.createElement("option", {
      value: "GroupName"
    }, "GroupName"), React.createElement("option", {
      value: "GroupSize"
    }, "GroupSize"), React.createElement("option", {
      value: "SampleSize"
    }, "SampleSize"), React.createElement("option", {
      value: "Species"
    }, "Species"), React.createElement("option", {
      value: "Strain"
    }, "Strain"), React.createElement("option", {
      value: "Sex"
    }, "Sex"), React.createElement("option", {
      value: "CellLine"
    }, "CellLine"), React.createElement("option", {
      value: "Dose"
    }, "Dose"), React.createElement("option", {
      value: "DoseUnits"
    }, "DoseUnits"), React.createElement("option", {
      value: "DoseFrequency"
    }, "DoseFrequency"), React.createElement("option", {
      value: "DoseDuration"
    }, "DoseDuration"), React.createElement("option", {
      value: "DoseDurationUnits"
    }, "DoseDurationUnits"), React.createElement("option", {
      value: "DoseRoute"
    }, "DoseRoute"), React.createElement("option", {
      value: "TimeAtDose"
    }, "TimeAtDose"), React.createElement("option", {
      value: "TimeUnits"
    }, "TimeUnits"), React.createElement("option", {
      value: "TimeAtFirstDose"
    }, "TimeAtFirstDose"), React.createElement("option", {
      value: "TimeAtLastDose"
    }, "TimeAtLastDose"), React.createElement("option", {
      value: "Endpoint"
    }, "Endpoint"), React.createElement("option", {
      value: "EndpointUnitOfMeasure"
    }, "EndpointUnitOfMeasure"), React.createElement("option", {
      value: "EndpointTimeAssessed"
    }, "EndpointTimeAssessed"))), React.createElement("div", null, React.createElement("input", {
      type: "submit",
      value: "Save"
    }))));
  }

}

export default Tip;