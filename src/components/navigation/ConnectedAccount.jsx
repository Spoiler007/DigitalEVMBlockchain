import React from "react";
import PropTypes from "prop-types";


const ConnectedAccount = ({ account }) => {
  return (
    <p className="connect-btn" style={{ fontSize: 14, fontWeight: 400 }}>
      {account ? account : <span>Connect Account</span>}
    </p>
  );
};

ConnectedAccount.propTypes = {
  account: PropTypes.node,
};

export default ConnectedAccount;
