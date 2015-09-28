var React = require('react');
var ReactDom = require('react-dom');
var _ = require('lodash');
var EverythingObject = require('./EverythingObject');


var Content = class Content extends React.Component {
    constructor() {
        super();
        this.state = {selected: () => <div>Select one</div>};
    }

    render() {
        var Selected = this.state.selected;

        var listItem = function({component, text}) {
            return (<li key={_.uniqueId()}><a href="#" onClick={() => this.setState({selected:component})}>{text}</a></li>)
        }.bind(this);

        return (
            <page>
            <sidebar style={{float:'left', width: 180, height: '100%'}}>
                <ul>
                    {listItem({component:EverythingObject, text:'Everything is an object'})}
                </ul>
            </sidebar>
                <content>
                    <Selected />
                </content>
                </page>
        )
    }
};

ReactDom.render(<Content />, document.querySelector('#content'));