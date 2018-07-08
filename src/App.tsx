import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from './state/actions';
import { IStoreState, Item } from './state/types';

interface IProps {
  things: any;
  addThing: (value: string) => void;
  removeThing: (uuid: string) => void;
}

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

    this.props.removeThing(uuid);
  };

  public handleKeydown = (event: any) => {
    const target = event.target as HTMLInputElement;
    const key = event.key;

    if (key === 'Enter') {
      this.props.addThing(target.value);
      this.setState({ currentInput: '' });
    }
  };

  public render() {
    const selections = this.props.things.map((item: Item) => (
      <div key={item.uuid}>
        {item.value}
        <button name={item.uuid} onClick={this.handleRemove}>
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
        <button disabled={this.props.things.length === 0}>I'm done</button>
      </div>
    );
  }
}

export const mapStateToProps = ({ things }: IStoreState) => {
  return {
    things,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<actions.ThingAction>) => {
  return {
    addThing: (value: string) => dispatch(actions.addThing(value)),
    removeThing: (uuid: string) => dispatch(actions.removeThing(uuid)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App as any);
