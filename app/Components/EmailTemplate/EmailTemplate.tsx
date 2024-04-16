import * as React from "react";

interface EmailTemplateProps {
    firstName: string;
    username: string;
    password: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ firstName, username, password }) => {
    return (
        <div>
            <h1>Welcome to Jobify!</h1>
            <p>Hi {firstName},</p>
            <p>Thank you for signing up for Jobify! Your username is {username} and your password is {password}. Please keep this information secure.</p>
            <p>Best,</p>
            <p>The Jobify Team</p>
        </div>
    );
}
export default EmailTemplate