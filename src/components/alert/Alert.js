import { connect } from 'react-redux';

const Alert = ({ alertMsg }) => {
  return (
    <div className="alert alert-danger" style={alertMsg === '' ? {display: 'none'} : {display: 'block'}}role="alert">
      {alertMsg}
    </div>
  )  
}

const mapStateToProps = state => ({
  alertMsg: state.alert.alertMsg
})

export default connect(mapStateToProps)(Alert)