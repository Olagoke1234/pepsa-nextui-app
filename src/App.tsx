import React from "react";
import { Route, Routes } from "react-router-dom";
import GetStarted from "../src/components/GetStarted";
import CreateAccount from "../src/components/CreateAnAccount";
import VerifyNumber1 from "../src/components/VerifyNumber1";
import SetPin from "../src/components/SetPin";
import UserIdentification from "../src/components/UserIdentification";
import TermsAndConditions from "../src/components/T&Cs";
import PrivacyTerms from "../src/components/PrivacyTerms";
import Indemnity from "../src/components/Indemnity";
import Checkout from "../src/components/Check";
import Dashboard from "./components/Dashboard";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/set-pin" element={<SetPin />} />
      <Route path="/verify-number-1" element={<VerifyNumber1 />} />
      <Route path="/user-identification" element={<UserIdentification />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-terms" element={<PrivacyTerms />} />
      <Route path="/indemnity" element={<Indemnity />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
