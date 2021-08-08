import React from "react";
import { Card } from "react-bootstrap";
const UserCard = ({ user }) => {
    return (
        <div>
            <Card style={{ width: "20rem", margin: "20px" }} className="card">
                <span className="name">{user.username[0]}</span>
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};
export default UserCard;