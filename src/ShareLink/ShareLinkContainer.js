import { connect } from 'react-redux';
import ShareLink from './ShareLink';
import { stateJsonGet } from '../reducer';
import { zip } from '../zip';

const mapStateToProps = state => ({
  setupLink: `#${zip(JSON.stringify(stateJsonGet(state)))}`,
});

export default connect(mapStateToProps)(ShareLink);
