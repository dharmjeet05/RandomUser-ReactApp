import React from "react";

import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhone,
  FaCalendar,
  FaUserFriends,
} from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card className="shadow-lg">
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
          alt="profile-pic"
        />
        <CardTitle>
          <h2>
            {details.name?.title} {details.name?.first}
            {details.name?.last}
          </h2>
        </CardTitle>
        <hr />
        <CardText>
          <h6 className="mt-3">
            <FaEnvelope className="me-2" />
            {details.email}
          </h6>
        </CardText>
        <CardText>
          <h6 className="mt-3">
            <FaMapMarkedAlt className="me-2" />
            {details.location?.city}, {details.location?.state},{" "}
            {details.location?.country}
          </h6>
        </CardText>
        <CardText>
          <h6 className="mt-3">
            <FaPhone className="me-2" />
            {details.phone}
          </h6>
        </CardText>
        <CardText>
          <h6 className="mt-3 text-capitalize">
            <FaUserFriends className="me-2" />
            {details.gender}
          </h6>
        </CardText>
        <CardText>
          <h6 className="mt-3">
            <FaCalendar className="me-2" />
            {details.dob?.age}
          </h6>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;
