import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import Interests from './Interests';

interface IBaseProps {
  history: History;
}

const Next = () => <div>Next Page</div>;

const Base = ({ history }: IBaseProps) => {
  return (
    <ConnectedRouter history={history}>
      <React.Fragment>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Start</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/next">Next</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <Switch>
          <Route exact={true} path="/" component={Interests} />
          <Route component={Next} />
        </Switch>
      </React.Fragment>
    </ConnectedRouter>
  );
};

export default Base;
