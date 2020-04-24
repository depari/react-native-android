class EventDisplay extends react.Component {
    constructor(props) {
        super(props);
        this.state = {displayText: "none"};
        this.updateText = this.updateText().bind(this);
      }
    updateText() {
               this.setState(state => ({
                 showWarning: !state.showWarning
               }));
             }
    render() {
        return (
            <Text > {this.state.displayText}</Text>
        );
           

    }
}

export default EventDisplay;