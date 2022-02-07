import './PleaseVerifyYourEmail.scss';

import React from 'react';

const PleaseVerifyYourEmail = () => {
  React.useEffect(() => {
    localStorage.clear('persist:root');
  }, []);

  return (
    <div className="verify-your-email-base">
      <h2>Please Verify Your Email!</h2>
      <p>Please Check you Email Id For Verification Link!</p>
      {/* <p>Didnot get Verification Link?</p>
      <span className="resend-verification-link-button">Resend Link</span> */}
    </div>
  );
};

export default PleaseVerifyYourEmail;
