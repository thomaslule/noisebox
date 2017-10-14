import { connect } from 'react-redux';
import ShareLink from './ShareLink';

const mapStateToProps = state => ({
  stateLink: `#${btoa(JSON.stringify(state))}`,
});

export default connect(mapStateToProps)(ShareLink);
