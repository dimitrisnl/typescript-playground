import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from './state/actions';
import { Interest, IStoreState } from './state/types';

interface IStateProps {
  interests: Interest[];
}

interface IDispatchProps {
  addInterest: (value: string) => void;
  removeInterest: (uuid: string) => void;
}

type IProps = IStateProps & IDispatchProps;

interface IState {
  currentInput: string;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { currentInput: '' };
  }

  public handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    this.setState({ currentInput: target.value });
  };

  public handleRemove = (event: React.MouseEvent) => {
    const target = event.target as HTMLButtonElement;
    const uuid = target.name as string;

    this.props.removeInterest(uuid);
  };

  public handleKeydown = (event: any) => {
    const target = event.target as HTMLInputElement;
    const key = event.key;

    if (key === 'Enter') {
      this.props.addInterest(target.value);
      this.setState({ currentInput: '' });
    }
  };

  public render() {
    const selections = this.props.interests.map((interest: Interest) => (
      <div key={interest.uuid}>
        {interest.name}
        <button name={interest.uuid} onClick={this.handleRemove}>
          ×
        </button>
      </div>
    ));

    return (
      <div>
        {selections}
        <input
          value={this.state.currentInput}
          name="current"
          onChange={this.handleChange}
          onKeyPress={this.handleKeydown}
        />
        <button disabled={this.props.interests.length === 0}>I'm done</button>
      </div>
    );
  }
}

export default connect<IStateProps, IDispatchProps, {}, IStoreState>(
  state => ({ interests: state.interests }),
  dispatch => ({
    addInterest: (value: string) => dispatch(actions.addInterest(value)),
    removeInterest: (value: string) => dispatch(actions.removeInterest(value)),
  })
)(App);
