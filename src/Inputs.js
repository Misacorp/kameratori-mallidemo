import React from 'react';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
  textfield: {
    display: 'block',
    marginTop: '0.5em',
  },
};

const initialState = {
  brand: '',
  model: '',
  name: '',
  nameTouched: false,
  tooltips: {
    brand: false,
    model: false,
    name: false,
  },
};

class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  handleChange(event) {
    let newState = { [event.target.name]: event.target.value };

    // Update both model and name if name hasn't been touched.
    if (event.target.name === 'model' && !this.state.nameTouched) {
      newState = { ...newState, name: event.target.value };
    }

    // If changing name, make sure modifying the model does not change name further
    if (event.target.name === 'name') {
      newState = { ...newState, nameTouched: true };
    }

    this.setState(newState);
  }


  showTooltip(event) {
    const key = event.target.name;
    const newTooltips = this.state.tooltips;
    newTooltips[key] = true;
    this.setState({ ...this.state, tooltips: newTooltips });
  }


  hideTooltip(event) {
    const key = event.target.name;
    const newTooltips = this.state.tooltips;
    newTooltips[key] = false;
    this.setState({ ...this.state, tooltips: newTooltips });
  }


  render() {
    return (
      <div>
        <Tooltip title="Syötä tuotteen merkki" open={this.state.tooltips.brand}>
          <TextField
            id="brand"
            name="brand"
            label="Merkki"
            value={this.state.brand}
            onChange={this.handleChange}
            style={styles.textfield}
            fullWidth
            onFocus={this.showTooltip}
            onBlur={this.hideTooltip}
          />
        </Tooltip>

        <Tooltip title="Syötä tuotteen malli" open={this.state.tooltips.model}>
          <TextField
            id="model"
            name="model"
            label="Malli"
            value={this.state.model}
            onChange={this.handleChange}
            style={styles.textfield}
            fullWidth
            onFocus={this.showTooltip}
            onBlur={this.hideTooltip}
          />
        </Tooltip>

        <Tooltip title="Halutessasi muokkaa tuotteen nimeä sisältämään lisätietoa" open={this.state.tooltips.name}>
          <TextField
            id="name"
            name="name"
            label="Tuotteen nimi"
            value={this.state.name}
            onChange={this.handleChange}
            style={styles.textfield}
            fullWidth
            onFocus={this.showTooltip}
            onBlur={this.hideTooltip}
          />
        </Tooltip>
      </div>
    );
  }
}

export default Inputs;
