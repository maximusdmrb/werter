import store from '../../store/store';

function Services({ match }) {
  // store.dispatch({ type: 'CHOICE_SERVICES', value: match.params.path });
  return <div>{(match.params.path && `${match.params.path}`) || 'Усулги'}</div>;
}

export default Services;
