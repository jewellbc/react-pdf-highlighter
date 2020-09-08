// @flow

import React, { Component } from "react";

import type { T_PDFJS, T_PDFJS_Document } from "../types";

import pdfjs from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

type Props = {
  url: string,
  beforeLoad: React$Element<*>,
  children: (pdfDocument: T_PDFJS_Document) => React$Element<*>,
  onError?: (error: Error) => void,
  data: string
};

type State = {
  pdfDocument: ?T_PDFJS_Document
};

class PdfLoader extends Component<Props, State> {
  state = {
    pdfDocument: null
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate({ url }: Props) {
    if (this.props.url !== url) {
      this.load();
    }
  }

  load() {
    const { url, onError } = this.props;
    this.setState({ pdfDocument: null });

    if (url[0] == 'h' || url[0] == '.') {
      pdfjs
        .getDocument({ url: url, eventBusDispatchToDOM: true })
        .promise.then(pdfDocument => {
          this.setState({
            pdfDocument: pdfDocument
          });
        })
        .catch(onError);
    }
    else {
          //alert("here");
          const pdfData = this.props.data;
          pdfjs
            .getDocument({ data: pdfData, eventBusDispatchToDOM: true })
            .promise.then(pdfDocument => {
              this.setState({
                pdfDocument: pdfDocument
              });
            })
            .catch(onError);
          //console.log(url);
    }
  }

  render() {
    const { children, beforeLoad } = this.props;
    const { pdfDocument } = this.state;

    if (pdfDocument) {
      return children(pdfDocument);
    }

    return beforeLoad;
  }
}

export default PdfLoader;
