import React from "react";
import FakeCard from "./FakeCard";
import { Col } from "antd";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = { del: true };
  }

  render() {
    const info = this.props.apiData.map(x => {
      return (
        <Col
          key={x.id}
          className="p-5 rounded"
          gutter={2}
          md={8}
          sm={24}
          lg={6}
          xs={24}
          xl={6}
        >
          {/* FakeCard itself is mapped into a row of cards so that we just need to define a 'Col' to arrange them in the form  of a grid */}

          {/* this.props.deleteLogic uses prop to refer to its parent */}
          <FakeCard
            data={x}
            unique={x.id}
            name={x.name}
            deleteLogic={this.props.deleteLogic}
          />
        </Col>
      );
    });

    return <div className="">{info} </div>;
  }
}

export default Map;
