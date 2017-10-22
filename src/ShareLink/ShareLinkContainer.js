import { connect } from 'react-redux';
import ShareLink from './ShareLink';
import { setupJson } from '../reducer';
import { zip } from '../zip';

const mapStateToProps = state => ({
  setupLink: `#${zip(JSON.stringify(setupJson.get(state)))}`,
});

export default connect(mapStateToProps)(ShareLink);
