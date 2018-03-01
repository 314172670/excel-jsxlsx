import React, { Component } from 'react';

class OutTable extends Component {
    constructor(props) { super(props); };
  
    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped" id="dataSource">
                    <tbody>
                        {this.props.data.map((r, i) => <tr key={i}>
                            {this.props.cols.map(c => <td contentEditable="true" key={c.key}>{r[c.key]}</td>)}
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default OutTable;