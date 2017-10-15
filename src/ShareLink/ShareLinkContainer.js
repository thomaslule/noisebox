import { connect } from 'react-redux';
import ShareLink from './ShareLink';
import { zip } from '../zip';

const mapStateToProps = state => ({
  stateLink: `#${zip(JSON.stringify(state))}`,
});

export default connect(mapStateToProps)(ShareLink);
