import * as React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Card,
  CardBody,
  Input,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { Dispatch } from 'redux';
import * as actions from './state/actions';
import { IRootState } from './state/root';
import { Interest } from './state/types';

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

class Interests extends React.Component<IProps, IState> {
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

    if (target.value.trim() === '') {
      return;
    }

    if (key === 'Enter') {
      this.props.addInterest(target.value);
      this.setState({ currentInput: '' });
    }
  };

  public getInterests = () => (
    <ListGroup flush={true}>
      {this.props.interests.map((interest: Interest) => (
        <ListGroupItem key={interest.uuid}>
          <div className="d-flex justify-content-between">
            {interest.name}
            <Button
              color="danger"
              size="sm"
              outline={true}
              name={interest.uuid}
              onClick={this.handleRemove}
            >
              ×
            </Button>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );

  public render() {
    return (
      <Card>
        <CardBody>{this.getInterests()}</CardBody>
        <CardBody>
          <Input
            placeholder="Interest.."
            value={this.state.currentInput}
            name="current"
            onChange={this.handleChange}
            onKeyPress={this.handleKeydown}
            className="mb-3"
          />
          <Button
            block={true}
            color="success"
            disabled={this.props.interests.length === 0}
          >
            I'm done
          </Button>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  interests: state.interests,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addInterest: (value: string) => dispatch(actions.addInterest(value)),
  removeInterest: (uuid: string) => dispatch(actions.removeInterest(uuid)),
});

export default connect<IStateProps, IDispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(Interests);
