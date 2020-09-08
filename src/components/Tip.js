// @flow

import React, { Component } from "react";

import "../style/Tip.css";

type State = {
  compact: boolean,
  text: string,
  emoji: string
};

type Props = {
  onConfirm: (comment: { text: string, emoji: string }) => void,
  onOpen: () => void,
  onUpdate?: () => void
};

class Tip extends Component<Props, State> {
  state: State = {
    compact: true,
    text: "",
    emoji: ""
  };

  // for TipContainer
  componentDidUpdate(nextProps: Props, nextState: State) {
    const { onUpdate } = this.props;

    if (onUpdate && this.state.compact !== nextState.compact) {
      onUpdate();
    }
  }

  render() {
    const { onConfirm, onOpen } = this.props;
    const { compact, text, emoji } = this.state;

    return (
      <div className="Tip">
        {compact ? (
          <div
            className="Tip__compact"
            onClick={() => {
              onOpen();
              this.setState({ compact: false });
            }}
          >
            Add highlight
          </div>
        ) : (
          <form
            className="Tip__card"
            onSubmit={event => {
              event.preventDefault();
              onConfirm({ text, emoji });
            }}
          >

              <div>
                <select
                  width="100%"
                  onChange={event => this.setState({ text: event.target.value })}>
                  <option value="0">Select Tag:        </option>
                  <option value="TestArticle">TestArticle</option>
                  <option value="Vehicle">Vehicle</option>
                  <option value="TestArticleVerification">TestArticleVerification</option>
                  <option value="GroupName">GroupName</option>
                  <option value="GroupSize">GroupSize</option>
                  <option value="SampleSize">SampleSize</option>
                  <option value="Species">Species</option>
                  <option value="Strain">Strain</option>
                  <option value="Sex">Sex</option>
                  <option value="CellLine">CellLine</option>
                  <option value="Dose">Dose</option>
                  <option value="DoseUnits">DoseUnits</option>
                  <option value="DoseFrequency">DoseFrequency</option>
                  <option value="DoseDuration">DoseDuration</option>
                  <option value="DoseDurationUnits">DoseDurationUnits</option>
                  <option value="DoseRoute">DoseRoute</option>
                  <option value="TimeAtDose">TimeAtDose</option>
                  <option value="TimeUnits">TimeUnits</option>
                  <option value="TimeAtFirstDose">TimeAtFirstDose</option>
                  <option value="TimeAtLastDose">TimeAtLastDose</option>
                  <option value="Endpoint">Endpoint</option>
                  <option value="EndpointUnitOfMeasure">EndpointUnitOfMeasure</option>
                  <option value="EndpointTimeAssessed">EndpointTimeAssessed</option>
                </select>
              </div>
            
            <div>
              <input type="submit" value="Save" />
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default Tip;
