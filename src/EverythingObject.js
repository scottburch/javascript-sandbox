var React = require('react');

function fnToJsx(fn) {
    var fnString = fn.toString();
    fnString = fnString.replace(/function .*?{.*?\n(.*)/, '$1');
    window.s = fnString;
    var arr = fnString.split('');
    return arr.map((c, idx) => {
        c === ' ' && (c = <span key={_.uniqueId()} style={{width:arr[idx+1] === ' ' ? 3 : 5, display: 'inline-block'}}></span>);
        c === '\n' && (c = <br key={_.uniqueId()} />);
        return c;
    })
}

module.exports = class EverythingObject extends React.Component {
    render() {
        String.prototype.greet = function() {return `Hello ${this}!`};
        Number.prototype.add3 = function() {return this + 3}
        Number.prototype.times = function(fn) {
            for(var i = 0; i < this;i++) {
                fn(i);
            }
        }
        var timesFn = () => {
            var n = 3;
            var out = '';
            (n).times(idx => out += idx);
            return out;
        }
        var uniq = () => uniq.count = uniq.count ? ++uniq.count : 1;

        return (
            <ul>
                <li>(1).toString() = "{(1).toString()}"</li>
                <li>typeof (1).toString() = "{typeof (1).toString()}"</li>
                <li>
                        String.prototype.greet =function() &#123;return `Hello $&#123;this&#125;!`&#125;;<br/>
                        'Scott'.greet() = "{'Scott'.greet()}"
                </li>
                <li>
                        Number.prototype.add3 = function() &#123;return this + 3&#125;;<br/>
                        (1).add3() = {(1).add3()}
                </li>
                <li>
                    Number.prototype.times = {Number.prototype.times.toString()}<br/>
                    {fnToJsx(timesFn)}<br/>
                    out = "{timesFn()}"
                </li>
                <li>
                    {uniq.toString()}<br/>
                    uniq() = {uniq()};<br/>
                    uniq() = {uniq()};<br/>
                    uniq() = {uniq()}
                </li>
            </ul>
        )
    }
};